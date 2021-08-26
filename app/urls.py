from app import plot
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main, name="main.html"),
    path('x/', views.x, name="x.html"),
    path('plot', views.plot, name="plot"),

    path('index', views.index, name='index'),
    path('runcode', views.runcode, name='runcode'),
]
