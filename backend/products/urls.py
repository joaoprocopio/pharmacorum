from django.urls import path

from backend.products.views import list_products

urlpatterns = [
    path("", list_products),
]
