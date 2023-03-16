from backend.products.models import Product


def get_product(id):
    return _get_product(id=id)


def get_products():
    return _get_products()


def _get_product(**kwargs):
    return Product.objects.get(**kwargs)


def _get_products(**kwargs):
    return Product.objects.filter(**kwargs)
