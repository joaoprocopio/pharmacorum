from random import randint
from unittest.mock import ANY

from django.contrib.auth.models import AnonymousUser, User
from django.contrib.sessions.middleware import SessionMiddleware
from model_bakery import baker
from pytest import fixture

from backend.brands.models import Brand
from backend.products.models import Product


@fixture
def user(db):
    """
    A authenticated user.
    """
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
def brands(db):
    """
    Return a list with a lot of brands.
    """
    return baker.make(Brand, _quantity=64)


@fixture
def products(db, brands):
    """
    Return a list with a lot of products.
    """
    return baker.make(Product, types=Product.Types.values, brand=brands[randint(1, len(brands))], _quantity=512)


@fixture
def anonymous_user(db):
    """
    A instance of AnonymousUser.
    """
    return AnonymousUser()


@fixture
def session_middleware():
    """
    A mock instance of SessionMiddleware.
    """
    return SessionMiddleware(get_response=ANY)
