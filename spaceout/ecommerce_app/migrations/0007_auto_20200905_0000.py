# Generated by Django 3.1 on 2020-09-04 12:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce_app', '0006_orderdetails'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='OrderDetails',
            new_name='OrderDetail',
        ),
    ]