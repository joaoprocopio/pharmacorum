from product.models import Product


def get_products():
    return Product.objects.select_related("brand").filter()
