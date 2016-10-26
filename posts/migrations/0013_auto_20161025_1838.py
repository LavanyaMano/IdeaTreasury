# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0012_auto_20161025_1805'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rate',
            name='rating',
            field=models.DecimalField(max_digits=10000, decimal_places=0, default=0),
        ),
    ]
