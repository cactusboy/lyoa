from django import forms
from .models import Topic, Entry


class TopicForm(forms.ModelForm):
    class Meta(object):
        model = Topic
        fields = ['tour_name', 'text', 'date_start']
        labels = {'text': ''}


class EntryForm(forms.ModelForm):
    class Meta(object):
        model = Entry
        fields = ['text', 'name', 'signup', 'sex', 'number', 'phone', 'bunk', 'money' ]
        labels = {'text': ''}
        widgets = {'text': forms.Textarea(attrs={'cols': 80})}
