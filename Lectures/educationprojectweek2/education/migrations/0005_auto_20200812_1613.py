# Generated by Django 3.1 on 2020-08-12 04:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0004_auto_20200812_1612'),
    ]

    operations = [
        migrations.AlterField(
            model_name='university',
            name='street_number',
            field=models.IntegerField(),
        ),
    ]
