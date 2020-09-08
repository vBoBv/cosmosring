from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('signup/customer/', views.CustomerSignUpView.as_view(), name='signup_customer'),
    # path('signup/customer/', views.signup_customer, name='signup_customer'),
    # path('signup/ordermanager/', views.signup_ordermanager, name='signup_ordermanager'),
    path('signin/', views.signin, name='signin'),
    path('resetpassword/', views.resetpassword, name='resetpassword'),
    path('products/', views.products, name='products'),
    path('checkout/', views.checkout, name='checkout'),
    path('bid/', views.bid, name='bid'),
    path('trade/', views.trade, name='trade'),
    path('product/', views.product, name='product'),
    path('ordersummary/', views.ordersummary, name='ordersummary'),
]

