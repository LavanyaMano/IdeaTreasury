from rest_framework import serializers
from .models import Posts,Rate


class PostSerializer(serializers.ModelSerializer):
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
            'avg_rating'
            )

class RateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = (
            'id',
            'rating',
            'rated_by',
            'post_rated')