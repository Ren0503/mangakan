from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Manga)
admin.site.register(Rating)
admin.site.register(Comment)