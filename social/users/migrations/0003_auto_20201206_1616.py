# Generated by Django 3.1.4 on 2020-12-06 16:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20201206_1204'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='name',
            new_name='nickname',
        ),
    ]