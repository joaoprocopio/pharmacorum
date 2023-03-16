from json import loads

from backend.brands.views import list_brands


def test_list_brands_pagination(rf, brands):
    first_request = rf.get("/api/brands", {"page": 1, "per_page": 15})
    second_request = rf.get("/api/brands", {"page": 2, "per_page": 15})

    first_response = list_brands(first_request)
    second_response = list_brands(second_request)

    first_response_content = loads(first_response.content)
    second_response_content = loads(second_response.content)

    assert len(first_response_content.get("brands")) == 15
    assert len(second_response_content.get("brands")) == 15
    assert first_response_content.get("brands")[0]["id"] != second_response_content.get("brands")[0]["id"]
