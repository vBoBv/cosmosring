from django.contrib import admin
from .models import Video, Genre, Account

netflixModels = [Video, Genre, Account]

admin.site.register(netflixModels)
