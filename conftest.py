from unittest.mock import ANY

from django.contrib.auth.models import AnonymousUser, User
from django.contrib.sessions.middleware import SessionMiddleware
from model_bakery import baker
from pytest import fixture


@fixture
def user(db):
    username = "username"
    password = "password"

    user = baker.make(
        User,
        username=username,
        first_name="Test",
        last_name="User",
        email=f"{username}@email.com",
    )
    user.set_password(password)
    user.save()

    return user


@fixture
def anonymous_user():
    return AnonymousUser()


@fixture
def session_middleware():
    return SessionMiddleware(get_response=ANY)
