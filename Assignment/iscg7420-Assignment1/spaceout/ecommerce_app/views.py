from django.shortcuts import render
from .forms import CustomerForm


def home(request):
    return render(request, 'ecommerce_app/home.html')


def signup(request):
    return render(request, 'ecommerce_app/signup.html', {"form": CustomerForm()})


def signin(request):
    return render(request, 'ecommerce_app/signin.html')


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

