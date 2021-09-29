from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main, name="main"),
    path('run__distribution', views.run__distribution, name="run__distribution"),
]
