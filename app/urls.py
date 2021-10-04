from django.urls import path, include
from . import views
from .run import distribution
from .run import profile
from .run import energies

urlpatterns = [
    path('', views.main, name="main"),
    # path('run__distribution', views.run__distribution, name="run__distribution"),
    path('run__distribution', distribution.distribution, name="distribution"),
    path('run__profile', profile.profile, name="profile"),
    path('run__energies', energies.energies, name="energies"),
]
