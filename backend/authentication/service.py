from django.contrib.auth.models import User


def get_user(id):
    return _get_user(id=id)


def create_user(username, email, password, first_name, last_name):
    return _create_user(username=username, email=email, password=password, first_name=first_name, last_name=last_name)


def query_user(query):
    if "@" in query:
        return _get_user(email=query)

    return _get_user(username=query)


def _create_user(**kwargs):
    return User.objects.create_user(**kwargs)


def _get_user(**kwargs):
    return User.objects.get(**kwargs)
