from json import loads

from backend.brands.views import list_brands


def test_list_brands_pagination(rf, brands):
    request = rf.get("/api/brands")

    response = list_brands(request)
    response_content = loads(response.content)

    assert len(brands) == response_content.get("count")
