from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main, name="main.html"),
    path('x/', views.x, name="x.html")
]
