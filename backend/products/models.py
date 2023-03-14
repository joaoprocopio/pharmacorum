"""
from django.db import models
class Product:
    ...

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["updated_at"]
        order_with_respect_to = "brand"
"""
