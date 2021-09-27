from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main, name="main"),
    path('run__distribution', views.run__distribution, name="run__distribution"),
    path('get__structure', views.get__structure, name="get__structure")
]
