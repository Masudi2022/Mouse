from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('kits', views.kits, name='kits'),
    path('fixture', views.fixture, name='fixture'),
    path('contact', views.contact, name='contact'),
    path('about', views.about, name='about'),
    path('squad', views.squad, name='squad'),
    path('bio/<int:id>', views.biography, name='bio'),
    path('login', views.login, name='login')
    
]