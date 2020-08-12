from django.shortcuts import render
from .models import Genre, Video, Account


def accounts(request):
    accounts = Account.objects.all()
    return render(request, 'accounts.html', {'accounts': accounts})


def videos(request):
    videos = Video.objects.all()
    return render(request, 'videos.html', {'videos': videos})


def genres(request):
    genres = Genre.objects.all()
    return render(request, 'genres.html', {'genres': genres})
