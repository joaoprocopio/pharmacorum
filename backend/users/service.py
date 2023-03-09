from django.contrib.auth.models import User


def get_user(id):
    return _get_user(id=id)


def identify_user(query):
    if "@" in query:
        return _get_user(email=query)

    return _get_user(username=query)


def _get_user(**kwargs):
    return User.objects.get(**kwargs)
