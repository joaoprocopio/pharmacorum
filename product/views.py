from http import HTTPStatus
from json import loads

from django.core.exceptions import ObjectDoesNotExist
from django.core.paginator import Paginator
from django.http import JsonResponse
from django.views.decorators.http import require_GET

from product.serializer import product_to_dict_json
from product.service import get_product, get_products

# TODO: create, edit, delete


@require_GET
def home_page(request):
    params = {
        "per_page": 15,
        "page": 1,
    }

    if request.body:
        params = loads(request.body)

    if ("per_page" and "page") not in params.keys():
        return JsonResponse({}, status=HTTPStatus.BAD_REQUEST)

    per_page = params.get("per_page")
    page = params.get("page")

    products = get_products().order_by("updated_at").reverse()

    pages = Paginator(products, per_page)
    products = pages.get_page(page)
    products = [product_to_dict_json(product) for product in products]

    return JsonResponse({"product": products})


@require_GET
def find_product(request, product_id):
    if not product_id:
        return JsonResponse({}, status=HTTPStatus.BAD_REQUEST)

    try:
        product = get_product(id=product_id)
        product = product_to_dict_json(product)

        return JsonResponse(product)

    except ObjectDoesNotExist:
        return JsonResponse({}, status=HTTPStatus.NOT_FOUND)
