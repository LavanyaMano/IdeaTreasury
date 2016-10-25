# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profiles', '0001_initial'),
        ('posts', '0008_auto_20161025_1514'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='postusers',
            field=models.ManyToManyField(related_name='postusing', blank=True, to='user_profiles.User', null=True),
        ),
    ]
