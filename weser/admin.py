from django.contrib import admin
from .models import Entity
from .models import Emergency
from .models import Cure
from .models import Parameter

admin.site.register(Entity)
admin.site.register(Emergency)
admin.site.register(Cure)
admin.site.register(Parameter)
