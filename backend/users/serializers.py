def serialize_user(user):
    return (
        {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "full_name": user.get_full_name(),
            "first_name": user.first_name,
            "last_name": user.last_name,
            "is_authenticated": user.is_authenticated,
        }
        if user.is_authenticated
        else {
            "id": user.id,
            "username": user.username,
            "is_authenticated": user.is_authenticated,
        }
    )


def serialize_identified_user(user):
    return {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "first_name": user.first_name,
    }