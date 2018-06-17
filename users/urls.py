"""为应用程序users定义url模式"""

from django.urls import path
from django.contrib.auth.views import login

from . import views

app_name = 'users'

urlpatterns = [
    # 为什么这里需要指定模板路径？ 因为采用了默认视图login，没有指定模板，需要给login传递一个字典来告诉它
    path('login/', login, {'template_name': 'users/login.html'}, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register, name='register')
]
