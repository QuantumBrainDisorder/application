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
import math

fig, config, names = None, None, None
x = []
y = []
name = []
unit = []
text = None
color = None

def fds(request):
    glob_ = list(globals().keys()).copy()
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


    if not 'fds__ho' in input.keys() and not 'fds__el' in input.keys():
        sys.stdout = mystdout = io.StringIO()
        try:
            exec(code_, globals())
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

    T = float(input['temperature'])
    if T == 0: T = 1e-9 

    multiplier = units_QBD.standardise(input['eu']).value
    et = float(input['et']) * multiplier
    eb = float(input['eb']) * multiplier
    er = float(input['er']) * multiplier

    F_v = float(input['qfl__ho']) * multiplier
    F_c = float(input['qfl__el']) * multiplier

    energy__grid = [eb]
    while(energy__grid[-1] < et):
        energy__grid.append(energy__grid[-1] + er)

    ho = meqbd.fds__ho(energy__grid, F_v, T)
    el = meqbd.fds__el(energy__grid, F_c, T)

    globals()['color'] = {
        0: colors['--theme0'],
        1: colors['--theme1'],
        2: colors['--theme2'],
        3: colors['--theme3'],
        4: colors['--theme4']
        }
    # globals()['text'] = common
    globals()['x'] = [i / multiplier for i in energy__grid]
    globals()['y'] = {'ho': ho, 'el': el}

    name = {
        'ho': 'Fermi-Dirac statistics for holes',
        'el': 'Fermi-Dirac statistics for electrons'
    }

    globals()['name'] = [name, 'energy (eV)']

    code = get__code(input.keys())

    meta_ = code
    sys.stdout = mystdout = io.StringIO()
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


def get__code(flags):
    code = """fig = go.Figure()
    """

    if 'fds__ho' in flags:
        code += """
fig.add_trace(go.Scatter(
    x = x, 
    y = y['ho'], 
    mode = 'lines', 
    name = name[0]['ho']))"""
    if 'fds__el' in flags:
        code += """
fig.add_trace(go.Scatter(
    x = x, 
    y = y['el'], 
    mode = 'lines', 
    name = name[0]['el']))"""

    code += """

fig.update_xaxes(
    title_text = name[1], 
    gridcolor = '#808080', 
    zerolinecolor = color[4])
fig.update_yaxes(   
    gridcolor = '#808080', 
    zerolinecolor = color[4])
fig.update_layout(
    plot_bgcolor = color[0], 
    font_color = color[4], 
    paper_bgcolor = color[0])
fig.update_traces(showlegend=True)
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""

    return code



