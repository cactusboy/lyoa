from django.shortcuts import render, get_object_or_404, render_to_response, redirect
from django.http import HttpResponseRedirect, Http404
from django.urls import reverse
from .models import Topic, Entry
from .forms import TopicForm, EntryForm
from django.contrib.auth.decorators import login_required


def index(request):
    """主页视图"""
    return render(request, 'learning_logs/index.html')


@login_required
def topics(request):
    """显示所有的旅行团"""
    topics = Topic.objects.filter(owner=request.user).order_by('date_added')
    context = {'topics': topics}
    return render(request, 'learning_logs/topics.html', context)


# 同行确认列表页
@login_required
def topics_table(request):
    """显示所有的旅行团"""
    topics = Topic.objects.filter(owner=request.user).order_by('date_added')
    context = {'topics': topics}
    return render(request, 'learning_logs/table.html', context)


# 导游交团列表页
@login_required
def tour_doc(request):
    """显示所有的旅行团"""
    topics = Topic.objects.filter(owner=request.user).order_by('date_added')
    context = {'topics': topics}
    return render(request, 'learning_logs/tour_doc.html', context)


@login_required
def main(request):
    """管理页"""
    return render(request, 'learning_logs/main.html')


def preview(request):
    """旅行团预览"""
    return render(request, 'learning_logs/preview.html')


def nav(request):
    """侧边栏"""
    return render(request, 'learning_logs/nav.html')


def table(request):
    """表格"""
    return render(request, 'learning_logs/table.html')


# 与topic一样性质的table_view，用来形成确认书
@login_required
def table1(request, topic_id):
    """生成同行确认书"""
    # 向数据库进行查询
    tables = Topic.objects.get(id=topic_id)
    # topic = get_object_or_404(Topic, id = topic_id)   可代替，若不存在则返回404页面

    # 确保用户无法查看别人的Topic
    if tables.owner != request.user:
        raise Http404
    entries1 = tables.entry_set.order_by('-date_added')

    context = {'tables': tables, 'entries': entries1}
    return render(request, 'learning_logs/table1.html', context)


# 导游交团文档
@login_required
def tour_docid(request, topic_id):
    """生成导游交团文档"""
    # 向数据库进行查询
    tables = Topic.objects.get(id=topic_id)
    # topic = get_object_or_404(Topic, id = topic_id)   可代替，若不存在则返回404页面

    # 确保用户无法查看别人的Topic
    if tables.owner != request.user:
        raise Http404
    entries1 = tables.entry_set.order_by('-date_added')

    context = {'tour_doc': tour_doc, 'entries': entries1}
    return render(request, 'learning_logs/tour_docid.html', context)


@login_required
def topic(request, topic_id):
    """显示单个主题及其所有的条目"""
    # 向数据库进行查询
    topic = Topic.objects.get(id=topic_id)
    # topic = get_object_or_404(Topic, id = topic_id)   可代替，若不存在则返回404页面

    # 确保用户无法查看别人的Topic
    if topic.owner != request.user:
        raise Http404
    entries = topic.entry_set.order_by('-date_added')

    context = {'topic': topic, 'entries': entries, 'img': topic.img}
    return render(request, 'learning_logs/topic.html', context)


@login_required
def new_topic(request):
    """创建新主题"""
    if request.method != 'POST':
        form = TopicForm()
    else:
        form = TopicForm(request.POST)
        if form.is_valid():
            new_topic = form.save(commit=False)  # 暂时不存入数据库
            new_topic.owner = request.user  # 绑定user
            new_topic.save()  # 再存入数据库
            # reverse 反向解析url
            return HttpResponseRedirect(reverse('learning_logs:topics'))

    context = {'form': form}
    return render(request, 'learning_logs/new_topic.html', context)


@login_required
def new_entry(request, topic_id):
    """在特定主题中添加新条目"""
    topic = Topic.objects.get(id=topic_id)
    if topic.owner != request.user:
        raise Http404

    if request.method != 'POST':
        # 初次访问页面，生成空表单
        form = EntryForm()
    else:
        form = EntryForm(data=request.POST)
        if form.is_valid():
            new_entry = form.save(commit=False)
            new_entry.topic = topic
            new_entry.save()

            return HttpResponseRedirect(reverse('learning_logs:topic', args=[topic_id]))

    context = {'topic': topic, 'form': form}
    return render(request, 'learning_logs/new_entry.html', context)


@login_required
def edit_entry(request, entry_id):
    """编辑条目"""
    entry = Entry.objects.get(id=entry_id)
    topic = entry.topic
    if topic.owner != request.user:
        raise Http404

    if request.method != 'POST':
        form = EntryForm(instance=entry)
    else:
        form = EntryForm(instance=entry, data=request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('learning_logs:topic', args=[topic.id]))

    context = {'entry': entry, 'topic': topic, 'form': form}
    return render(request, 'learning_logs/edit_entry.html', context)


def test(request):
    """测试页"""
    return render(request, 'learning_logs/test.html')


def topicsmain(request):
    """mian里面的topics"""
    return render(request, 'learning_logs/topics.html')


def entry_del(request):
    """删除数据"""
    nid = request.GET.get('nid')
    Entry.objects.filter(id=nid).delete()
    return redirect('learning_logs/topic.html')
    # return render(request, 'learning_logs/topic.html')
