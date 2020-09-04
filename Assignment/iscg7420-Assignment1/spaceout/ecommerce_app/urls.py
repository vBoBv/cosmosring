from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('', views.signup, name='signup'),
    path('', views.signin, name='signin'),
    path('', views.resetpassword, name='resetpassword'),
    path('', views.products, name='products'),
    path('', views.checkout, name='checkout'),
    path('', views.bid, name='bid'),
    path('', views.trade, name='trade'),
    path('', views.product, name='product'),
    path('', views.ordersummary, name='ordersummary'),

]