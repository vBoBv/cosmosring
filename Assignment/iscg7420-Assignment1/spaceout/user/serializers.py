from django.contrib.auth import get_user_model, authenticate
from core.models import Customer, OrderManager, User

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('email', 'password', 'username')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}

    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()
        return user


class CustomerSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = Customer
        fields = ('user', 'first_name', 'last_name', 'phone_number', 'street_address',
                  'suburb', 'city', 'country', 'postcode',)

    def create(self, validated_data):
        user = validated_data.pop('user')
        user = User.objects.create_user(**user)
        user.is_customer = True
        user.save()
        customer = Customer.objects.create(user=user, **validated_data)
        return customer

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()
        return user


class OrderManagerSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = OrderManager
        fields = ('user',)

    def create(self, validated_data):
        user = validated_data.pop('user')
        user = User.objects.create_user(**user)
        user.is_order_manager = True
        user.save()
        order_manager = OrderManager.objects.create(user=user)
        return order_manager

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()
        return user


class AuthTokenSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        user = authenticate(
            request=self.context.get('request'),
            username=email,
            password=password
        )
        if not user:
            msg = 'Unable to authenticate user'
            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user
        return attrs
