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
import plotly.subplots as ps
import plotly.io
import plotly
import plotly.express as px
from django.http import JsonResponse
import units_QBD
import plotly.graph_objects as go
import numpy as np

fig, config, names = None, None, None
x = []
y = {}
yy = {}
yyy = {}
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
    globals()['y'] = {}
    globals()['yy'] = {}
    globals()['yyy'] = {}
    globals()['name'] = []
    globals()['unit'] = []

    code_ = input['code']
    if code_ == None: code_ = ''


    colors = input['theme']

    names = list(input['sheets'].keys())

    multiplier = units_QBD.standardise(input['units']['space__resolution']).value
    input['space__resolution'] = float(input['space__resolution']) * multiplier

    structure__unit = input['units']['structure']
    structure__materials, structure__thicknesses = meqbd.read__sheet(input['sheets']['structure'], input['units']['structure'])

    ep__0 = float(input['ep__0']) * units_QBD.standardise(input['ep__unit']).value
    ep__L = float(input['ep__L']) * units_QBD.standardise(input['ep__unit']).value
    ep = meqbd.external__potential__profile__gridded(ep__0, ep__L, structure__thicknesses, input['space__resolution'])

    structure__length = 0
    for i in structure__thicknesses:    structure__length += i


    valence__band__offset__dict = cqbd.read__sheet(input['sheets']['valence__band__offset'], 'dict')
    valence__band__offset__unit = input['units']['valence__band__offset']
    valence__band__offset__bowings = ...
    try:
        valence__band__offset__bowings = input['sheets']['bowings']['valence__band__offset']
    except Exception:
        valence__band__offset__bowings = {}
    valence__band__offset = []
    for material in structure__materials:  
        valence__band__offset.append(meqbd.interpolation__exception(material, valence__band__offset__dict, valence__band__offset__bowings))
    multiplier = units_QBD.standardise(valence__band__offset__unit).value
    valence__band__offset = [val * multiplier for val in valence__band__offset]


    effective__mass__unit = input['units']['effective__mass']

    effective__mass__lh__dict = ...
    effective__mass__lh__bowings = ...
    effective__mass__lh = []
    effective__mass__lh__dict = input['sheets']['effective__mass']['lh']
    effective__mass__lh__dict = {key: float(value) for (key, value) in effective__mass__lh__dict.items()}
    effective__mass__lh__bowings = ...
    try:
        effective__mass__lh__bowings = input['sheets']['bowings']['effective__mass']['lh']
    except Exception:
        effective__mass__lh__bowings = {}
    for material in structure__materials:   
        effective__mass__lh.append(meqbd.interpolation__exception(material, effective__mass__lh__dict, effective__mass__lh__bowings))
    multiplier = units_QBD.standardise(effective__mass__unit).value
    effective__mass__lh = [val * multiplier for val in effective__mass__lh]


    effective__mass__hh__dict = ...
    effective__mass__hh__bowings = ...
    effective__mass__hh = []
    effective__mass__hh__dict = input['sheets']['effective__mass']['hh']
    effective__mass__hh__dict = {key: float(value) for (key, value) in effective__mass__hh__dict.items()}
    try:
        effective__mass__hh__bowings = input['sheets']['bowings']['effective__mass']['hh']
    except Exception:
        effective__mass__hh__bowings = {}
    for material in structure__materials: 
        effective__mass__hh.append(meqbd.interpolation__exception(material, effective__mass__hh__dict, effective__mass__hh__bowings))
    multiplier = units_QBD.standardise(effective__mass__unit).value
    effective__mass__hh = [val * multiplier for val in effective__mass__hh]


    lh = ...
    hh = ...
    y1 = ...
    y2 = ...
    xx = ...
    xx, lh = meqbd.profile__gridded(structure__thicknesses, effective__mass__lh, float(input['space__resolution']))
    xx, hh = meqbd.profile__gridded(structure__thicknesses, effective__mass__hh, float(input['space__resolution']))

    del xx
    x1, y1 = meqbd.profile__gridded(structure__thicknesses, valence__band__offset, float(input['space__resolution']))
    x1, y2 = meqbd.profile__gridded(structure__thicknesses, valence__band__offset, float(input['space__resolution']))

    energy__gap__dict = ...
    energy__gap__unit = ...
    energy__gap__bowings = ...
    energy__gap = []
    effective__mass__el__dict = ...
    effective__mass__el__bowings = ...
    effective__mass__el = []
    y3, el = ..., ...
            
    alpha__varshni__dict = cqbd.read__sheet(input['sheets']['alpha__varshni'], 'dict')
    beta__varshni__dict = cqbd.read__sheet(input['sheets']['beta__varshni'], 'dict')
    T = float(input['temperature'])

    energy__gap__dict = cqbd.read__sheet(input['sheets']['energy__gap'], 'dict')
    
    for m in alpha__varshni__dict.keys():
        if m in beta__varshni__dict.keys():
            energy__gap__dict[m] -= alpha__varshni__dict[m] * 1e-6 * T * T / (beta__varshni__dict[m] + T)

    energy__gap__unit = input['units']['energy__gap']
    try:
        energy__gap__bowings = input['sheets']['bowings']['energy__gap']
    except Exception:
        energy__gap__bowings = {}
    for material in structure__materials:  
        energy__gap.append(meqbd.interpolation__exception(material, energy__gap__dict, energy__gap__bowings))
    multiplier = units_QBD.standardise(energy__gap__unit).value
    energy__gap = [val * multiplier for val in energy__gap]
    effective__mass__el__dict = input['sheets']['effective__mass']['el']
    effective__mass__el__dict = {key: float(value) for (key, value) in effective__mass__el__dict.items()}
    try:
        effective__mass__el__bowings = input['sheets']['bowings']['effective__mass']['el']
    except Exception:
        effective__mass__el__bowings = {}
    for material in structure__materials: 
        effective__mass__el.append(meqbd.interpolation__exception(material, effective__mass__el__dict, effective__mass__el__bowings))
    multiplier = units_QBD.standardise(effective__mass__unit).value
    effective__mass__el = [val * multiplier for val in effective__mass__el]

    x1, y3 = meqbd.profile__gridded(structure__thicknesses, energy__gap, float(input['space__resolution']))
    xx, el = meqbd.profile__gridded(structure__thicknesses, effective__mass__el, float(input['space__resolution']))
    y3 = [y1[i] + y3[i] for i in range(0,len(y1))]

    for i in range(0,len(y1)):
            y1[i] += ep[i]
            y2[i] += ep[i]
            y3[i] += ep[i]



    multiplier = units_QBD.standardise(valence__band__offset__unit).value
    elt = float(input['energy__levels__limit__top']) * multiplier
    elb = float(input['energy__levels__limit__bottom']) * multiplier
    elr = float(input['energy__levels__resolution']) * multiplier



    kxb = float(input['wave__vector__parameters__bx'])
    kxt = float(input['wave__vector__parameters__tx'])
    kxr = float(input['wave__vector__parameters__rx'])
    kyb = float(input['wave__vector__parameters__by'])
    kyt = float(input['wave__vector__parameters__ty'])
    kyr = float(input['wave__vector__parameters__ry'])
    
    kx = [kxb]
    while kx[-1] < kxt: kx.append(kx[-1] + kxr)
    ky = [kyb]
    while ky[-1] < kyt: ky.append(ky[-1] + kyr)
    
    multiplier = units_QBD.standardise(valence__band__offset__unit).value
    dos__grid__b = float(input['energy__dos__b']) * multiplier
    dos__grid__r = float(input['energy__dos__r']) * multiplier
    dos__grid__t = float(input['energy__dos__t']) * multiplier
    dos__grid = [dos__grid__b]
    maxgrid = dos__grid__t - dos__grid__r
    while dos__grid[-1] <= maxgrid: dos__grid.append(dos__grid[-1] + dos__grid__r)

    dos__lh__2d = ...
    dos__lh__3d = ...
    dos__lh__merged = ...
    dos__hh__2d = ...
    dos__hh__3d = ...
    dos__hh__merged = ...
    dos__el__2d = ...
    dos__el__3d = ...
    dos__el__merged = ...

    vbo__temp = [-i for i in valence__band__offset]
    index = vbo__temp.index(max(vbo__temp))
    eg__temp = [-i for i in dos__grid]
    eg__temp.reverse()

    dos__lh__2d = qqbd.dos__gridded__2D(eg__temp, x1, [-i for i in y1], lh, kx, ky, -elt, -elb, elr)
    dos__lh__2d.reverse()
    base, dos__lh__3d = qqbd.dos__gridded__3D(eg__temp, effective__mass__lh[index], -valence__band__offset[index], structure__length)
    dos__lh__3d.reverse()
    base, dos__lh__merged = qqbd.dos__merge__reversed(dos__grid, dos__lh__2d, dos__lh__3d, valence__band__offset[index])
    
    dos__hh__2d = qqbd.dos__gridded__2D(eg__temp, x1, [-i for i in y2], hh, kx, ky, -elt, -elb, elr)
    dos__hh__2d.reverse()
    base, dos__hh__3d = qqbd.dos__gridded__3D(eg__temp, effective__mass__hh[index], -valence__band__offset[index], structure__length)
    dos__hh__3d.reverse()
    base, dos__hh__merged = qqbd.dos__merge__reversed(dos__grid, dos__hh__2d, dos__hh__3d, valence__band__offset[index])

    dos__ho__merged = []
    for i in range(0,len(base)):
        dos__ho__merged.append(dos__hh__merged[i] + dos__lh__merged[i])


    temp = []
    for i in range(0,len(valence__band__offset)):
        temp.append(energy__gap[i] + valence__band__offset[i])
    index = temp.index(max(temp))

    dos__el__2d = qqbd.dos__gridded__2D(dos__grid, x1, y3, el, kx, ky, elb, elt, elr)
    base, dos__el__3d = qqbd.dos__gridded__3D(dos__grid, effective__mass__el[index], temp[index], structure__length)
    base, dos__el__merged = qqbd.dos__merge(dos__grid, dos__el__2d, dos__el__3d, temp[index])
    
    F_v, F_i, F_c = meqbd.F__calibration(
        T, 
        max(ep) - min(ep), 
        min(y1), 
        max(y3), 
        dos__grid, 
        dos__ho__merged, 
        dos__el__merged)
    fds__ho = meqbd.fds__ho(dos__grid, F_v, T)
    fds__el = meqbd.fds__el(dos__grid, F_c, T)
    
    globals()['color'] = {
        0: colors['--theme0'],
        1: colors['--theme1'],
        2: colors['--theme2'],
        3: colors['--theme3'],
        4: colors['--theme4']
        }
    multiplier = units_QBD.standardise(valence__band__offset__unit).value
    globals()['x'] = [i / multiplier for i in dos__grid]
    if 'append__epr' in input.keys():
        globals()['y'] = {
            'ho': [i / multiplier for i in y1],
            'el': [i / multiplier for i in y3],
            '_': x1
        }
    globals()['yy'] = {
        'ho': fds__ho,
        'el': fds__el,

        'F_c_': [F_c / multiplier] * 2,
        'F_v_': [F_v / multiplier] * 2,
        'F_i_': [F_i /multiplier] * 2,
        
        'F_c': [0,1],
        'F_v': [0,1],
        'F_i': [0,1]
        }

    multiplier *= 1e-4
    if 'append__dos' in input.keys():
        globals()['yyy'] = {
            'ho' : [multiplier * dos__ho__merged[i] * fds__ho[i] for i in range(0,len(dos__grid))],
            'el' : [multiplier * dos__el__merged[i] * fds__el[i] for i in range(0,len(dos__grid))]
        }

    name = {
        1: ['holes band edge', 'electrons band edge'], 
        2: [
            'Fermi-Dirac statistic for holes', 
            'Fermi-Dirac statistic for electrons', 
            'Fermi level', 
            'Quasi-Fermi level for holes', 
            'Quasi-Fermi level for electrons'], 
        3: ['DOS for holes', 'DOS for electrons']}
    globals()['name'] = [
        'energy (eV)', 
        'structure growth direction Z (' + structure__unit + ')', 
        '', 
        'DOS (cm-2eV-1)', 
        name]

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


        # 'lh': {
        #     '2d': dos__lh__2d,
        #     '3d': dos__lh__3d,
        #     'merged': dos__lh__merged
        #     },
        # 'hh': {
        #     '2d': dos__hh__2d,
        #     '3d': dos__hh__3d,
        #     'merged': dos__hh__merged
        #     },
        # 'el': {
        #     '2d': dos__el__2d,
        #     '3d': dos__el__3d,
        #     'merged': dos__el__merged
        #     }

        # 'for__hh' 
        # 'dos__3d'

        #     code = """fig = go.Scatter(x = x[0], y = y[0])
        # fig.update_xaxes(title_text = name[0] + ' (' + unit[0] + ')', gridcolor = color, zerolinecolor = color)
        # fig.update_yaxes(title_text = name[1] + ' (' + unit[1] + ')', gridcolor = color, zerolinecolor = color)
        # fig.update_layout(plot_bgcolor='rgba(0,0,0,0)', font_color=color, paper_bgcolor='rgba(0,0,0,0)')
        # fig.update_traces(textposition="top right")
        # config = dict({'scrollZoom': True})"""

        # fig.add_trace(go.Scatter(x=x[0], y=y[1], name='heavy holes band'))

# fig.add_trace(go.Scatter(x=random_x, y=random_y0,
#                     mode='lines',
#                     name='lines'))
def get__code(flags):
    if 'append__epr' in flags:
        if 'append__dos' in flags:      return get__code_v1()
        else:                           return get__code_v2()
    elif 'append__dos' in flags:        return get__code_v3()
    else:                               return get__code_v4()



def get__code_v1():
        return """fig = ps.make_subplots(
    rows = 3, cols = 1,
    shared_xaxes = True,
    vertical_spacing = 0.02)

fig.add_trace(
    go.Scatter(
        x = y['ho'], 
        y = y['_'],
        mode = 'lines', 
        name = name[4][1][0]),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = y['el'], 
        y = y['_'],
        mode = 'lines', 
        name = name[4][1][1]),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = yy['ho'],
        mode = 'lines', 
        name = name[4][2][0]),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = yy['el'],
        mode = 'lines', 
        name = name[4][2][1]),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_c_'], 
        y = yy['F_c'],
        mode = 'lines', 
        name = name[4][2][4]),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_i_'], 
        y = yy['F_i'],
        mode = 'lines', 
        name = name[4][2][2]),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_v_'], 
        y = yy['F_v'],
        mode = 'lines', 
        name = name[4][2][3]),
    row=2, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = yyy['ho'],
        mode = 'lines', 
        name = name[4][3][0]),
    row=3, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = yyy['el'],
        mode = 'lines', 
        name = name[4][3][1]),
    row=3, 
    col=1)

fig.update_xaxes(
    title_text = name[0],
    gridcolor = '#808080',
    zerolinecolor = color[4],
    row = 3)
fig.update_yaxes(
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_yaxes(
    title_text = name[1], 
    row = 1, 
    col = 1)
fig.update_yaxes(
    title_text = name[2], 
    row = 2, 
    col = 1)
fig.update_yaxes(
    title_text = name[3], 
    row = 3, 
    col = 1)
fig.update_layout(
    plot_bgcolor = color[0],
    font_color = color[4],
    paper_bgcolor = color[0])
fig.update_traces(showlegend=True)
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""


    
def get__code_v2():
    return """fig = ps.make_subplots(
    rows = 2, cols = 1,
    shared_xaxes = True,
    vertical_spacing = 0.02)

fig.add_trace(
    go.Scatter(
        x = y['ho'], 
        y = y['_'],
        mode = 'lines', 
        name = name[4][1][0]),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = y['el'], 
        y = y['_'],
        mode = 'lines', 
        name = name[4][1][1]),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = yy['ho'],
        mode = 'lines', 
        name = name[4][2][0]),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = yy['el'],
        mode = 'lines', 
        name = name[4][2][1]),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_c_'], 
        y = yy['F_c'],
        mode = 'lines', 
        name = name[4][2][4]),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_i_'], 
        y = yy['F_i'],
        mode = 'lines', 
        name = name[4][2][2]),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_v_'], 
        y = yy['F_v'],
        mode = 'lines', 
        name = name[4][2][3]),
    row=2, 
    col=1)

fig.update_xaxes(
    title_text = name[0],
    gridcolor = '#808080',
    zerolinecolor = color[4],
    row = 2)
fig.update_yaxes(
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_yaxes(
    title_text = name[1], 
    row = 1, 
    col = 1)
fig.update_yaxes(
    title_text = name[2], 
    row = 2, 
    col = 1)
fig.update_layout(
    plot_bgcolor = color[0],
    font_color = color[4],
    paper_bgcolor = color[0])
fig.update_traces(showlegend=True)
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""


def get__code_v3():
    return """fig = ps.make_subplots(
    rows = 2, cols = 1,
    shared_xaxes = True,
    vertical_spacing = 0.02)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = yy['ho'],
        mode = 'lines', 
        name = name[4][2][0]),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = yy['el'],
        mode = 'lines', 
        name = name[4][2][1]),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = yy['F_c_'], 
        y = yy['F_c'],
        mode = 'lines', 
        name = name[4][2][4]),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_i_'], 
        y = yy['F_i'],
        mode = 'lines', 
        name = name[4][2][2]),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_v_'], 
        y = yy['F_v'],
        mode = 'lines', 
        name = name[4][2][3]),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = yyy['ho'],
        mode = 'lines', 
        name = name[4][3][0]),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = yyy['el'],
        mode = 'lines', 
        name = name[4][3][1]),
    row=2, 
    col=1)

fig.update_xaxes(
    title_text = name[0],
    gridcolor = '#808080',
    zerolinecolor = color[4],
    row = 2)
fig.update_yaxes(
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_yaxes(
    title_text = name[2], 
    row = 1, 
    col = 1)
fig.update_yaxes(
    title_text = name[3], 
    row = 2, 
    col = 1)
fig.update_layout(
    plot_bgcolor = color[0],
    font_color = color[4],
    paper_bgcolor = color[0])
fig.update_traces(showlegend=True)
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""









def get__code_v4():
    return """fig = ps.make_subplots(
    rows = 1, cols = 1,
    shared_xaxes = True,
    vertical_spacing = 0.02)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = yy['ho'],
        mode = 'lines', 
        name = name[4][2][0]),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = yy['el'],
        mode = 'lines', 
        name = name[4][2][1]),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_c_'], 
        y = yy['F_c'],
        mode = 'lines', 
        name = name[4][2][4]),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = yy['F_i_'], 
        y = yy['F_i'],
        mode = 'lines', 
        name = name[4][2][2]),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = yy['F_v_'], 
        y = yy['F_v'],
        mode = 'lines', 
        name = name[4][2][3]),
    row=1, 
    col=1)

fig.update_xaxes(
    title_text = name[0],
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_yaxes(
    gridcolor = '#808080',
    zerolinecolor = color[4],
    title_text = name[2],
    row = 1,
    col = 1)
fig.update_layout(
    plot_bgcolor = color[0],
    font_color = color[4],
    paper_bgcolor = color[0])
fig.update_traces(showlegend=True)
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""

