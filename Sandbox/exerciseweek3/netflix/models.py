from django.db import models


class Account(models.Model):
    name = models.CharField(max_length=150)
    image = models.ImageField()

    def __str__(self):
        return self.name


class Video(models.Model):
    title = models.CharField(max_length=256)
    duration = models.IntegerField()
    description = models.TextField()
    picture = models.ImageField()
    genre = models.ManyToManyField('Genre')

    def __str__(self):
        return f'Video: {self.title}'


class Genre(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return f'Genre: {self.name}'
