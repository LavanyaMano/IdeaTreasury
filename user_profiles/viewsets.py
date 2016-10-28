from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets

from .models import User
from .serializers import UserSerializer
from .permissions import TargetUser


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # permission_classes = (IsAuthenticated,)

    # def get(self, request, format=None):
    #     content = {
    #         'status': 'request was permitted'
    #     }
    #     return Response(content)

    # def get_permissions(self):
    #     # allow non-authenticated user to create via POST
    #     permission_classes = ()
    #     return 



