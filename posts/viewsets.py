
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Posts, Rate, Comment
from .serializers import PostSerializer, RateSerializer, CommentSerializer
from .permissions import IsOwnerOrReadOnly


class PostViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all().order_by('-created_date')
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,IsOwnerOrReadOnly, )
    def perform_create(self,serializer):
        serializer.save(user = self.request.user.userprofile)

class RateViewSet(viewsets.ModelViewSet):
    queryset = Rate.objects.all()
    serializer_class = RateSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    def perform_create(self,serializer):
        serializer.save(comment_by = self.request.user.userprofile)

