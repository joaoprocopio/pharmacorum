from backend.products.models import Product


def get_product(id):
    return _get_product(id=id)


def get_products():
    return _get_products()


def create_product(title, description, types, quantity, price, brand_id):
    return _create_product(
        title=title, description=description, types=types, quantity=quantity, price=price, brand_id=brand_id
    )


def _get_product(**kwargs):
    return Product.objects.select_related("brand").get(**kwargs)


def _get_products(**kwargs):
    return Product.objects.select_related("brand").filter(**kwargs)


def _create_product(**kwargs):
    return Product.objects.create(**kwargs)
