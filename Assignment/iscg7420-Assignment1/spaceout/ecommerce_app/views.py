from django.shortcuts import render


def home(request):
    return render(request, 'home')


def signup(request):
    return render(request, 'signup')


def signin(request):
    return render(request, 'signin')


def resetpassword(request):
    return render(request, 'resetpassword')


def products(request):
    return render(request, 'products')


def checkout(request):
    return render(request, 'checkout')


def bid(request):
    return render(request, 'bid')


def trade(request):
    return render(request, 'trade')


def product(request):
    return render(request, 'product')


def ordersummary(request):
    return render(request, 'ordersummary')
