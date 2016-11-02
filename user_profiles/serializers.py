from rest_framework import serializers
from .models import UserProfile,Chat


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = (
            'id',
            'message',
            'sender',
            'receiver',
            'read')


class UserSerializer(serializers.ModelSerializer):
    receiver = ChatSerializer(many=True)
    # def get_receiver(self,userprofile):
    #     return userprofile.receiver.username()
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


