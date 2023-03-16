from backend.brands.models import Brand


def get_brands(query):
    return _get_brands(title__istartswith=query)


def _get_brands(**kwargs):
    return Brand.objects.filter(**kwargs)
