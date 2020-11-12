from rest_framework import serializers

from core.models import Payment, Shipment, Order, Discount, Category, Product, OrderDetail, Review, Customer, OrderManager


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ('id', 'amount', 'payment_date',)
        read_only_fields = ('id',)


class ShipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shipment
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(
        many=False,
        queryset=Customer.objects.all()
    )
    order_manager = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=OrderManager.objects.all()
    )

    class Meta:
        model = Order
        fields = ('id', 'customer', 'order_manager', 'order_date',)
        read_only_fields = ('id',)


class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = ('id', 'discount_code', 'is_expired',)
        read_only_fields = ('id',)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description', 'image',)
        read_only_fields = ('id',)


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Category.objects.all(),
        required=False
    )
    discount = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Discount.objects.all(),
        required=False
    )

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'image', 'description', 'category', 'discount',)
        read_only_fields = ('id',)


class OrderDetailSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Product.objects.all()
    )

    class Meta:
        model = OrderDetail
        fields = ('order', 'product', 'quantity',)
        # read_only_fields = ('order',)


class ReviewSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Customer.objects.all()
    )

    class Meta:
        model = Review
        fields = ('id', 'customer', 'product', 'description', 'rating',)
        read_only_fields = ('id',)
