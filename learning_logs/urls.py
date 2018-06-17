"""定义Learning_logs的url模式"""

from django.urls import path
from . import views

app_name = 'learning_logs'                  # 取代namespace
urlpatterns = [
    # 主页
    path('', views.index, name='index'),     # url()改为path()， 不需要正则表达式了
    path('topics/', views.topics, name='topics'),
    path('topics/<int:topic_id>/', views.topic, name='topic'),
    path('new_topic/', views.new_topic, name='new_topic'),
    path('new_entry/<int:topic_id>/', views.new_entry, name='new_entry'),
    path('edit_entry/<int:entry_id>/', views.edit_entry, name='edit_entry'),
    path('main/', views.main, name='main'),
    path('main/nav.html', views.nav, name='nav'),
    path('main/table.html', views.table, name='table'),
]