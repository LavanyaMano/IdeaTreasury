# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0014_auto_20161025_1856'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rate',
            name='post_rated',
        ),
        migrations.AddField(
            model_name='rate',
            name='post_rated',
            field=models.ForeignKey(blank=True, to='posts.Posts', null=True),
        ),
    ]
