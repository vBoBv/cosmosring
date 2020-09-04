from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **other_fields):
        if not email:
            raise ValueError("Email is required!")
        user = self.model(email=self.normalize_email(email), username=username, **other_fields)
        user.set_password(password)
        user.save(using=self._db)

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
    is_order_manger = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


class Address(models.Model):
    AUCKLAND = 'AKL'
    WELLINGTON = 'WELL'
    CHRISTCHURCH = 'CHC'

    CITY_IN_NZ = [
        (AUCKLAND, 'Auckland'),
        (WELLINGTON, 'Wellington'),
        (CHRISTCHURCH, 'Christchurch'),
    ]

    street_address = models.CharField(max_length=255)
    suburb = models.CharField(max_length=100)
    city = models.CharField(max_length=4, choices=CITY_IN_NZ, default=AUCKLAND)
    country = models.CharField(max_length=100, default="New Zealand")
    postcode = models.IntegerField()


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone_number = models.IntegerField()


class OrderManager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)


class Payment(models.Model):
    amount = models.FloatField()
    payment_date = models.DateTimeField(auto_now_add=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)


class Shipment(models.Model):
    payment = models.OneToOneField(Payment, on_delete=models.CASCADE, primary_key=True)


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_manager = models.ManyToManyField(OrderManager)
    order_date = models.DateTimeField(auto_now_add=True)


class Discount(models.Model):
    discount_code = models.CharField(max_length=100)


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    image = models.ImageField(null=True)


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    image = models.ImageField(null=True)
    description = models.TextField(blank=True)
    category = models.ManyToManyField(Category)
    discount = models.ManyToManyField(Discount)


class OrderDetail(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, primary_key=True)
    product = models.ManyToManyField(Product)
    quantity = models.IntegerField()


class Review(models.Model):
    customer = models.ManyToManyField(Customer)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    rating = models.IntegerField()
