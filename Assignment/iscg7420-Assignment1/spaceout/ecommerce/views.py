from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from core.models import Payment, Shipment, Order, Discount, Category, Product, OrderDetail, Review

from ecommerce import serializers


class BaseEcommerceViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


class PaymentViewSet(BaseEcommerceViewSet):
    queryset = Payment.objects.all()
    serializer_class = serializers.PaymentSerializer

    def get_queryset(self):
        return self.queryset.filter(customer__user=self.request.user).order_by('-amount')

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user.customer)


class ShipmentViewSet(BaseEcommerceViewSet):
    queryset = Shipment.objects.all()
    serializer_class = serializers.ShipmentSerializer

    def get_queryset(self):
        return self.queryset.filter(payment__customer__user=self.request.user).order_by('-payment__payment_date')

    def perform_create(self, serializer):
        serializer.save()


# TODO: Assign OrderManager to each Order
class OrderViewSet(BaseEcommerceViewSet):
    queryset = Order.objects.all()
    serializer_class = serializers.OrderSerializer

    def get_queryset(self):
        return self.queryset.filter(customer__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user.customer)


class DiscountViewSet(viewsets.ModelViewSet):
    queryset = Discount.objects.all()
    serializer_class = serializers.DiscountSerializer

    # def get_queryset(self):
    #     return self.queryset.filter(customer__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save()


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = serializers.CategorySerializer

    # def get_queryset(self):
    #     return self.queryset.filter(customer__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save()


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer

    # def get_queryset(self):
    #     return self.queryset.filter(customer__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save()


class OrderDetailViewSet(viewsets.ModelViewSet):
    queryset = OrderDetail.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    # def get_queryset(self):
    #     return self.queryset.filter(order__customer__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save()


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = serializers.ReviewSerializer

    # def get_queryset(self):
    #     return self.queryset.filter(order__customer__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save()
