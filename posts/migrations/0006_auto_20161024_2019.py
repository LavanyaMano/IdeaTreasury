# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_auto_20161024_1247'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rate',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('rating', models.IntegerField(blank=True)),
                ('rate', models.ForeignKey(to='posts.Posts', related_name='rate')),
                ('rated_by', models.ForeignKey(to='posts.Posts', related_name='rated_by')),
            ],
        ),
        migrations.CreateModel(
            name='Use',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('use', models.ForeignKey(to='posts.Posts', related_name='use')),
                ('used_by', models.ForeignKey(to='posts.Posts', related_name='used_by')),
            ],
        ),
        migrations.AddField(
            model_name='posts',
            name='post_uses',
            field=models.ManyToManyField(through='posts.Use', to='posts.Posts'),
        ),
    ]
