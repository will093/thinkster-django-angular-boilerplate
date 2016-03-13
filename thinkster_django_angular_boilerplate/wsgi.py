"""
WSGI config for thinkster_django_angular_boilerplate project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application
from dj_static import Cling

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "thinkster_django_angular_" +
                      "boilerplate.settings")

application = Cling(get_wsgi_application())
