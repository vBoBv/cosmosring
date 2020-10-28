from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from core.models import Payment, Shipment

from ecommerce import serializers


class PaymentViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = Payment.objects.all()
    serializer_class = serializers.PaymentSerializer

    def get_queryset(self):
        return self.queryset.filter(customer__user=self.request.user).order_by('-amount')

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user.customer)


class ShipmentViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = Shipment.objects.all()
    serializer_class = serializers.ShipmentSerializer

    def get_queryset(self):
        return self.queryset.filter(payment__customer__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save()
