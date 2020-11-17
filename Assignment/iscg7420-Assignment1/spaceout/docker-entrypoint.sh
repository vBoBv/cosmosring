#!/bin/sh

# Collect static files
python manage.py collectstatic --noinput

# Database migrations
python manage.py migrate
python manage.py makemigrations core
python manage.py migrate

exec gunicorn --bind :8000 --workers 3 spaceout.wsgi:application