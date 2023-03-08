from http import HTTPStatus
from json import dumps, loads

from backend.users.views import view_current_user, view_identify_user


def test_view_current_user_with_anonymous_user(rf, anonymous_user):
    request = rf.get("/api/user/current")
    request.user = anonymous_user

    response = view_current_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("is_authenticated") is False


def test_view_current_user_with_authenticated_user(rf, user):
    request = rf.get("/api/user/current")
    request.user = user

    response = view_current_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("is_authenticated") is True


def test_view_identify_user_with_valid_username_query(rf, user):
    request_body = dumps(
        {
            "query": user.username,
        }
    )

    request = rf.post(
        "/api/user/identify",
        request_body,
        "application/json",
    )
    response = view_identify_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("id") == user.id
    assert response_content.get("username") == user.username


def test_view_identify_user_with_valid_email_query(rf, user):
    request_body = dumps(
        {
            "query": user.email,
        }
    )

    request = rf.post(
        "/api/user/identify",
        request_body,
        "application/json",
    )
    response = view_identify_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("id") == user.id
    assert response_content.get("email") == user.email


def test_view_identify_user_with_invalid_username(rf, db):
    request_body = dumps(
        {
            "query": "admin",
        }
    )

    request = rf.post(
        "/api/user/identify",
        request_body,
        "application/json",
    )
    response = view_identify_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.NOT_FOUND
    assert response_content == {}


def test_view_identify_user_with_invalid_email(rf, db):
    request_body = dumps(
        {
            "query": "admin@admin.com",
        }
    )

    request = rf.post(
        "/api/user/identify",
        request_body,
        "application/json",
    )
    response = view_identify_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.NOT_FOUND
    assert response_content == {}


def test_view_identify_user_with_invalid_query(rf, user):
    request_body = dumps(
        {
            "query": None,
        }
    )

    request = rf.post(
        "/api/user/identify",
        request_body,
        "application/json",
    )
    response = view_identify_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.BAD_REQUEST
    assert response_content == {}
