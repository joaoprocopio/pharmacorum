from backend.product.models import Product


def get_product(id):
    return Product.objects.select_related("brand").get(id=id)


def get_products():
    return Product.objects.select_related("brand").filter()
