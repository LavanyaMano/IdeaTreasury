# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profiles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(blank=True, null=True, max_length=500)),
                ('read', models.BooleanField(default=False)),
                ('comment_by', models.ForeignKey(blank=True, null=True, to='user_profiles.UserProfile')),
            ],
        ),
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Title', max_length=100)),
                ('text', models.CharField(blank=True, null=True, max_length=500)),
                ('reference', models.CharField(default='Own', blank=True, max_length=100)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('visible', models.BooleanField(default=True)),
                ('category', models.CharField(default='Art', choices=[('Art', 'Art'), ('Science', 'Science'), ('Finance', 'Finance'), ('Technology', 'Technology'), ('Business', 'Business')], max_length=50)),
                ('likes', models.ManyToManyField(blank=True, to='user_profiles.UserProfile', null=True, related_name='liked_post')),
                ('postusers', models.ManyToManyField(blank=True, to='user_profiles.UserProfile', null=True, related_name='postusing')),
                ('user', models.ForeignKey(to='user_profiles.UserProfile')),
            ],
        ),
        migrations.CreateModel(
            name='Rate',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, serialize=False, verbose_name='ID')),
                ('rating', models.DecimalField(default=0, max_digits=1000, decimal_places=0)),
                ('post_rated', models.ForeignKey(blank=True, null=True, to='posts.Posts')),
                ('rated_by', models.ForeignKey(blank=True, null=True, to='user_profiles.UserProfile')),
            ],
        ),
        migrations.AddField(
            model_name='comment',
            name='post_comment',
            field=models.ForeignKey(blank=True, null=True, to='posts.Posts'),
        ),
    ]
