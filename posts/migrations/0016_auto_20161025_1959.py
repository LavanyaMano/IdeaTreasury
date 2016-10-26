# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0015_auto_20161025_1858'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rate',
            name='post_rated',
        ),
        migrations.AddField(
            model_name='posts',
            name='post_rated',
            field=models.ForeignKey(null=True, to='posts.Rate'),
        ),
    ]
