from http import HTTPStatus
from json import loads

from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_POST

from .serializers import serialize_identified_user, serialize_user
from .service import identify_user

# Create your views here.


@require_GET
def view_current_user(request):
    return JsonResponse(serialize_user(request.user))


@require_POST
def view_identify_user(request):
    body = loads(request.body)

    query = body.get("query")

    if not query:
        return JsonResponse({}, status=HTTPStatus.BAD_REQUEST)

    try:
        user = identify_user(query)
        user = serialize_identified_user(user)

        return JsonResponse(user)

    except ObjectDoesNotExist:
        return JsonResponse({}, status=HTTPStatus.NOT_FOUND)
