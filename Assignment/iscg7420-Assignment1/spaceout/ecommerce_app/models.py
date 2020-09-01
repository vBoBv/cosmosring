from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class CustomerManager(BaseUserManager):

    def create_customer(self, email, password=None, **other_fields):
        if not email:
            raise ValueError("Email is required!")
        customer = self.model(email=self.normalize_email(email), **other_fields)
        customer.set_password(password)
        customer.save(using=self._db)

        return customer


class Customer(AbstractBaseUser, PermissionsMixin):

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.IntegerField(max_length=20)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomerManager()

    USERNAME_FIELD = 'email'
