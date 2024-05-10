from django.contrib import admin
from .models import Squad, Team, Fixture, Results, New, Standing


admin.site.register(Squad)
admin.site.register(Team)
admin.site.register(Fixture)
admin.site.register(Results)
admin.site.register(New)
admin.site.register(Standing)

# Register your models here.
