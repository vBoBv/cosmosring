# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# from . import models
#
#
# class UserAdmin(BaseUserAdmin):
#     list_display = ['email', 'username']
#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         ('Personal info', {'fields': ('username',)}),
#         ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'is_customer', 'is_order_manager',)}),
#         ('Important', {'fields': ('last_login',)})
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'username', 'password1', 'password2'),
#         }),
#     )
#     ordering = ['id']
#     search_fields = ('email',)
#     list_filter = ('is_customer', 'is_order_manager', 'is_superuser',)
#
#
# ecommerce_app_models = [
#     models.Customer,
#     models.OrderManager,
#     models.Payment,
#     models.Shipment,
#     models.Order,
#     models.OrderDetail,
#     models.Product,
#     models.Review,
#     models.Discount,
#     models.Category
# ]
#
# admin.site.register(models.User, UserAdmin)
# admin.site.register(ecommerce_app_models)
#
