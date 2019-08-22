from django.db import models
from django.utils import timezone


# class Post(models.Model):
#     author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
#     title = models.CharField(max_length=200)
#     text = models.TextField()
#     created_date = models.DateTimeField(
#             default=timezone.now)
#     published_date = models.DateTimeField(
#             blank=True, null=True)

#     def publish(self):
#         self.published_date = timezone.now()
#         self.save()

#     def __str__(self):
#         return self.title

class Entity(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    authorities = models.CharField(max_length=200)
    email =  models.CharField(max_length=200)
    created_date = models.DateTimeField(
            default=timezone.now)

    def __str__(self):
        return self.username

class Emergency(models.Model):
    assistent = models.ForeignKey('Entity', on_delete=models.CASCADE)
    number = models.CharField(max_length=200)
    created_date = models.DateTimeField(
            default=timezone.now)

    def __str__(self):
        return self.assistent

class Cure(models.Model):
    tutor = models.ForeignKey('Entity', on_delete=models.CASCADE)
    patient = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    quantity = models.CharField(max_length=200)
    posology = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Parameter(models.Model):
    code = models.CharField(max_length=200)
    cure = models.ForeignKey('Cure', on_delete=models.CASCADE)
    device = models.ForeignKey('Entity', on_delete=models.CASCADE)
    minpress = models.CharField(max_length=200)
    maxpress = models.CharField(max_length=200)
    mincir = models.CharField(max_length=200)
    maxcir = models.CharField(max_length=200)
    mintemp = models.CharField(max_length=200)
    maxtemp = models.CharField(max_length=200)

    def __str__(self):
        return self.code