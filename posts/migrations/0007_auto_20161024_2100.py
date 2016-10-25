# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0006_auto_20161024_2019'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='posts',
            name='post_uses',
        ),
        migrations.RemoveField(
            model_name='use',
            name='use',
        ),
        migrations.AddField(
            model_name='use',
            name='post_using',
            field=models.ForeignKey(to='posts.Posts', blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='use',
            name='used_by',
            field=models.ForeignKey(to='user_profiles.User', blank=True, null=True),
        ),
    ]
