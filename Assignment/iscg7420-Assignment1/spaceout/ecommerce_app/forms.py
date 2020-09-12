from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from .models import User, Customer, Address, Product, Category, Discount


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


class CustomerSignUpForm(UserCreationForm):
    AUCKLAND = 'AKL'
    WELLINGTON = 'WELL'
    CHRISTCHURCH = 'CHC'

    CITY_IN_NZ = [
        (AUCKLAND, 'Auckland'),
        (WELLINGTON, 'Wellington'),
        (CHRISTCHURCH, 'Christchurch'),
    ]

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

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_customer = True
        # user.save()
        # address = Address.objects.create(
        #     street_address=self.street_address,
        #     suburb=self.suburb,
        #     city=self.city,
        #     country=self.country,
        #     postcode=self.postcode
        # )
        # customer = Customer.objects.create(user=user, address=address)
        # customer.first_name.add(*self.cleaned_data.get('first_name'))
        # customer.last_name.add(*self.cleaned_data.get('last_name'))
        # customer.phone_number.add(*self.cleaned_data.get('phone_number'))
        # customer.save()
        # return user
        if commit:
            user.save()
            address = Address.objects.create(
                street_address=self.street_address,
                suburb=self.suburb,
                city=self.city,
                country=self.country,
                postcode=self.postcode
            )
            customer = Customer.objects.create(user=user, address=address)
            customer.first_name.add(*self.cleaned_data.get('first_name'))
            customer.last_name.add(*self.cleaned_data.get('last_name'))
            customer.phone_number.add(*self.cleaned_data.get('phone_number'))

            customer.save()
            return user
