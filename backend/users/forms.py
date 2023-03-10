from django.contrib.auth.password_validation import validate_password
from email_validator import validate_email
from pydantic import BaseModel, validator


class UserForm(BaseModel):
    username: str
    email: str
    password: str
    first_name: str
    last_name: str

    @validator("email")
    def email_validator(cls, email):
        validate_email(email)

        return email

    @validator("password")
    def password_validator(cls, password):
        validate_password(password)

        return password
