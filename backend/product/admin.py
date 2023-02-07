from django.contrib import admin

from backend.product.models import Brand, Product, Stock

admin.site.register(Brand)
admin.site.register(Product)
admin.site.register(Stock)
