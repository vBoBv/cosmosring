from django.test import TestCase
from ecommerce_app.models import Product, Category, Discount


class TestModels(TestCase):

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