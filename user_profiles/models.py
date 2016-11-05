from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save 
from django.dispatch import receiver

class UserProfile(models.Model):
    user = models.OneToOneField(User)
    # username = models.CharField('username', max_length=10, unique=True, db_index=True)
    # email = models.EmailField('email address', unique=True)
    joined = models.DateTimeField(auto_now_add=True)
    education = models.CharField(max_length=10,blank=True)
    occupation = models.CharField(max_length=10,blank=True)
    location = models.CharField(max_length=10,blank=True)


    def username(self):
        username=self.user.username 
        return username
    def first_name(self):
        first_name=self.user.first_name 
        return first_name
    def email(self):
        email = self.user.email
        return email

    def __str__(self):
        return self.username()

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

    def comment_notification(self):
        raw_list = self.posts_set.all()
        no_of_posts = len(raw_list)
        new_comments = 0
        if(no_of_posts>0):
            for a in range(no_of_posts):
                new_comments += raw_list[a].comment_new()
        return new_comments

    def chat_notification(self):
        raw_list=self.receiver.all()
        length = len(raw_list)
        unread = []
        if (length>0):
            for a in range(length):
                if raw_list[a].read == False : 
                    unread.append(raw_list[a]) 
        return len(unread)


@receiver(post_save, sender=User) 
def create_profile(sender, instance, created, **kwargs): 
    """Create a matching profile whenever a user object is created.""" 
    if created: 
        profile, new = UserProfile.objects.get_or_create(user=instance)

class Chat(models.Model):
    message = models.CharField(max_length = 500,blank=True,null=True)
    sender = models.ForeignKey(UserProfile,blank=True,null=True,related_name="sender")
    receiver = models.ForeignKey(UserProfile,blank=True,null=True,related_name="receiver")
    read = models.BooleanField(default=False)
    time = models.DateTimeField(auto_now_add=True, null=True)


    def __str__(self):
        return self.message





