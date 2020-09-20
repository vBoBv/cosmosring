from django.test import TestCase, Client
from django.urls import reverse
from ecommerce_app.models import Product, Category, Discount, Address


class TestViews(TestCase):
    def setUp(self):
        self.client = Client()
        self.category_planet = Category.objects.create(
            name='Planet'
        )
        self.spaceobjects_url = reverse('spaceobjects')
        self.categories_url = reverse('categories')
        self.discounts_url = reverse('discounts')
        self.viewcategory_url = reverse('viewcategory', args=[f'{self.category_planet.id}'])
        self.createspaceobject_url = reverse('createspaceobject')

    def test_spaceobjects_GET(self):
        response = self.client.get(self.spaceobjects_url)

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'ecommerce_app/spaceobjects.html')

    def test_categories_GET(self):
        response = self.client.get(self.categories_url)

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'ecommerce_app/categories.html')

    def test_discounts_GET(self):
        response = self.client.get(self.discounts_url)

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'ecommerce_app/discounts.html')

    def test_viewcategory_GET(self):
        response = self.client.get(self.viewcategory_url)

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'ecommerce_app/category.html')
    #
    # def test_product_POST_creates_new_product(self):
    #     Category.objects.create(
    #         name='Asteroid'
    #     )
    #     response = self.client.post(self.createspaceobject_url, {
    #         'name': 'Jupito',
    #         'price': 234234.0,
    #         'category': 'Asteroid'
    #     })
    #
    #     jupito = Product.objects.get(id=1)
    #     self.assertTemplateUsed(jupito.name, 'Jupito')