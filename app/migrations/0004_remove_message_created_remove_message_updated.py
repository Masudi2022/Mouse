# Generated by Django 5.0.6 on 2024-06-26 12:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_message'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='created',
        ),
        migrations.RemoveField(
            model_name='message',
            name='updated',
        ),
    ]
