from json import loads

from backend.products.views import list_products


def test_list_products_pagination(rf, products):
    first_request = rf.get("/api/products", {"page": 1, "per_page": 15})
    second_request = rf.get("/api/products", {"page": 2, "per_page": 15})

    first_response = list_products(first_request)
    second_response = list_products(second_request)

    first_response_content = loads(first_response.content)
    second_response_content = loads(second_response.content)

    assert len(first_response_content.get("products")) == 15
    assert len(second_response_content.get("products")) == 15
    assert first_response_content.get("products")[0]["id"] != second_response_content.get("products")[0]["id"]
