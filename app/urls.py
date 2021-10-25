from django.urls import path, include
from . import views
from .run import distribution
from .run import profile
from .run import energies
from .run import energy__paraboloids
from .run import dos
from .run import ldos
from .run import cos
from .run import cc
from .run import phi


urlpatterns = [
    path('', views.main, name="main"),
    # path('run__distribution', views.run__distribution, name="run__distribution"),
    path('site__icon_.ico', views.site__icon_, name="site__icon_"),
    path('site__icon.ico', views.site__icon, name="site__icon"),
    path('run__distribution', distribution.distribution, name="distribution"),
    path('run__profile', profile.profile, name="profile"),
    path('run__energies', energies.energies, name="energies"),
    path('run__energy__paraboloids', energy__paraboloids.energy__paraboloids, name="energy__paraboloids"),
    path('run__dos', dos.dos, name="dos"),
    path('run__ldos', ldos.ldos, name="ldos"),
    path('run__cos', cos.cos, name="cos"),
    path('run__cc', cc.cc, name="cc"),
    path('run__phi', phi.phi, name="phi"),
]


