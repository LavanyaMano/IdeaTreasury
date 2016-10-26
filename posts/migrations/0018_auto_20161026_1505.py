# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0017_auto_20161025_2009'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='posts',
            name='post_rated',
        ),
        migrations.AddField(
            model_name='rate',
            name='post_rated',
            field=models.ForeignKey(null=True, blank=True, to='posts.Posts'),
        ),
    ]
