from __future__ import absolute_import, unicode_literals

from celery import shared_task


@shared_task
def hello_world():
    print('Hello World')