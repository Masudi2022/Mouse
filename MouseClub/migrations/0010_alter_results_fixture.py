# Generated by Django 4.2.11 on 2024-05-09 20:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MouseClub', '0009_results'),
    ]

    operations = [
        migrations.AlterField(
            model_name='results',
            name='fixture',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='MouseClub.fixture'),
        ),
    ]
