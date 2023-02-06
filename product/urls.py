from django.urls import path

from product.views import find_product, home_page

urlpatterns = [
    path("<int:product_id>", find_product),
    path("home_page/", home_page),
]
