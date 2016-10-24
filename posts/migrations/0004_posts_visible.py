# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20161023_0406'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='visible',
            field=models.BooleanField(default=True),
        ),
    ]
