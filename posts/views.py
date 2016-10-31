from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework.parsers import MultiPartParser
from rest_framework.permissions import IsAuthenticated

from .models import Posts
from .serializers import PutPostSerializer
from .permissions import IsOwnerOrReadOnly

class ScreenshotUpload(generics.CreateAPIView):
    model = Posts
    serializer_class = PutPostSerializer
    parser_classes = (MultiPartParser,)
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class AppView(TemplateView):
    template_name = 'posts/app.html'