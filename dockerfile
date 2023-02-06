FROM python:3.11-slim

WORKDIR /backend

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONIOENCODING=UTF-8
ENV SHELL=/bin/sh LANG=en_US.UTF-8

RUN apt-get update && \
  apt-get install -y \
  curl \
  net-tools \
  build-essential \
  libpq-dev \
  python3-dev

COPY poetry.lock pyproject.toml /backend/
RUN pip install poetry
RUN poetry config virtualenvs.create false
RUN poetry install --no-dev

COPY . /backend/
CMD gunicorn