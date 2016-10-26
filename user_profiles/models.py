from django.db import models
from django.contrib.auth.models import AbstractBaseUser



class User(AbstractBaseUser):
    username = models.CharField('username', max_length=10, unique=True, db_index=True)
    email = models.EmailField('email address', unique=True)
    joined = models.DateTimeField(auto_now_add=True)
    education = models.CharField(max_length=10,blank=True)
    occupation = models.CharField(max_length=10,blank=True)

    def __str__(self):
        return self.username

    def rating_user(self):
        raw_list = self.posts_set.all()
        no_of_posts = len(raw_list)
        post_rating = 0
        if(no_of_posts>0):
            for a in range(no_of_posts):
                if raw_list[a].postusers:
                    raw_postusers = raw_list[a].postusers.all()
                    no_of_postusers = len(raw_postusers)
                if raw_list[a].likes:
                    raw_postlikes = raw_list[a].likes.all()
                    no_of_postlikes =len(raw_postlikes)
                if raw_list[a].avg_rating():
                    post_rating = post_rating + raw_list[a].avg_rating()

        total = (no_of_posts ) + (post_rating) + (no_of_postusers )+ (no_of_postlikes)
        if total > 100:
            return total
        elif (total <= 100 and total > 50):
            return total
        elif total < 50:
            return total



