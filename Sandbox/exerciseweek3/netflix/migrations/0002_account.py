# Generated by Django 3.1 on 2020-08-12 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('netflix', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('image', models.ImageField(upload_to='')),
            ],
        ),
    ]
