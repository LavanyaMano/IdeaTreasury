
from rest_framework import viewsets
from .models import Posts, Rate, Comment
from .serializers import PostSerializer, RateSerializer, CommentSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all().order_by('-created_date')
    serializer_class = PostSerializer

class RateViewSet(viewsets.ModelViewSet):
    queryset = Rate.objects.all()
    serializer_class = RateSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer