# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profiles', '0001_initial'),
        ('posts', '0011_auto_20161025_1748'),
    ]

    operations = [
        migrations.RenameField(
            model_name='rate',
            old_name='rate',
            new_name='rating',
        ),
        migrations.RemoveField(
            model_name='posts',
            name='ratings',
        ),
        migrations.AddField(
            model_name='rate',
            name='post_rated',
            field=models.ForeignKey(null=True, to='posts.Posts', blank=True),
        ),
        migrations.RemoveField(
            model_name='rate',
            name='rated_by',
        ),
        migrations.AddField(
            model_name='rate',
            name='rated_by',
            field=models.ForeignKey(null=True, to='user_profiles.User', blank=True),
        ),
    ]
