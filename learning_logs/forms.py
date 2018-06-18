from django import forms
from .models import Topic, Entry


class TopicForm(forms.ModelForm):
    class Meta(object):
        date_start = forms.DateField()
        model = Topic   # 表单字段等于Topic模型中的字段
        fields = ['tour_name', 'text', 'date_start']    # 显示姓名，备注，开始日期字段
        labels = {'text': ''}       # 备注字段不显示label


class EntryForm(forms.ModelForm):
    class Meta(object):
        model = Entry
        fields = ['text', 'name', 'signup', 'sex', 'number', 'phone', 'bunk', 'money']
        labels = {'text': ''}
        widgets = {'text': forms.Textarea(attrs={'cols': 80})}
