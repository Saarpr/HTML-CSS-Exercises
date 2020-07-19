from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse

# Create your models here.

class Trip(models.Model):
    trip_id = models.AutoField(primary_key=True) 
    where = models.CharField(max_length=100)
    multi_round = models.CharField(max_length=20)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    budget = models.PositiveSmallIntegerField(null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.where

    def get_absolute_url(self):
        return reverse('trip-detail', kwargs={'pk': self.pk})
