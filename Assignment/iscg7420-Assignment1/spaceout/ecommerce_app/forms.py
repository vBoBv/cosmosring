from django import forms
from django.core.exceptions import ValidationError
from django.contrib.auth.forms import UserCreationForm
from django.db import transaction
from django.forms import ModelForm
from .models import User, Customer


class CustomerSignUpForm(UserCreationForm):
    first_name = forms.CharField(max_length=255)
    last_name = forms.CharField(max_length=255)
    phone_number = forms.IntegerField()

    class Meta(UserCreationForm.Meta):
        model = User
        fields = ['email', 'username']

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_customer = True
        user.save()
        customer = Customer.objects.create(user=user)
        customer.first_name = self.first_name
        customer.last_name = self.last_name
        customer.phone_number = self.phone_number
        customer.save()
        return user
