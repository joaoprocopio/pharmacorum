from django.db import models
from django.utils import timezone

# Create your models here.


class Brand(models.Model):
    name = models.CharField(max_length=64)


class Product(models.Model):
    class ProductTypes(models.TextChoices):
        DRUG = "DRUG"
        SUPPLEMENT = "SUPPLEMENT"
        COSMETIC = "COSMETIC"
        HYGIENE = "HYGIENE"
        BABY_AND_KIDS = "BABY_AND_KIDS"

    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    type = models.CharField(max_length=32, choices=ProductTypes.choices)
    title = models.CharField(max_length=64)
    description = models.TextField(max_length=256)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(null=True, blank=True)


class Stock(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
