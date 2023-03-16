from backend.brands.serializers import serialize_brand


def serialize_product(product):
    return {
        "id": product.id,
        "title": product.title,
        "types": product.types,
        "brand": serialize_brand(product.brand),
        "price": product.price,
        "quantity": product.quantity,
        "description": product.description,
        "created_at": product.created_at,
        "updated_at": product.updated_at,
    }
