from http import HTTPStatus
from json import dumps, loads

from backend.users.views import view_current_user, view_identify_user, view_login_user, view_logout_user


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

    assert response.status_code == HTTPStatus.NOT_FOUND


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

    assert response.status_code == HTTPStatus.NOT_FOUND


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

    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_view_logout_user_with_authenticated_user(rf, user, session_middleware):
    request = rf.get("/api/user/logout")
    request.user = user

    session_middleware.process_request(request)

    response = view_logout_user(request)

    assert response.status_code == HTTPStatus.OK
    assert request.user.is_authenticated is False


def test_view_logout_user_with_anonymous_user(rf, anonymous_user, session_middleware):
    request = rf.get("/api/user/logout")
    request.user = anonymous_user

    session_middleware.process_request(request)

    response = view_logout_user(request)

    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert request.user.is_authenticated is False


def test_view_login_user_with_valid_id_and_valid_password(rf, user, session_middleware):
    request_body = dumps(
        {
            "id": 1,
            "password": "password",
        }
    )

    request = rf.post(
        "/api/user/login",
        request_body,
        "application/json",
    )

    session_middleware.process_request(request)

    response = view_login_user(request)
    response_content = loads(response.content)

    assert response.status_code == HTTPStatus.OK
    assert response_content.get("is_authenticated") is True


def test_view_login_user_with_invalid_data(rf, user, session_middleware):
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

    response = view_login_user(request)

    assert response.status_code == HTTPStatus.BAD_REQUEST


def test_view_login_user_with_valid_id_and_invalid_password(rf, user, session_middleware):
    request_body = dumps(
        {
            "id": 1,
            "password": "admin",
        }
    )

    request = rf.post(
        "/api/user/login",
        request_body,
        "application/json",
    )

    session_middleware.process_request(request)

    response = view_login_user(request)

    assert response.status_code == HTTPStatus.UNAUTHORIZED


def test_view_login_user_with_invalid_id_and_invalid_password(rf, user, session_middleware):
    request_body = dumps(
        {
            "id": 5,
            "password": "admin",
        }
    )

    request = rf.post(
        "/api/user/login",
        request_body,
        "application/json",
    )

    session_middleware.process_request(request)

    response = view_login_user(request)

    assert response.status_code == HTTPStatus.NOT_FOUND
