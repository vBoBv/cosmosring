from django.urls import path, include
from rest_framework.routers import DefaultRouter

from ecommerce import views
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()
router.register('payments', views.PaymentViewSet)
router.register('shipments', views.ShipmentViewSet)
router.register('orders', views.OrderViewSet)
router.register('discounts', views.DiscountViewSet)

app_name = 'ecommerce'

urlpatterns = [
    path('', include(router.urls))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
