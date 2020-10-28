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

    # username = serializers.CharField(source='user.username')
    # email = serializers.CharField(source='user.email')
    # password = serializers.CharField(source='user.password')
    # first_name = serializers.CharField(source='customer.first_name')
    # last_name = serializers.CharField(source='customer.last_name')
    # phone_number = serializers.CharField(source='customer.phone_number')
    # street_address = serializers.CharField(source='customer.street_address')
    # suburb = serializers.CharField(source='customer.suburb')
    # city = serializers.CharField(source='customer.city')
    # country = serializers.CharField(source='customer.country')
    # postcode = serializers.CharField(source='customer.postcode')
    #
    # class Meta:
    #     model = Customer
    #     fields = ('username', 'email', 'password', 'first_name', 'last_name', 'phone_number', 'street_address',
    #               'suburb', 'city', 'country', 'postcode',)
    #
    # def create(self, validated_data):
    #     customer = validated_data.pop('customer')
    #     new_user = validated_data.pop('user')
    #     user = User.objects.create(**new_user)
    #     user.set_password(validated_data['user.password'])
    #     user.save()
    #     Customer.objects.create(user=user, **customer)
    #     return user


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
