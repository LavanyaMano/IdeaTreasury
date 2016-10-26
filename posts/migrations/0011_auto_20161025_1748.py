# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profiles', '0001_initial'),
        ('posts', '0010_auto_20161025_1552'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rate', models.DecimalField(blank=True, null=True, max_digits=10000, decimal_places=0)),
                ('rated_by', models.ManyToManyField(blank=True, null=True, to='user_profiles.User')),
            ],
        ),
        migrations.AlterField(
            model_name='posts',
            name='title',
            field=models.CharField(max_length=100, blank=True, default='Title'),
        ),
        migrations.AddField(
            model_name='posts',
            name='ratings',
            field=models.ForeignKey(to='posts.Rate', null=True),
        ),
    ]
