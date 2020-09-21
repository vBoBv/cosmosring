from django.test import TestCase
from ecommerce_app.models import Product, Category, Discount, Address


class TestModels(TestCase):
    fixtures = ['address.json', 'discount.json', 'category.json']

    def setUp(self):
        self.category_planet = Category.objects.create(
            name='Planet'
        )
        self.discount = Discount.objects.create(
            discount_code='billclient',
            is_expired=False
        )
        self.spaceobject_earth = Product.objects.create(
            name='Earth',
            price=1230000.0,
        )
        # self.spaceobject_earth.category.add(self.category_planet)

    def test_category_is_created(self):
        self.assertEquals(self.category_planet.name, 'Planet')

    def test_spaceobject_is_created(self):
        self.assertEquals(self.spaceobject_earth.name, 'Earth')
        self.assertEquals(self.spaceobject_earth.price, 1230000.0)
        # self.assertEquals(self.spaceobject_earth.category.name, self.category_planet)

    def test_discount_is_created(self):
        self.assertEquals(self.discount.discount_code, 'billclient')
        self.assertEquals(self.discount.is_expired, False)

    def test_addresses_is_existed(self):
        addresses = Address.objects.filter(city='AKL')
        self.assertEquals(addresses.first().city, 'AKL')
        self.assertEquals(addresses.last().city, 'AKL')

    def test_discounts_is_expired(self):
        discounts = Discount.objects.filter(is_expired=True)
        self.assertEquals(discounts.first().is_expired, True)
        self.assertEquals(discounts.last().is_expired, True)

    def test_category1_is_planet(self):
        category = Category.objects.get(id=1)
        self.assertEquals(category.name, 'Planet')

    def test_category2_is_asteroid(self):
        category = Category.objects.get(id=2)
        self.assertEquals(category.name, 'Asteroid')