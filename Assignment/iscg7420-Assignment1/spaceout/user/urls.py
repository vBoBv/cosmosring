from django.urls import path

from user import views
from django.conf.urls.static import static
from django.conf import settings

app_name = 'user'

urlpatterns = [
    path('create/', views.CreateUserView.as_view(), name='create'),
    path('token/', views.CreateTokenView.as_view(), name='token'),
    path('profile/', views.ManageUserView.as_view(), name='profile'),
    path('create_customer/', views.CreateCustomerView.as_view(), name='create_customer'),
    path('create_order_manager/', views.CreateOrderManagerView.as_view(), name='create_order_manager'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)