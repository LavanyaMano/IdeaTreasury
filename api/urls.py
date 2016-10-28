from django.conf.urls import include,url 
from rest_framework import routers
from posts.viewsets import PostViewSet, RateViewSet, CommentViewSet
from user_profiles.viewsets import UserViewSet


router = routers.DefaultRouter()
router.register(r'user',UserViewSet)
router.register(r'posts',PostViewSet)
router.register(r'rate',RateViewSet)
router.register(r'comment',CommentViewSet)

urlpatterns = [

    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^',include(router.urls)),
]

# installed third party package for registration - django-rest-auth