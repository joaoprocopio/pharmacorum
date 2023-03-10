from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/", include("backend.authentication.urls")),
    path("api/brands/", include("backend.brands.urls")),
    path("api/products/", include("backend.products.urls")),
]
