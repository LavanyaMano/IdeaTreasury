# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0016_auto_20161025_1959'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='posts',
            name='post_rated',
        ),
        migrations.AddField(
            model_name='posts',
            name='post_rated',
            field=models.ManyToManyField(null=True, to='posts.Rate'),
        ),
    ]
