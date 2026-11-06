from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_world, name='hello_world'),
    path('students/', views.student_list, name='student_list'),
    path('add-student/', views.add_student, name='add_student'),
    path('update-student/', views.update_student, name='update_student'),
    path('delete-student/', views.delete_student, name='delete_student'),
]

