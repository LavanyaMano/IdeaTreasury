from django.db import models
from user_profiles.models import UserProfile

class Posts(models.Model):
    user =models.ForeignKey(UserProfile)
    title = models.CharField(max_length = 100,default="Title")
    text = models.CharField(max_length = 500,blank=True,null=True)
    reference = models.CharField(max_length = 100, blank=True, default="Own")
    created_date = models.DateTimeField(auto_now_add = True)
    visible = models.BooleanField(default=True)
    postusers = models.ManyToManyField(UserProfile,blank=True,null=True,related_name= "postusing")
    likes = models.ManyToManyField(UserProfile,blank=True,
    null=True,related_name= "liked_post")


    ART = "Art"
    SCIENCE = "Science"
    FINANCE = "Finance"
    TECHNOLOGY = "Technology"
    BUSINESS = "Business"
    CHOICES=(
        (ART, "Art"),
        (SCIENCE, "Science"),
        (FINANCE, "Finance"),
        (TECHNOLOGY, "Technology"),
        (BUSINESS, "Business"),
        )
    category = models.CharField(max_length=50, 
        default=ART, choices=CHOICES)


    def avg_rating(self):
        raw_list = self.rate_set.all()
        length = len(raw_list)
        users_list = []
        rate_list = []
        total = 0;
        if (length>0):
            for a in range(length):
                if(raw_list[a].rated_by_id not in users_list):
                    users_list.append(raw_list[a].rated_by_id)
                    rate_list.append(raw_list[a].rating)
            for a in range(len(users_list)):
                total += rate_list[a]
            return total/len(users_list)

    def comment_new(self):
        raw_list = self.comment_set.all()
        length = len(raw_list)
        new = []
        if(length>0):
            for a in range(length):
                if raw_list[a].read == False : 
                    new.append(raw_list[a]) 
        return len(new)


    def __str__(self):
        return str(self.title)


class Rate(models.Model):
    rating = models.DecimalField(max_digits=1000, decimal_places=0,default=0)
    rated_by = models.ForeignKey(UserProfile,blank=True,null=True)
    post_rated = models.ForeignKey(Posts,blank=True,null=True)

    def __str__(self):
        return str(self.rating)

class Comment(models.Model):
    comment = models.CharField(max_length = 500,blank=True,null=True)
    comment_by = models.ForeignKey(UserProfile,blank=True,null=True)
    post_comment = models.ForeignKey(Posts,blank=True,null=True)
    read = models.BooleanField(default=False)

    def __str__(self):
        return str(self.comment)


