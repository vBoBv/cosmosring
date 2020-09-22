from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('createspaceobject/', views.createspaceobject, name='createspaceobject'),
    path('spaceobjects/', views.spaceobjects, name='spaceobjects'),
    path('spaceobject/<int:spaceobject_id>', views.viewspaceobject, name='viewspaceobject'),
    path('createcategory/', views.createcategory, name='createcategory'),
    path('categories/', views.categories, name='categories'),
    path('category/<int:category_id>', views.viewcategory, name='viewcategory'),
    path('discounts/', views.discounts, name='discounts'),
    path('creatediscount/', views.creatediscount, name='creatediscount'),
    path('customers', views.customers, name='customers'),

    # Custom Authentication View
    path('admin/signup', views.adminsignup, name='adminsignup'),
    path('admin/signin', views.adminsignin, name='adminsignin'),
    path('admin/logout', views.adminlogout, name='adminlogout'),

    # Authtentication
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),

    path('password_change/', views.PasswordChangeView.as_view(), name='password_change'),
    path('password_change/done/', views.PasswordChangeDoneView.as_view(), name='password_change_done'),

    path('password_reset/', views.PasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', views.PasswordResetDoneView.as_view(), name='password_reset_done'),

    # path('reset/<uidb64>/<token>/', views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    # path('reset/done/', views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),


    path('signup/customer/', views.CustomerSignUpView.as_view(), name='signup_customer'),
    path('signup/order_manager/', views.OrderManagerSignUpView.as_view(), name='signup_order_manager'),
    # TODO
    # path('signup/customer/', views.signup_customer, name='signup_customer'),
    # path('signup/ordermanager/', views.signup_ordermanager, name='signup_ordermanager'),
    path('signin/', views.signin, name='signin'),
    path('resetpassword/', views.resetpassword, name='resetpassword'),
    path('checkout/', views.checkout, name='checkout'),
    path('bid/', views.bid, name='bid'),
    path('trade/', views.trade, name='trade'),
    path('ordersummary/', views.ordersummary, name='ordersummary'),
]
