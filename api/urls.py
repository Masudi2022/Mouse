from django.urls import path
from app import views

urlpatterns = [
    path('home/', views.home),
    path('student/', views.student),
    path('standing/', views.standing),
    path('squad/', views.squad),
    path('community/register/', views.register),
    path('comment/', views.comment),
    path('news/', views.news),
    path('fixture/', views.fixture),
    path('team/', views.team),
    path('squad/<int:id>/', views.biography),
    path('community/login/', views.login),
    path('logout/', views.logout),  # Make sure this matches the view function
]
