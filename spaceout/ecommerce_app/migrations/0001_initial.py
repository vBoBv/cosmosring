# Generated by Django 3.1 on 2020-09-03 12:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('username', models.CharField(max_length=255, unique=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_customer', models.BooleanField(default=False)),
                ('is_order_manger', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street_address', models.CharField(max_length=255)),
                ('suburb', models.CharField(max_length=100)),
                ('city', models.CharField(choices=[('AKL', 'Auckland'), ('WELL', 'Wellington'), ('CHC', 'Christchurch')], default='AKL', max_length=4)),
                ('country', models.CharField(default='New Zealand', max_length=100)),
                ('postcode', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField()),
                ('payment_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='ecommerce_app.user')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('phone_number', models.IntegerField()),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ecommerce_app.address')),
            ],
        ),
        migrations.CreateModel(
            name='OrderManager',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='ecommerce_app.user')),
            ],
        ),
        migrations.CreateModel(
            name='Shipment',
            fields=[
                ('payment', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='ecommerce_app.payment')),
            ],
        ),
        migrations.AddField(
            model_name='payment',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ecommerce_app.customer'),
        ),
    ]