from django.contrib import admin
from .models import Student, Squad, Team, Fixture, Results,Standing,New, Fan, Message, Comment


# Register your models here.
admin.site.register(Student)
admin.site.register(Squad)
admin.site.register(Fixture)
admin.site.register(Results)
admin.site.register(Standing)
admin.site.register(New)
admin.site.register(Team)
admin.site.register(Fan)
admin.site.register(Message)
admin.site.register(Comment)
