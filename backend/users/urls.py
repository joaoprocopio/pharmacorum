from django.urls import path

from .views import view_current_user, view_identify_user

urlpatterns = [
    path("current", view_current_user),
    path("identify", view_identify_user),
]
