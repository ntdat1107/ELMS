from django.db import models

# Create your models here.

class Instructors(models.Model):
    InstructorID = models.AutoField(primary_key= True)
    InstructorName = models.CharField(max_length=255)

