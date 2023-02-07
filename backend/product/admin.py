from django.contrib import admin

from backend.product.models import Brand, Product, Stock

# Register your models here.

admin.site.register(Brand)
admin.site.register(Product)
admin.site.register(Stock)
