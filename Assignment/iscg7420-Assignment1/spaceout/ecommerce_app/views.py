from django.contrib.auth import login
from django.shortcuts import render, redirect
from .forms import CustomerSignUpForm
from django.contrib.auth.forms import AuthenticationForm
from django.views.generic import CreateView
from .models import User


def home(request):
    return render(request, 'ecommerce_app/home.html')


class CustomerSignUpView(CreateView):
    model = User
    form_class = CustomerSignUpForm
    template_name = 'ecommerce_app/signup.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'customer'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        print(user)
        # login(self.request, user)
        return redirect('home')

    def form_valid(self, form):
        print(form.cleaned_data)
        return super().form_valid(form)

    def get_success_url(self):
        return '/'

# def signup_customer(request):
#     return render(request, 'ecommerce_app/signup.html', {"form": CustomerSignUpForm()})


# def signup_ordermanager(request):
#     return render(request, 'ecommerce_app/signup.html', {"form": CustomerSignUpForm()})


def signin(request):
    return render(request, 'ecommerce_app/signin.html', {"form": AuthenticationForm()})


def resetpassword(request):
    return render(request, 'ecommerce_app/resetpassword.html')


def products(request):
    return render(request, 'ecommerce_app/products.html')


def checkout(request):
    return render(request, 'ecommerce_app/checkout.html')


def bid(request):
    return render(request, 'ecommerce_app/bid.html')


def trade(request):
    return render(request, 'ecommerce_app/trade.html')


def product(request):
    return render(request, 'ecommerce_app/product.html')


def ordersummary(request):
    return render(request, 'ecommerce_app/ordersummary.html')

