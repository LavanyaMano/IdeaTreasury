from django.db import models
from user_profiles.models import User

class Posts(models.Model):
    user =models.ForeignKey(User)
    text = models.CharField(max_length = 200)
    created_date = models.DateTimeField(auto_now_add = True)
