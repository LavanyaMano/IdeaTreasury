from rest_framework import serializers
from .models import Posts,Rate, Comment
from user_profiles.serializers import UserSerializer

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = (
            'id',
            'comment',
            'comment_by',
            'post_comment',
            'read')

class PostSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True, read_only = True)
    username = serializers.SerializerMethodField(allow_null=True)

    def get_username(self, post):
        return post.user.username()

    class Meta:
        model = Posts
        fields = (
            'id',
            'username',
            'title',
            'text',
            'reference',
            'created_date',
            'category',
            'visible',
            'postusers',
            'avg_rating',
            'likes',
            'comment_set',
            'comment_new',
            )
        read_only_fields = (
            'user',
            'created_date',
            'avg_rating',
            'comment_new')

    # def create(self, validated_data):
    #     # import pdb; pdb.set_trace()
    #     obj = Posts.objects.create(**validated_data)
    #     obj.user = self.context["request"].user.userprofile
    #     obj.save()
    #     return obj



class RateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = (
            'id',
            'rating',
            'rated_by',
            'post_rated')


