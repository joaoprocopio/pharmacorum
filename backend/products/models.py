from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.utils import timezone

from backend.brands.models import Brand


class Product(models.Model):
    class Types(models.TextChoices):
        DRUG = ("DRUG", "Drug")
        SUPPLEMENT = ("SUPPLEMENT", "Supplement")
        COSMETIC = ("COSMETIC", "Cosmetic")
        HYGIENE = ("HYGIENE", "Hygiene")
        BABY_AND_KIDS = ("BABY_AND_KIDS", "Baby and Kids")

    title = models.CharField(max_length=128)
    types = ArrayField(models.CharField(max_length=32, blank=True, null=True, choices=Types.choices), default=list)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=32, decimal_places=2)
    quantity = models.PositiveIntegerField()
    description = models.TextField(max_length=2048)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-updated_at"]
