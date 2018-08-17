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
    return render(request, 'portfolio.html', locals())

def universe(request):
    title='welcome'
    return render(request, 'universe.html', locals())

def RealAbout(request):
    title='welcome'
    return render(request, 'about.html', locals())

def Contact(request):
    title='welcome'
    return render(request, 'contact.html', locals())
