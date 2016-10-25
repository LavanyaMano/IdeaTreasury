from django.conf.urls import include,url 
from rest_framework import routers
from posts.viewsets import PostViewSet
from user_profiles.viewsets import UserViewSet


router = routers.DefaultRouter()
router.register(r'user',UserViewSet)
router.register(r'posts',PostViewSet)
urlpatterns = [
    url(r'^',include(router.urls)),
]