from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('resetpassword/', views.resetpassword, name='resetpassword'),
    path('products/', views.products, name='products'),
    path('checkout/', views.checkout, name='checkout'),
    path('bid/', views.bid, name='bid'),
    path('trade/', views.trade, name='trade'),
    path('product/', views.product, name='product'),
    path('ordersummary/', views.ordersummary, name='ordersummary'),
]

