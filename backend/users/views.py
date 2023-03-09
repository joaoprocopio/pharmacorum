from http import HTTPStatus
from json import loads

from django.contrib.auth import logout
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_POST

from .serializers import serialize_anonymous_user, serialize_authenticated_user, serialize_identify_user
from .service import identify_user

# Create your views here.


@require_GET
def view_current_user(request):
    if request.user.is_authenticated:
        return JsonResponse(serialize_authenticated_user(request.user))

    return JsonResponse(serialize_anonymous_user(request.user))


@require_POST
def view_identify_user(request):
    body = loads(request.body)

    query = body.get("query")

    if not query:
        return JsonResponse({}, status=HTTPStatus.BAD_REQUEST)

    try:
        user = identify_user(query)
        user = serialize_identify_user(user)

        return JsonResponse(user)

    except ObjectDoesNotExist:
        return JsonResponse({}, status=HTTPStatus.NOT_FOUND)


@require_GET
def view_logout_user(request):
    if request.user.is_authenticated:
        logout(request)

        return JsonResponse({})

    return JsonResponse({}, status=HTTPStatus.UNAUTHORIZED)


# TODO: login
# TODO: register
