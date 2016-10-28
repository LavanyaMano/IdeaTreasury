# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('posts', '0019_posts_likes'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, verbose_name='ID', primary_key=True, serialize=False)),
                ('comment', models.CharField(null=True, max_length=500, blank=True)),
                ('comment_by', models.ForeignKey(to=settings.AUTH_USER_MODEL, null=True, blank=True)),
                ('post_comment', models.ForeignKey(to='posts.Posts', null=True, blank=True)),
            ],
        ),
    ]
