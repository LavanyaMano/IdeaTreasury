from django.db import models
from user_profiles.models import User

class Posts(models.Model):
    user =models.ForeignKey(User)
    title = models.CharField(max_length = 100,blank=True,default="Title")
    text = models.CharField(max_length = 500,blank=True,null=True)
    reference = models.CharField(max_length = 100, blank=True, default="Own")
    created_date = models.DateTimeField(auto_now_add = True)
    visible = models.BooleanField(default=True)
    postusers = models.ManyToManyField(User,blank=True,
    null=True,related_name= "postusing")

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



