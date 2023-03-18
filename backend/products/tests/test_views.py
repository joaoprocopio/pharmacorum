from http import HTTPStatus
from json import dumps, loads
from random import choice, randint, uniform

from backend.products.views import identify_product, list_products, register_product


def test_list_products_pagination(rf, products):
    first_request = rf.get("/api/products", {"page": 1, "per_page": 15})
    second_request = rf.get("/api/products", {"page": 2, "per_page": 15})

    first_response = list_products(first_request)
    second_response = list_products(second_request)

    first_response_content = loads(first_response.content)
    second_response_content = loads(second_response.content)

    assert len(first_response_content.get("products")) == 15
    assert len(second_response_content.get("products")) == 15
    assert first_response_content.get("products")[0].get("id") != second_response_content.get("products")[0].get("id")


def test_identify_product(rf, products):
    product = choice(products)

    request = rf.get(f"/api/products/{product.id}")

    response = identify_product(request, product.id)

    response_content = loads(response.content)

    assert response_content.get("id") == product.id
    assert response_content.get("brand").get("id") == product.brand.id


def test_create_product_with_valid_data(rf, brands):
    product = {
        "title": "Test Title",
        "description": "Test Description",
        "types": ["COSMETIC", "HYGIENE"],
        "quantity": randint(1, 1500),
        "price": uniform(5.00, 950.75),
        "brand_id": brands[randint(1, len(brands))].id,
    }

    request = rf.post(
        "/api/products/create",
        dumps(product),
        "application/json",
    )

    response = register_product(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert product.get("title") == response_content.get("title")
