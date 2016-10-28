# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0020_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='read',
            field=models.BooleanField(default=False),
        ),
    ]
