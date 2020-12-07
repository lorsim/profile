from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    nickname = models.CharField(max_length=200)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    image = models.CharField(max_length=255, null=True)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
