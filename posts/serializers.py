from rest_framework import serializers
from .models import Posts,Rate, Comment

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
    comment_set = CommentSerializer(many=True)
    class Meta:
        model = Posts
        fields = (
            'id',
            'user',
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
            'comment_new'
            )
        # read_only_fields = (
        #     'user',
        #     'title',
        #     'text',
        #     'reference',
        #     'created_date',
        #     'category',
        #     'visible',
        #     'postusers',
        #     'avg_rating',
        #     'likes',
        #     'comment_set',)


class PutPostSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True)
    class Meta:
        model = Posts
        fields = (
            'id',
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
            'comment_new'
            )

class RateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = (
            'id',
            'rating',
            'rated_by',
            'post_rated')


