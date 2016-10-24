# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='category',
            field=models.CharField(choices=[('Art', 'Art'), ('Science', 'Science'), ('Finance', 'Finance'), ('Technology', 'Technology'), ('Business', 'Business')], max_length=50, default='Art'),
        ),
    ]
