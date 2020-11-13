# Generated by Django 3.1 on 2020-11-12 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_review'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ManyToManyField(blank=True, null=True, to='core.Category'),
        ),
        migrations.AlterField(
            model_name='product',
            name='discount',
            field=models.ManyToManyField(blank=True, null=True, to='core.Discount'),
        ),
    ]