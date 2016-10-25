# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0007_auto_20161024_2100'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='rate',
            name='rate',
        ),
        migrations.RemoveField(
            model_name='rate',
            name='rated_by',
        ),
        migrations.RemoveField(
            model_name='use',
            name='post_using',
        ),
        migrations.RemoveField(
            model_name='use',
            name='used_by',
        ),
        migrations.DeleteModel(
            name='Rate',
        ),
        migrations.DeleteModel(
            name='Use',
        ),
    ]
