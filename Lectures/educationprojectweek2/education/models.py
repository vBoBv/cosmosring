from django.db import models


class University(models.Model):
    AUCKLAND = 'AKL'
    WELLINGTON = 'WLT'
    CHRISTCHURCH = 'CRC'
    COUNTRY = 'New Zealand'
    CITY_IN_NZ = [
        (AUCKLAND, 'Auckland'),
        (WELLINGTON, 'Wellington'),
        (CHRISTCHURCH, 'Christchurch'),
    ]

    name = models.CharField(max_length=100)
    street_number = models.IntegerField()
    street_name = models.CharField(max_length=50)
    suburb = models.CharField(max_length=50)
    city = models.CharField(max_length=3, choices=CITY_IN_NZ, default=AUCKLAND)
    country = models.CharField(max_length=30, default=COUNTRY, editable=False)

    class ReadonlyMeta:
        readonly = ["country"]

    def __str__(self):
        return self.name


class Department(models.Model):
    name = models.CharField(max_length=200)
    university = models.ForeignKey(University, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name} - {self.university}'


class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
