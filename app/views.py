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
import os

from django.http import JsonResponse
import units_QBD

import plotly.graph_objects as go
import numpy as np
from django.http import FileResponse
from django.http import HttpResponse


def site__icon_(request):
    return FileResponse(open('./static/images/site__icon_.ico', 'rb'))
def site__icon(request):
    return FileResponse(open('./static/images/site__icon.ico', 'rb'))

def main(request):
    return render(request, "main.html")

def set__default__structure(request):
    data = os.path.abspath(__file__)
    data = data[:data.find('views.py')]
    data = data[:-4]
    data = data + 'static/scripts/default__sheets/structure.dat'

    f = open(data,"r")
    data = f.readlines()
    return HttpResponse(data, content_type="text")

def set__default__property(request):
    property_ = request.read().decode('UTF-8')

    data = os.path.abspath(__file__)
    data = data[:data.find('views.py')]
    data = data[:-4]
    data = data + 'static/scripts/default__sheets/properties/' + property_ + '.dat'

    f = open(data,"r")
    data = f.readlines()
    return HttpResponse(data, content_type="text")

def docs(request):
    return FileResponse(open('./static/others/docs.pdf', 'rb'))