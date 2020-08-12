from django.contrib import admin
from .models import University, Department, Student

educationModels = [University, Department, Student]

admin.site.register(educationModels)
