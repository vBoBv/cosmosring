from django.shortcuts import render
from .models import University, Student, Department


def all_education(request):
    universities = University.objects.all()
    return render(request, 'all_education.html', {'universities': universities})


def all_department(request):
    departments = Department.objects.all()
    return render(request, 'all_department.html', {'departments': departments})


def all_students(request):
    students = Student.objects.all()
    return render(request, 'all_student.html', {'students': students})

