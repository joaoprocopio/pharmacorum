from django.urls import path

from .views import view_current_user, view_identify_user, view_login_user, view_logout_user

urlpatterns = [
    path("current", view_current_user),
    path("identify", view_identify_user),
    path("logout", view_logout_user),
    path("login", view_login_user),
]
