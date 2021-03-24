from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class BlogPost(models.Model):
    title = models.CharField(max_length=20)
    body = models.TextField()
    author = models.ForeignKey(User, max_length=10, on_delete=models.CASCADE)
