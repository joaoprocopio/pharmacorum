from django.db import models


class Brand(models.Model):
    title = models.CharField(max_length=128)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["title"]
