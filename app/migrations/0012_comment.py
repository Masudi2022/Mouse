# Generated by Django 5.0.6 on 2024-06-29 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_delete_comment'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fann', models.CharField(max_length=20, null=True)),
                ('body', models.TextField()),
            ],
        ),
    ]
