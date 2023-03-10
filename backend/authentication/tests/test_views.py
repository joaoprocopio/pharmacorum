from http import HTTPStatus
from json import dumps, loads

from backend.authentication.views import current_user, identify_user, login_user, logout_user, register_user


def test_current_user_with_anonymous_user(rf, anonymous_user):
    request = rf.get("/api/user/current")
    request.user = anonymous_user

    response = current_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("is_authenticated") is False


def test_current_user_with_authenticated_user(rf, user):
    request = rf.get("/api/user/current")
    request.user = user

    response = current_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("is_authenticated") is True


def test_identify_user_with_valid_username_query(rf, user):
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
    response = identify_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("id") == user.id
    assert response_content.get("username") == user.username


def test_identify_user_with_valid_email_query(rf, user):
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
    response = identify_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("id") == user.id
    assert response_content.get("email") == user.email


def test_identify_user_with_invalid_username(rf, db):
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
    response = identify_user(request)

    assert response.status_code == HTTPStatus.NOT_FOUND


def test_identify_user_with_invalid_email(rf, db):
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
    response = identify_user(request)

    assert response.status_code == HTTPStatus.NOT_FOUND


def test_identify_user_with_invalid_query(rf, user):
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
    response = identify_user(request)

    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_logout_user_with_authenticated_user(rf, user, session_middleware):
    request = rf.get("/api/user/logout")
    request.user = user

    session_middleware.process_request(request)

    response = logout_user(request)

    assert response.status_code == HTTPStatus.OK
    assert request.user.is_authenticated is False


def test_logout_user_with_anonymous_user(rf, anonymous_user, session_middleware):
    request = rf.get("/api/user/logout")
    request.user = anonymous_user

    session_middleware.process_request(request)

    response = logout_user(request)

    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert request.user.is_authenticated is False


def test_login_user_with_valid_id_and_valid_password(rf, user, session_middleware):
    request_body = dumps(
        {
            "id": user.id,
            "password": "password",
        }
    )

    request = rf.post(
        "/api/user/login",
        request_body,
        "application/json",
    )

    session_middleware.process_request(request)

    response = login_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("is_authenticated") is True


def test_login_user_with_invalid_data(rf, user, session_middleware):
    request_body = dumps(
        {
            "id": None,
            "password": None,
        }
    )

    request = rf.post(
        "/api/user/login",
        request_body,
        "application/json",
    )

    session_middleware.process_request(request)

    response = login_user(request)

    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_login_user_with_valid_id_and_invalid_password(rf, user, session_middleware):
    request_body = dumps(
        {
            "id": user.id,
            "password": "admin",
        }
    )

    request = rf.post(
        "/api/user/login",
        request_body,
        "application/json",
    )

    session_middleware.process_request(request)

    response = login_user(request)

    assert response.status_code == HTTPStatus.UNAUTHORIZED


def test_login_user_with_invalid_id_and_invalid_password(rf, user, session_middleware):
    request_body = dumps(
        {
            "id": user.id ^ 8192,
            "password": "admin",
        }
    )

    request = rf.post(
        "/api/user/login",
        request_body,
        "application/json",
    )

    session_middleware.process_request(request)

    response = login_user(request)

    assert response.status_code == HTTPStatus.NOT_FOUND


def test_register_user_with_invalid_data(rf, anonymous_user, session_middleware):
    request_body = dumps(
        {
            "username": "admin",
            "email": "admin",
            "password": "admin",
            "first_name": "admin",
            "last_name": "admin",
        }
    )

    request = rf.post(
        "/api/user/register",
        request_body,
        "application/json",
    )
    request.user = anonymous_user

    session_middleware.process_request(request)

    response = register_user(request)

    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_register_user_with_valid_data(rf, anonymous_user, session_middleware):
    request_body = dumps(
        {
            "username": "admin",
            "email": "admin@admin.com",
            "password": "admin_admin",
            "first_name": "admin",
            "last_name": "admin",
        }
    )

    request = rf.post(
        "/api/user/register",
        request_body,
        "application/json",
    )
    request.user = anonymous_user

    session_middleware.process_request(request)

    response = register_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("is_authenticated") is True
