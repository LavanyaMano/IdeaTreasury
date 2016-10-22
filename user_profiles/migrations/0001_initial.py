# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, serialize=False, primary_key=True)),
                ('password', models.CharField(verbose_name='password', max_length=128)),
                ('last_login', models.DateTimeField(blank=True, verbose_name='last login', null=True)),
                ('username', models.CharField(verbose_name='username', max_length=10, db_index=True, unique=True)),
                ('email', models.EmailField(verbose_name='email address', max_length=254, unique=True)),
                ('joined', models.DateTimeField(auto_now_add=True)),
                ('education', models.CharField(blank=True, max_length=10)),
                ('occupation', models.CharField(blank=True, max_length=10)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
