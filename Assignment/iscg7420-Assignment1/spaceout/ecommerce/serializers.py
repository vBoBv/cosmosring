from rest_framework import serializers

from core.models import Payment, Shipment


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ('id', 'amount', 'payment_date',)
        read_only_fields = ('id',)


class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipment
        fields = ('payment',)
        # read_only_fields = ('payment',)
