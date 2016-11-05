from django.conf.urls import include,url 
from rest_framework import routers
from posts.viewsets import PostViewSet, RateViewSet, CommentViewSet
from user_profiles.viewsets import UserViewSet,ChatViewSet

from accounts.views import CurrentUserDetails


router = routers.DefaultRouter()
router.register(r'user',UserViewSet)
router.register(r'posts',PostViewSet)
router.register(r'rate',RateViewSet)
router.register(r'comment',CommentViewSet)
router.register(r'chat',ChatViewSet)

urlpatterns = [
    url(r'^me/$', CurrentUserDetails.as_view(), name="me"),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^',include(router.urls)),
]

