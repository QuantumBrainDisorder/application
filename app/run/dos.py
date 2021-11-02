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

def dos(request):
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




    if not 'valence__band__offset' in names:
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
    if 'for__lh' in input.keys():
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
    if 'for__hh' in input.keys():
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
    if 'for__lh' in input.keys():
        xx, lh = meqbd.profile__gridded(structure__thicknesses, effective__mass__lh, float(input['space__resolution']))

    if 'for__hh' in input.keys():
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
    if 'energy__gap' in input.keys():
            
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
        if 'for__lh' in input.keys():
            y1[i] += ep[i]
        if 'for__hh' in input.keys():
            y2[i] += ep[i]
        if 'energy__gap' in input.keys():
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
    dos__grid__t = float(input['energy__dos__t']) * multiplier
    dos__grid__b = float(input['energy__dos__b']) * multiplier
    dos__grid__r = float(input['energy__dos__r']) * multiplier
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

    name = {
        'lh': {
            '2d': 'lh DOS 2D',
            '3d': 'lh DOS 3D x L',
            'merged': 'lh DOS 2D & DOS 3D x L'
            },
        'hh': {
            '2d': 'hh DOS 2D',
            '3d': 'hh DOS 3D x L',
            'merged': 'hh DOS 2D & DOS 3D x L'
            },
        'el': {
            '2d': 'el DOS 2D',
            '3d': 'el DOS 3D x L',
            'merged': 'el DOS 2D & DOS 3D x L'
            }
        }
    name = [name, 'energy (eV)', 'DOS (m-2J-1)']

    vbo__temp = [-i for i in valence__band__offset]
    index = vbo__temp.index(max(vbo__temp))
    eg__temp = [-i for i in dos__grid]
    eg__temp.reverse()
    if 'for__lh' in input.keys():
        if 'dos__2d' in input.keys():
            dos__lh__2d = qqbd.dos__gridded__2D(eg__temp, x1, [-i for i in y1], lh, kx, ky, -elt, -elb, elr)
            dos__lh__2d.reverse()
        if 'dos__3d' in input.keys():
            base, dos__lh__3d = qqbd.dos__gridded__3D(eg__temp, effective__mass__lh[index], -valence__band__offset[index], structure__length)
            dos__lh__3d.reverse()
        if 'dos__merged' in input.keys():
            if dos__el__2d == ...:
                dos__lh__2d = qqbd.dos__gridded__2D(eg__temp, x1, [-i for i in y1], lh, kx, ky, -elt, -elb, elr)
                dos__lh__2d.reverse()
            if dos__el__3d == ...:
                base, dos__lh__3d = qqbd.dos__gridded__3D(eg__temp, effective__mass__lh[index], -valence__band__offset[index], structure__length)
                dos__lh__3d.reverse()
        base, dos__lh__merged = qqbd.dos__merge__reversed(dos__grid, dos__lh__2d, dos__lh__3d, valence__band__offset[index])
    
    if 'for__hh' in input.keys():
        if 'dos__2d' in input.keys():
            dos__hh__2d = qqbd.dos__gridded__2D(eg__temp, x1, [-i for i in y2], hh, kx, ky, -elt, -elb, elr)
            dos__hh__2d.reverse()
        if 'dos__3d' in input.keys():
            base, dos__hh__3d = qqbd.dos__gridded__3D(eg__temp, effective__mass__hh[index], -valence__band__offset[index], structure__length)
            dos__hh__3d.reverse()
        if 'dos__merged' in input.keys():
            if dos__hh__2d == ...:
                dos__hh__2d = qqbd.dos__gridded__2D(eg__temp, x1, [-i for i in y2], hh, kx, ky, -elt, -elb, elr)
                dos__hh__2d.reverse()
            if dos__hh__3d == ...:
                base, dos__hh__3d = qqbd.dos__gridded__3D(eg__temp, effective__mass__hh[index], -valence__band__offset[index], structure__length)
                dos__hh__3d.reverse()
        base, dos__hh__merged = qqbd.dos__merge__reversed(dos__grid, dos__hh__2d, dos__hh__3d, valence__band__offset[index])
    
    if 'for__el' in input.keys():
        temp = []
        for i in range(0,len(valence__band__offset)):
            temp.append(energy__gap[i] + valence__band__offset[i])
        index = temp.index(max(temp))
        if 'dos__2d' in input.keys():
            dos__el__2d = qqbd.dos__gridded__2D(dos__grid, x1, y3, el, kx, ky, elb, elt, elr)
        if 'dos__3d' in input.keys():
            base, dos__el__3d = qqbd.dos__gridded__3D(dos__grid, effective__mass__el[index], temp[index], structure__length)
        if 'dos__merged' in input.keys():
            if dos__el__2d == ...:
                dos__el__2d = qqbd.dos__gridded__2D(dos__grid, x1, y3, el, kx, ky, elb, elt, elr)
            if dos__el__3d == ...:
                base, dos__el__3d = qqbd.dos__gridded__3D(dos__grid, effective__mass__el[index], temp[index], structure__length)
            base, dos__el__merged = qqbd.dos__merge(dos__grid, dos__el__2d, dos__el__3d, temp[index])
       
    globals()['color'] = {
        0: colors['--theme0'],
        1: colors['--theme1'],
        2: colors['--theme2'],
        3: colors['--theme3'],
        4: colors['--theme4']
        }
    # globals()['text'] = common
    multiplier = units_QBD.standardise(valence__band__offset__unit).value
    globals()['x'].append([i / multiplier for i in dos__grid])
    globals()['y'] = {
        'lh': {
            '2d': dos__lh__2d,
            '3d': dos__lh__3d,
            'merged': dos__lh__merged
            },
        'hh': {
            '2d': dos__hh__2d,
            '3d': dos__hh__3d,
            'merged': dos__hh__merged
            },
        'el': {
            '2d': dos__el__2d,
            '3d': dos__el__3d,
            'merged': dos__el__merged
            }
        }
    globals()['name'] = name

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
    code = """fig = go.Figure()"""

    if 'dos__2d' in flags:
        code += """
"""
        if 'for__lh' in flags:
            code += """
fig.add_trace(go.Scatter(
    x = x[0], 
    y = y['lh']['2d'], 
    mode = 'lines', 
    name = name[0]['lh']['2d']))"""
        if 'for__hh' in flags:
            code += """
fig.add_trace(go.Scatter(
    x = x[0], 
    y = y['hh']['2d'], 
    mode = 'lines', 
    name = name[0]['hh']['2d']))"""
        if 'for__el' in flags:
            code += """
fig.add_trace(go.Scatter(
    x = x[0], 
    y = y['el']['2d'], 
    mode = 'lines', 
    name = name[0]['el']['2d']))"""


    if 'dos__3d' in flags:
        code += """
"""
        if 'for__lh' in flags:
            code += """
fig.add_trace(go.Scatter(
    x = x[0], 
    y = y['lh']['3d'], 
    mode = 'lines', 
    name = name[0]['lh']['3d']))"""
        if 'for__hh' in flags:
            code += """
fig.add_trace(go.Scatter(
    x = x[0], 
    y = y['hh']['3d'], 
    mode = 'lines', 
    name = name[0]['hh']['3d']))"""
        if 'for__el' in flags:
            code += """
fig.add_trace(go.Scatter(
    x = x[0], 
    y = y['el']['3d'], 
    mode = 'lines', 
    name = name[0]['el']['3d']))"""




    if 'dos__merged' in flags:
        code += """
"""
        if 'for__lh' in flags:
            code += """
fig.add_trace(go.Scatter(
    x = x[0], 
    y = y['lh']['merged'], 
    mode = 'lines', 
    name = name[0]['lh']['merged']))"""
        if 'for__hh' in flags:
            code += """
fig.add_trace(go.Scatter(
    x = x[0], 
    y = y['hh']['merged'], 
    mode = 'lines', 
    name = name[0]['hh']['merged']))"""
        if 'for__el' in flags:
            code += """
fig.add_trace(go.Scatter(
    x = x[0], 
    y = y['el']['merged'], 
    mode = 'lines', 
    name = name[0]['el']['merged']))"""

    code += """

fig.update_xaxes(
    title_text = name[1],
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_yaxes(
    title_text = name[2],
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_layout(
    plot_bgcolor = color[0],
    font_color = color[4],
    paper_bgcolor = color[0])
fig.update_traces(showlegend=True)
config = dict({
    'doubleClick': 'reset+autosize'})"""

    return code
