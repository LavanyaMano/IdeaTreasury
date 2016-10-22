from rest_framework import viewsets
from .models import Posts
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all().order_by('-created_date')
    serializer_class = PostSerializer