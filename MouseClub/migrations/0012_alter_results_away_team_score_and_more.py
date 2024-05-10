# Generated by Django 4.2.11 on 2024-05-10 01:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('MouseClub', '0011_squad_attacking_squad_defending_squad_dribbling_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='results',
            name='away_team_score',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='results',
            name='home_team_score',
            field=models.IntegerField(),
        ),
        migrations.CreateModel(
            name='Standing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.IntegerField()),
                ('draw', models.IntegerField()),
                ('win', models.IntegerField()),
                ('loose', models.IntegerField()),
                ('goals', models.IntegerField()),
                ('team', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='MouseClub.team')),
            ],
        ),
    ]
