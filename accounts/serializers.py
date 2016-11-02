# from django.contrib.auth.models import User
from rest_framework import serializers
from user_profiles.models import UserProfile


class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            'id',
            'username',
            'email',
            'joined',
            'postusing',
            'rating_user',
            'liked_post',
            'comment_notification',
            'chat_notification',
            'receiver')