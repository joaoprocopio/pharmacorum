from json import loads

from backend.brands.views import list_brands


def test_list_brands_pagination(rf, brands):
    per_page = 15
    request = rf.get("/api/brands", {"per_page": per_page})

    response = list_brands(request)
    response_content = loads(response.content)

    assert len(response_content.get("brands")) == per_page
