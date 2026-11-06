from django.db import models


class Student(models.Model):

    student_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    age = models.IntegerField()
    course = models.CharField(max_length=100)
    marks = models.FloatField()

    def __str__(self):
        return self.student_name