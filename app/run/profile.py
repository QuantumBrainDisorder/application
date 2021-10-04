# import io
# from _plotly_utils.utils import NotEncodable
# from django.http import HttpResponseRedirect
# from django.shortcuts import render
import sys
import chemical_QBD as cqbd
import quantum_QBD as qqbd
import material_engineering_QBD as meqbd
import json
import matplotlib.pyplot as plt
# import base64
# from io import BytesIO
import io
import pandas as pd
import plotly.graph_objects
import plotly.io
import plotly
import plotly.express as px
from django.http import JsonResponse
import units_QBD
import plotly.graph_objects as go
import numpy as np

fig, config, names = None, None, None
x = []
y = []
name = []
unit = []
text = None
color = None

def profile(request):
    glob_ = list(globals().keys()).copy()
    sys.stdout = mystdout = io.StringIO()
    input = json.load(request)
    input = json.loads(input['input'])

    plot_, error_, result_, meta_ = None, None, None, None
    globals()['fig'], globals()['config'] = None, None
    globals()['x'] = []
    globals()['y'] = []
    globals()['name'] = []
    globals()['unit'] = []

    code_ = input['code']
    if code_ == None: code_ = ''


    colors = input['theme']

    names = list(input['sheets'].keys())
    names.remove('structure')
    names.remove('bowings')

    structure__materials, structure__thicknesses = meqbd.read__sheet(input['sheets']['structure'], input['units']['structure'])
    structure__unit = input['units']['structure']

    property = cqbd.read__sheet(input['sheets'][names[0]], 'dict')
    property__unit = input['units'][names[0]]

    try:
        bowings = input['sheets']['bowings'][names[0]]
    except Exception:
        bowings = {}

    values = []
    for material in structure__materials:   
        try:
            values.append(meqbd.interpolation__exception(material, property, bowings))
        except Exception as e:
            error_ = str(e).replace('<', '&lt;').replace('>', '&gt;')

    try:
        x1, y1 = meqbd.profile__gridded(structure__thicknesses, values, float(input['space__resolution']))
    except Exception as e:
        error_ = str(e).replace('<', '&lt;').replace('>', '&gt;')

    
    multiplier = 1 / units_QBD.standardise(structure__unit).value
    for i in range(0,len(x1)):
        x1[i] = x1[i] * multiplier
        


    globals()['color'] = colors['--theme4']
    # globals()['text'] = common
    globals()['x'].append(x1)
    globals()['y'].append(y1)
    globals()['name'].append('structure growth direction Z')
    globals()['name'].append(names[0])
    globals()['unit'].append(structure__unit)
    globals()['unit'].append(property__unit)

    code = """fig = px.line(x = x[0], y = y[0])
fig.update_xaxes(title_text = name[0] + ' (' + unit[0] + ')', gridcolor = color, zerolinecolor = color)
fig.update_yaxes(title_text = name[1] + ' (' + unit[1] + ')', gridcolor = color, zerolinecolor = color)
fig.update_layout(plot_bgcolor='rgba(0,0,0,0)', font_color=color, paper_bgcolor='rgba(0,0,0,0)')
fig.update_traces(textposition="top right")
config = dict({'scrollZoom': True})"""

    meta_ = code
    try:
        exec(code + '\n' + code_, globals())
    except Exception as e:
        error_ = str(e).replace('<', '&lt;').replace('>', '&gt;')


    if globals()['fig'] != None:
        try:
            if error_ != '':    plot_ = plotly.io.to_html(globals()['fig'], globals()['config'])
        except Exception as e:
            plot_ = None
            error_ = str(e).replace('<', '&lt;').replace('>', '&gt;')


    output_ = mystdout.getvalue()
    result_ = {"plot": plot_, "meta": meta_, "output": output_, "error": error_}
    
    for val in list(globals().keys()).copy():
        if not val in glob_:
            del globals()[val]
    return JsonResponse(result_, safe = False)

















