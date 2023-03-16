from django.urls import path

from backend.authentication.views import current_user, identify_user, login_user, logout_user, register_user

urlpatterns = [
    path("current", current_user),
    path("identify", identify_user),
    path("logout", logout_user),
    path("login", login_user),
    path("register", register_user),
]
