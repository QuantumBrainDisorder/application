from django.urls import path, include
from . import views
from .run import distribution 

urlpatterns = [
    path('', views.main, name="main"),
    # path('run__distribution', views.run__distribution, name="run__distribution"),
    path('run__distribution', distribution.distribution, name="distribution"),
]
