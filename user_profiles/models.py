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



