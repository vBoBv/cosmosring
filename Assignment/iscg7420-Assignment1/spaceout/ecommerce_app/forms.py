from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from .models import User, Customer, Product, Category, Discount, OrderManager, Payment, Order, OrderDetail, Shipment, Review
from django.db import transaction
from django.core.mail import send_mail


class SpaceObjectForm(ModelForm):
    class Meta:
        model = Product
        fields = '__all__'


class CategoryForm(ModelForm):
    class Meta:
        model = Category
        fields = '__all__'


class DiscountForm(ModelForm):
    class Meta:
        model = Discount
        fields = '__all__'


class CustomAdminForm(UserCreationForm):
    email = forms.EmailField()

    class Meta(UserCreationForm.Meta):
        model = User


class PaymentForm(ModelForm):
    class Meta:
        model = Payment
        fields = '__all__'


class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = '__all__'


class OrderDetailForm(ModelForm):
    class Meta:
        model = OrderDetail
        fields = '__all__'


class ShipmentForm(ModelForm):
    class Meta:
        model = Shipment
        fields = '__all__'


class ReviewForm(ModelForm):
    class Meta:
        model = Review
        fields = '__all__'


class CustomerSignUpForm(UserCreationForm):
    AUCKLAND = 'AKL'
    WELLINGTON = 'WELL'
    CHRISTCHURCH = 'CHC'

    CITY_IN_NZ = [
        (AUCKLAND, 'Auckland'),
        (WELLINGTON, 'Wellington'),
        (CHRISTCHURCH, 'Christchurch'),
    ]

    email = forms.EmailField()
    first_name = forms.CharField(max_length=255)
    last_name = forms.CharField(max_length=255)
    phone_number = forms.CharField(max_length=50)
    street_address = forms.CharField(max_length=255)
    suburb = forms.CharField(max_length=100)
    city = forms.ChoiceField(
        widget=forms.Select,
        choices=CITY_IN_NZ,
    )
    country = forms.CharField(max_length=100)
    postcode = forms.IntegerField()

    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_customer = True
        user.email = self.cleaned_data.get('email')
        user.save()
        customer = Customer.objects.create(
            user=user,
            first_name=self.cleaned_data.get('first_name'),
            last_name=self.cleaned_data.get('last_name'),
            phone_number=self.cleaned_data.get('phone_number'),
            street_address=self.cleaned_data.get('street_address'),
            suburb=self.cleaned_data.get('suburb'),
            city=self.cleaned_data.get('city'),
            country=self.cleaned_data.get('country'),
            postcode=self.cleaned_data.get('postcode')
        )
        send_mail(
            'Welcome to SpaceOut!',
            'You have successfully signed up with us!',
            'bobdev2222@gmail.com',
            [self.cleaned_data.get('email')],
            fail_silently=False,
        )
        return user


class OrderManagerSignUpForm(UserCreationForm):
    email = forms.EmailField()

    class Meta(UserCreationForm.Meta):
        model = User

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_order_manager = True
        user.email = self.cleaned_data.get('email')
        user.save()
        order_manager = OrderManager.objects.create(
            user=user
        )
        return user
