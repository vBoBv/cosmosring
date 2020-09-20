from django.test import SimpleTestCase
from django.urls import reverse, resolve
from ecommerce_app.views import spaceobjects, categories, customers, discounts, viewspaceobject


class TestUrls(SimpleTestCase):
    def test_spaceobjects_url_is_resolved(self):
        url = reverse('spaceobjects')
        self.assertEquals(resolve(url).func, spaceobjects)

    def test_categories_url_is_resolved(self):
        url = reverse('categories')
        self.assertEquals(resolve(url).func, categories)

    def test_customers_url_is_resolved(self):
        url = reverse('customers')
        self.assertEquals(resolve(url).func, customers)

    def test_discounts_url_is_resolved(self):
        url = reverse('discounts')
        self.assertEquals(resolve(url).func, discounts)

    def test_viewspaceobject_url_is_resolved(self):
        url = reverse('viewspaceobject', args=['1'])
        self.assertEquals(resolve(url).func, viewspaceobject)

