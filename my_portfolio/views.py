from django.shortcuts import render

# Create your views here.
from my_portfolio.models import Project


def welcome(request):
    title='welcome'
    return render(request, 'welcome.html', locals())

def about(request):
    title='welcome'
    return render(request, 'index.html', locals())

def projects(request):
    projects = Project.objects.all()
    return render(request, 'welcome.html', locals())
