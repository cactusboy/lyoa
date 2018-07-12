"""定义Learning_logs的url模式"""

from django.urls import path
from . import views

app_name = 'learning_logs'  # 取代namespace
urlpatterns = [
    # 主页
    path('', views.index, name='index'),  # url()改为path()， 不需要正则表达式了
    path('topics/', views.topics, name='topics'),
    # 导游交团文档预览页
    path('tour_doc/', views.tour_doc, name='tour_doc'),
    # 导游交团文档明细页
    path('tour_doc/<int:topic_id>/', views.table1, name='table1'),
    path('topics/<int:topic_id>/', views.topic, name='topic'),
    path('main/new_topic.html', views.new_topic, name='new_topic'),
    path('new_entry/<int:topic_id>/', views.new_entry, name='new_entry'),
    path('edit_entry/<int:entry_id>/', views.edit_entry, name='edit_entry'),
    path('main/', views.main, name='main'),
    path('main/nav.html', views.nav, name='nav'),
    # 复制topics内容,用来做确认书
    path('main/table/', views.topics_table, name='table'),
    path('main/preview.html', views.preview, name='preview'),
    path('test/', views.test, name='test'),
    path('main/topics.html', views.topicsmain, name='topicsmian'),
    # table/id用来做确认书
    path('main/table/<int:topic_id>/', views.table1, name='table1'),
    # 删除数据
    # path('topics/<int:topic_id>/', views.topic_del, name='del'),
]
