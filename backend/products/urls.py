from django.urls import path

from backend.products.views import identify_product, list_products, new_product

urlpatterns = [
    path("", list_products),
    path("<int:id>", identify_product),
    path("create", new_product),
]
