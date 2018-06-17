from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse
from django.contrib.auth import logout, login, authenticate
from django.http import HttpResponseRedirect


# Create your views here.
def logout_view(request):
    """注销"""
    logout(request)
    return HttpResponseRedirect(reverse('learning_logs:index'))


def register(request):
    """注册新用户"""
    if request.method != 'POST':
        form = UserCreationForm()

    else:
        form = UserCreationForm(data=request.POST)

        if form.is_valid():
            new_user = form.save()
            # 自动登录，并跳转到主页
            authenticated_user = authenticate(username=new_user.username, password=request.POST['password1'])
            login(request, authenticated_user)
            return HttpResponseRedirect(reverse('learning_logs:index'))

    context = {'form': form}
    return render(request, 'users/register.html', context)
