from django.contrib import admin

from .models import Category, Channel, Server

# Register your models here.
# we need to enter data in order ferst cat -> server -> channel
admin.site.register(Category)
admin.site.register(Server)
admin.site.register(Channel)
