# Generated by Django 4.2.11 on 2024-05-10 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MouseClub', '0012_alter_results_away_team_score_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='New',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.TextField()),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['updated', 'created'],
            },
        ),
    ]
