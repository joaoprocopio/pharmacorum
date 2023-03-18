from http import HTTPStatus

from django.core.paginator import Paginator
from django.http import JsonResponse
from django.utils import timezone
from django.views.decorators.http import require_GET, require_POST

from backend.products.forms import PersistedProductForm, ProductForm
from backend.products.serializers import serialize_product
from backend.products.services import create_product, get_product, get_products


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


@require_POST
def register_product(request):
    try:
        product = ProductForm.parse_raw(request.body)
        product = product.dict()
        product = create_product(
            title=product.get("title"),
            description=product.get("description"),
            types=product.get("types"),
            quantity=product.get("quantity"),
            price=product.get("price"),
            brand_id=product.get("brand_id"),
        )

        return JsonResponse(serialize_product(product))
    except BaseException:
        return JsonResponse({}, status=HTTPStatus.BAD_REQUEST)


@require_POST
def edit_product(request):
    try:
        form = PersistedProductForm.parse_raw(request.body)
        form = form.dict()

        product = get_product(form.get("id"))

        product.title = form.get("title")
        product.types = form.get("types")
        product.brand_id = form.get("brand_id")
        product.price = form.get("price")
        product.quantity = form.get("quantity")
        product.description = form.get("description")
        product.updated_at = timezone.now()

        product.save()

        return JsonResponse(serialize_product(product))

    except BaseException:
        return JsonResponse({}, status=HTTPStatus.BAD_REQUEST)
