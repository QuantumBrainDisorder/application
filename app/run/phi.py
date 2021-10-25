# import io
# from _plotly_utils.utils import NotEncodable
# from django.http import HttpResponseRedirect
# from django.shortcuts import render
import sys
import chemical_QBD as cqbd
import quantum_QBD as qqbd
import math_QBD as mqbd
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

def phi(request):
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

    names = list(input['sheets'].keys())


    structure__unit = input['units']['structure']
    structure__materials, structure__thicknesses = meqbd.read__sheet(input['sheets']['structure'], input['units']['structure'])
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





    relative__permittivity = []
    relative__permittivity__dict = cqbd.read__sheet(input['sheets']['relative__permittivity'], 'dict')
    relative__permittivity__bowings = ...
    try:
        relative__permittivity__bowings = input['sheets']['bowings']['relative__permittivity']
    except Exception:
        relative__permittivity__bowings = {}
    for material in structure__materials:   
        relative__permittivity.append(meqbd.interpolation__exception(material, relative__permittivity__dict, relative__permittivity__bowings))
    xx, rp = meqbd.profile__gridded(structure__thicknesses, relative__permittivity, float(input['space__resolution']))





    effective__mass__unit = input['units']['effective__mass']

    effective__mass__lh__dict = ...
    effective__mass__lh__bowings = ...
    effective__mass__lh = []

    effective__mass__hh__dict = ...
    effective__mass__hh__bowings = ...
    effective__mass__hh = []

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
    T = float(input['temperature'])
    if T == 0: T = 1e-6

    alpha__varshni__dict = cqbd.read__sheet(input['sheets']['alpha__varshni'], 'dict')
    beta__varshni__dict = cqbd.read__sheet(input['sheets']['beta__varshni'], 'dict')

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
    ldos__grid__t = float(input['energy__ldos__t']) * multiplier
    ldos__grid__b = float(input['energy__ldos__b']) * multiplier
    ldos__grid__r = float(input['energy__ldos__r']) * multiplier
    ldos__grid = [ldos__grid__b]
    maxgrid = ldos__grid__t - ldos__grid__r
    while ldos__grid[-1] <= maxgrid: ldos__grid.append(ldos__grid[-1] + ldos__grid__r)

    F_v = float(input['qfl__ho']) * multiplier
    F_c = float(input['qfl__el']) * multiplier

    cc__ho__2d = []
    cc__ho__3d = []
    cc__ho__merged = []
    cc__el__2d = []
    cc__el__3d = []
    cc__el__merged = []
    cc__di__2d = []
    cc__di__3d = []
    cc__di__merged = []

    ldos__lh__2d = ...
    ldos__lh__3d = ...
    ldos__lh__merged = ...
    ldos__hh__2d = ...
    ldos__hh__3d = ...
    ldos__hh__merged = ...
    ldos__ho__2d = []
    ldos__ho__3d = []
    ldos__ho__merged = []
    ldos__el__2d = ...
    ldos__el__3d = ...
    ldos__el__merged = ...

    vbo__temp = [-i for i in valence__band__offset]
    index = vbo__temp.index(max(vbo__temp))
    eg__temp = [-i for i in ldos__grid]
    eg__temp.reverse()
    de = eg__temp[1] - eg__temp[0]

    ldos__lh__2d = qqbd.ldos__gridded__2D(eg__temp, x1, [-i for i in y1], lh, kx, ky, -elt, -elb, elr)
    ldos__hh__2d = qqbd.ldos__gridded__2D(eg__temp, x1, [-i for i in y2], hh, kx, ky, -elt, -elb, elr)
    for i in range(0, len(ldos__lh__2d)):
        ldos__lh__2d[i].reverse()
        ldos__hh__2d[i].reverse()
        ldos__ho__2d.append([])
        for j in range(0,len(ldos__lh__2d[i])):
            ldos__ho__2d[-1].append(ldos__lh__2d[i][j] + ldos__hh__2d[i][j])
    cc__ho__2d = qqbd.p(ldos__grid, ldos__ho__2d, F_v, T)

    ldos__lh__3d = qqbd.ldos__gridded__3D(eg__temp, x1, effective__mass__lh[index], -valence__band__offset[index])
    ldos__hh__3d = qqbd.ldos__gridded__3D(eg__temp, x1, effective__mass__hh[index], -valence__band__offset[index])
    for i in range(0, len(ldos__lh__3d)):
        ldos__lh__3d[i].reverse()
        ldos__hh__3d[i].reverse()
        ldos__ho__3d.append([])
        for j in range(0,len(ldos__lh__3d[i])):
            ldos__ho__3d[-1].append(ldos__lh__3d[i][j] + ldos__hh__3d[i][j])
    cc__ho__3d = qqbd.p(ldos__grid, ldos__ho__3d, F_v, T)

    ldos__lh__merged = qqbd.ldos__merge__reversed(x1, ldos__grid, ldos__lh__2d, ldos__lh__3d, valence__band__offset[index])
    ldos__hh__merged = qqbd.ldos__merge__reversed(x1, ldos__grid, ldos__hh__2d, ldos__hh__3d, valence__band__offset[index])
    for i in range(0, len(ldos__lh__merged)):
        ldos__lh__merged[i].reverse()
        ldos__hh__merged[i].reverse()
        ldos__ho__merged.append([])
        for j in range(0,len(ldos__lh__merged[i])):
            ldos__ho__merged[-1].append(ldos__lh__merged[i][j] + ldos__hh__merged[i][j])
    cc__ho__merged = qqbd.p(ldos__grid, ldos__ho__merged, F_v, T)


    temp = []
    for i in range(0,len(valence__band__offset)):
        temp.append(energy__gap[i] + valence__band__offset[i])
    index = temp.index(max(temp))

    ldos__el__2d = qqbd.ldos__gridded__2D(ldos__grid, x1, y3, el, kx, ky, elb, elt, elr)
    cc__el__2d = qqbd.n(ldos__grid, ldos__el__2d, F_c, T)

    ldos__el__3d = qqbd.ldos__gridded__3D(ldos__grid, x1, effective__mass__el[index],  temp[index])
    cc__el__3d = qqbd.n(ldos__grid, ldos__el__3d, F_c, T)
    
    ldos__el__merged = qqbd.ldos__merge(x1, ldos__grid, ldos__el__2d, ldos__el__3d, temp[index])
    cc__el__merged = qqbd.n(ldos__grid, ldos__el__merged, F_c, T)
       


    for i in range(0,len(cc__ho__merged)):
        cc__di__merged.append(cc__ho__merged[i] - cc__el__merged[i])

    h = []
    for i in range(0,len(cc__di__merged)):
        h.append(-cc__di__merged[i] * units_QBD.E[0] / units_QBD.EPSILON_0[0])

    phi__0 = float(input['phi__0'])
    phi__L = float(input['phi__L'])

    phi = mqbd.poisson__1D(x1[1] - x1[0], phi__0, phi__L, rp, h)
    
    globals()['color'] = colors['--theme4']
    # globals()['text'] = common
    multiplier = units_QBD.standardise(structure__unit).value
    globals()['x'] = [i / multiplier for i in x1]
    globals()['y'] = phi
    globals()['name'] = ['structure growth direction Z (' + structure__unit + ')', 'electric potential V (V)']

    code = """fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y = y, mode='lines'))
fig.update_xaxes(title_text = name[0], gridcolor = color, zerolinecolor = color)
fig.update_yaxes(title_text = name[1], gridcolor = color, zerolinecolor = color)
fig.update_layout(plot_bgcolor='rgba(0,0,0,0)', font_color=color, paper_bgcolor='rgba(0,0,0,0)')
config = dict({'scrollZoom': True})"""


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

