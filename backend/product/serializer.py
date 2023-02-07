def brand_to_dict_json(brand):
    return {
        "id": brand.id,
        "name": brand.name,
    }


def product_to_dict_json(product):
    return {
        "id": product.id,
        "brand": brand_to_dict_json(product.brand),
        "type": product.type,
        "title": product.title,
        "description": product.description,
        "created_at": product.created_at,
        "updated_at": product.updated_at,
    }
