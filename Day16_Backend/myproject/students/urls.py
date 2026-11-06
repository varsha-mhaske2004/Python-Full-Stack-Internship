from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/students/', views.student_api, name='student_api'),
    path('api/students/<int:id>/', views.student_detail_api, name='student_detail_api'),
]