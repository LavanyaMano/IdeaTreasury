from rest_framework import serializers
from .models import UserProfile,Chat


class ChatSerializer(serializers.ModelSerializer):
    sender = serializers.SerializerMethodField()
    def get_sender(self,chat):
        return (chat.sender.username(), chat.sender.id)
        
    class Meta:
        model = Chat
        fields = (
            'id',
            'message',
            'sender',
            'receiver',
            'read',
            'time',)
        read_only_fields = ('sender',)

class UserSerializer(serializers.ModelSerializer):
    receiver = ChatSerializer(many=True, read_only=True)
    class Meta:
        model = UserProfile
        fields = (
            'id',
            'username',
            'first_name',
            'email',
            'joined',
            'postusing',
            'rating_user',
            'liked_post',
            'comment_notification',
            'chat_notification',
            'receiver')


