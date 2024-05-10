from django.shortcuts import render
from .models import Squad, Fixture, Team, New, Standing
from django.contrib.auth.decorators import login_required

def home(request):
    new = New.objects.all()
    standing = Standing.objects.all().order_by('-points')
    context = {
        'new':new,
        'standing':standing
    }
    return render(request, 'mouse/home.html', context)

def about(request):
    return render(request, 'mouse/about.html')

def kits(request):
    return render(request, 'mouse/kits.html')

def squad(request):
    members = Squad.objects.all()
    context ={
        'members': members
    }
    return render(request, 'mouse/squad.html', context)
def contact(request):
    return render(request, 'mouse/contact.html')

def fixture(request):
    fixture = Fixture.objects.all()
    context = {
        'fixture': fixture
    }
    return render(request, 'mouse/fixture.html', context)

@login_required(login_url="login")
def biography(request, id):
    staff = Squad.objects.get(id=id)
    context = {
        'staff':staff
    }
    return render(request, 'mouse/bio.html', context)

def login(request):
    return render(request, 'mouse/sign.html')

# Create your views here.
