from django.urls import path
from . import views

app_name = 'netflix'

urlpatterns = [
    path('', views.accounts, name="accounts"),
    path('videos', views.videos, name="videos"),
    path('genres/', views.genres, name="genres"),
]
