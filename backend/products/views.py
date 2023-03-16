from http import HTTPStatus

from django.core.paginator import Paginator
from django.http import JsonResponse
from django.views.decorators.http import require_GET

from backend.products.serializers import serialize_product
from backend.products.services import get_product, get_products


@require_GET
def list_products(request):
    page = request.GET.get("page", 1)
    per_page = request.GET.get("per_page", 30)

    products = get_products()

    try:
        count = products.count()
        products = Paginator(products, per_page=int(per_page))
        products = products.get_page(int(page))
        products = [serialize_product(brand) for brand in products]

        return JsonResponse({"count": count, "products": products})

    except BaseException:
        return JsonResponse({}, status=HTTPStatus.NOT_FOUND)


@require_GET
def identify_product(request, id):
    try:
        product = get_product(id)

        return JsonResponse(serialize_product(product))
    except BaseException:
        return JsonResponse({}, status=HTTPStatus.NOT_FOUND)
