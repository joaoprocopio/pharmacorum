from django.urls import path

from backend.products.views import edit_product, identify_product, list_products, register_product

urlpatterns = [
    path("", list_products),
    path("<int:id>", identify_product),
    path("create", register_product),
    path("edit", edit_product),
]
