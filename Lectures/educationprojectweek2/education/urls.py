from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_education, name="all_education"),
    path('departments/', views.all_department, name="all_department"),
    path('students/', views.all_students, name="all_students"),
]