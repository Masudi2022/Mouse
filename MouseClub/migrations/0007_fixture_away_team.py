# Generated by Django 4.2.11 on 2024-05-09 18:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MouseClub', '0006_alter_fixture_home_team'),
    ]

    operations = [
        migrations.AddField(
            model_name='fixture',
            name='away_team',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='away_fixture', to='MouseClub.team'),
        ),
    ]
