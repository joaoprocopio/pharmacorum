from django.urls import path

from .views import list_brands

urlpatterns = [
    path("", list_brands),
]
