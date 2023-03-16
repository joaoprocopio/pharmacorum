from django.http import JsonResponse


def list_products(request):
    return JsonResponse({"hello": "world"})
