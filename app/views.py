from django.http import HttpResponseRedirect
from django.http import HttpResponse

from django.shortcuts import render
import sys
import chemical_QBD as cqbd
import matplotlib
import quantum_QBD as qqbd
import material_engineering_QBD as meqbd
import json
import matplotlib.pyplot as plt
import base64
from io import BytesIO
import pandas
import plotly.graph_objects
import plotly.io
import plotly
import plotly.express

from django.http import JsonResponse
import units_QBD

import plotly.graph_objects as go
import numpy as np
from django.http import FileResponse


def site__icon_(request):
    return FileResponse(open('./static/images/site__icon_.ico', 'rb'))
def site__icon(request):
    return FileResponse(open('./static/images/site__icon.ico', 'rb'))

def main(request):

    return render(request, "main.html")

def figure(request):
    return HttpResponse(request.POST['panel__form__orint__input'])  


def docs(request):
    return FileResponse(open('./static/others/docs.pdf', 'rb'))