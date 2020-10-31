from rest_framework import serializers

from core.models import Payment, Shipment, Order, Discount


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


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = ('id', 'discount_code', 'is_expired',)
        read_only_fields = ('id',)
