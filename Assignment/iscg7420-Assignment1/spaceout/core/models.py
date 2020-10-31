from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db.models.signals import post_save
from django.dispatch import receiver


class UserManager(BaseUserManager):
    @receiver(post_save, sender=BaseUserManager)
    def create_user(self, email, username, password=None, **other_fields):
        if not email:
            raise ValueError("Email is required!")
        user = self.model(email=self.normalize_email(email), username=username, **other_fields)
        user.set_password(password)
        user.save(using=self._db)
        print('User created')

        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(email, username, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)
    is_order_manager = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email


class Customer(models.Model):
    AUCKLAND = 'AKL'
    WELLINGTON = 'WELL'
    CHRISTCHURCH = 'CHC'

    CITY_IN_NZ = [
        (AUCKLAND, 'Auckland'),
        (WELLINGTON, 'Wellington'),
        (CHRISTCHURCH, 'Christchurch'),
    ]

    user = models.OneToOneField('User', on_delete=models.CASCADE, primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=50)
    street_address = models.CharField(max_length=255)
    suburb = models.CharField(max_length=100)
    city = models.CharField(max_length=4, choices=CITY_IN_NZ, default=AUCKLAND)
    country = models.CharField(max_length=100, default="New Zealand")
    postcode = models.IntegerField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class OrderManager(models.Model):
    user = models.OneToOneField('User', on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.user.email


class Payment(models.Model):
    amount = models.FloatField()
    payment_date = models.DateTimeField(auto_now_add=True)
    customer = models.ForeignKey('Customer', on_delete=models.CASCADE)

    def __str__(self):
        return f'Customer: {self.customer.first_name} {self.customer.last_name}'


class Shipment(models.Model):
    payment = models.OneToOneField('Payment', on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return f'Address: {self.payment.customer.street_address}, {self.payment.customer.suburb}, {self.payment.customer.city}, {self.payment.customer.country}'


class Order(models.Model):
    customer = models.ForeignKey('Customer', on_delete=models.CASCADE)
    order_manager = models.ManyToManyField('OrderManager')
    order_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.customer)
