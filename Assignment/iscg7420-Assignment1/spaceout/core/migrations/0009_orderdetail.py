# Generated by Django 3.1 on 2020-10-31 23:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_product'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderDetail',
            fields=[
                ('order', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='core.order')),
                ('quantity', models.IntegerField()),
                ('product', models.ManyToManyField(to='core.Product')),
            ],
        ),
    ]
