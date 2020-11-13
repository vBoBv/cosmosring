#!/bin/sh
exec gunicorn --bind :8000 --workers 3 spaceout.wsgi:application