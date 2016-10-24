# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_posts_visible'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='reference',
            field=models.CharField(max_length=100, blank=True, default='Own'),
        ),
    ]
