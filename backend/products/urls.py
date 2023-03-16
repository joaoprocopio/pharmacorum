from django.urls import path

from backend.products.views import identify_product, list_products

urlpatterns = [
    path("", list_products),
    path("<int:id>", identify_product),
]
