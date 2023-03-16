from http import HTTPStatus

from django.core.paginator import Paginator
from django.http import JsonResponse
from django.views.decorators.http import require_GET

from backend.brands.serializers import serialize_brand
from backend.brands.services import get_brands


@require_GET
def list_brands(request):
    query = request.GET.get("query", "")
    page = request.GET.get("page", 1)
    per_page = request.GET.get("per_page", 30)

    brands = get_brands(query)

    try:
        count = brands.count()
        brands = Paginator(brands, per_page=int(per_page))
        brands = brands.get_page(int(page))
        brands = [serialize_brand(brand) for brand in brands]

        return JsonResponse({"count": count, "brands": brands})

    except BaseException:
        return JsonResponse({}, status=HTTPStatus.NOT_FOUND)
