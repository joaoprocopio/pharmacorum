from django.urls import path

from backend.brands.views import list_brands

urlpatterns = [
    path("", list_brands),
]
