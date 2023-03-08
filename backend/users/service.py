from django.contrib.auth.models import User


def identify_user(query):
    if "@" in query:
        return _get_user(email=query)

    return _get_user(username=query)


def _get_user(**kwargs):
    return User.objects.get(**kwargs)
