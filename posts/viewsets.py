from rest_framework import viewsets
from .models import Posts, Rate
from .serializers import PostSerializer, RateSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all().order_by('-created_date')
    serializer_class = PostSerializer

class RateViewSet(viewsets.ModelViewSet):
    queryset = Rate.objects.all()
    serializer_class = RateSerializer