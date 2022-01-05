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
# from quantum_QBD.tools import adjust__energy__profile__to__2D__wave__vector__grid
import units_QBD
import plotly.graph_objects as go
import numpy as np

fig, config, names = None, None, None
x = []
y = []
z = []
name = []
unit = []
text = None
color = None

def energy__paraboloids(request):
    glob_ = list(globals().keys()).copy()
    input = json.load(request)
    input = json.loads(input['input'])

    plot_, error_, result_, meta_ = None, None, None, None
    globals()['fig'], globals()['config'] = None, None
    globals()['x'] = []
    globals()['y'] = []
    globals()['z'] = []
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

    effective__mass__lh__dict = input['sheets']['effective__mass']['lh']
    effective__mass__lh__dict = {key: float(value) for (key, value) in effective__mass__lh__dict.items()}
    effective__mass__lh__bowings = ...
    try:
        effective__mass__lh__bowings = input['sheets']['bowings']['effective__mass']['lh']
    except Exception:
        effective__mass__lh__bowings = {}
    effective__mass__lh = []
    for material in structure__materials:   
        effective__mass__lh.append(meqbd.interpolation__exception(material, effective__mass__lh__dict, effective__mass__lh__bowings))
    multiplier = units_QBD.standardise(effective__mass__unit).value
    effective__mass__lh = [val * multiplier for val in effective__mass__lh]

    effective__mass__hh__dict = ...
    effective__mass__hh__dict = input['sheets']['effective__mass']['hh']
    effective__mass__hh__dict = {key: float(value) for (key, value) in effective__mass__hh__dict.items()}
    effective__mass__hh__bowings = ...
    try:
        effective__mass__hh__bowings = input['sheets']['bowings']['effective__mass']['hh']
    except Exception:
        effective__mass__hh__bowings = {}
    effective__mass__hh = []
    for material in structure__materials: 
        effective__mass__hh.append(meqbd.interpolation__exception(material, effective__mass__hh__dict, effective__mass__hh__bowings))
    multiplier = units_QBD.standardise(effective__mass__unit).value
    effective__mass__hh = [val * multiplier for val in effective__mass__hh]




    alpha__varshni__dict = cqbd.read__sheet(input['sheets']['alpha__varshni'], 'dict')
    beta__varshni__dict = cqbd.read__sheet(input['sheets']['beta__varshni'], 'dict')
    T = float(input['temperature'])

    energy__gap__dict = ...
    energy__gap__unit = ...
    energy__gap__bowings = ...
    energy__gap = []
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


    
    effective__mass__el__bowings = ...
    effective__mass__el__dict = input['sheets']['effective__mass']['el']
    effective__mass__el__dict = {key: float(value) for (key, value) in effective__mass__el__dict.items()}
    effective__mass__el = []
    y3, el = ..., ...
    try:
        effective__mass__el__bowings = input['sheets']['bowings']['effective__mass']['el']
    except Exception:
        effective__mass__el__bowings = {}
    for material in structure__materials: 
        effective__mass__el.append(meqbd.interpolation__exception(material, effective__mass__el__dict, effective__mass__el__bowings))
    multiplier = units_QBD.standardise(effective__mass__unit).value
    effective__mass__el = [val * multiplier for val in effective__mass__el]

    xx, lh = meqbd.profile__gridded(structure__thicknesses, effective__mass__lh, float(input['space__resolution']))
    xx, hh = meqbd.profile__gridded(structure__thicknesses, effective__mass__hh, float(input['space__resolution']))
    xx, el = meqbd.profile__gridded(structure__thicknesses, effective__mass__el, float(input['space__resolution']))
    x1, y1 = meqbd.profile__gridded(structure__thicknesses, valence__band__offset, float(input['space__resolution']))
    x1, y2 = meqbd.profile__gridded(structure__thicknesses, energy__gap, float(input['space__resolution']))
    y2 = [y1[i] + y2[i] for i in range(0,len(y1))]
        
    for i in range(0,len(y1)):
        y1[i] += ep[i]
        y2[i] += ep[i]

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

    profiles__lh = qqbd.adjust__energy__profile__to__2D__wave__vector__grid([-i for i in y1], lh, kx, ky)
    profiles__hh = qqbd.adjust__energy__profile__to__2D__wave__vector__grid([-i for i in y1], hh, kx, ky)
    profiles__el = qqbd.adjust__energy__profile__to__2D__wave__vector__grid(y2, el, kx, ky)  #(energy__profile__fence, effective__mass__profile__fence, wave__vector__grid__A, wave__vector__grid__B):
 
    multiplier = units_QBD.standardise(valence__band__offset__unit).value
    # elb = float(input['energy__levels__limit__bottom']) * multiplier
    # elr = float(input['energy__levels__resolution']) * multiplier
    # elt = float(input['energy__levels__limit__top']) * multiplier
    el__el_t = float(input['energy__levels__limit__top']) * multiplier
    el__lh_b = -float(input['energy__levels__limit__top']) * multiplier
    el__hh_b = -float(input['energy__levels__limit__top']) * multiplier
    el__el_b = float(input['energy__levels__limit__bottom']) * multiplier
    el__lh_t = -float(input['energy__levels__limit__bottom']) * multiplier
    el__hh_t = -float(input['energy__levels__limit__bottom']) * multiplier
    elr = float(input['energy__levels__resolution']) * multiplier
    # if 'barriers' in input:
    #     continuum_el = ...
    #     continuum_ho = ...

    #     if y1[0] <= y1[-1]: continuum_ho = -y1[-1]
    #     else:               continuum_ho = -y1[0]
    #     if y2[0] <= y2[-1]: continuum_el = y2[0]
    #     else:               continuum_el = y2[-1]

    #     if el__ho_t >= continuum_ho:    
    #         el__ho_t = continuum_ho
    #         if el__ho_b > el__ho_t:
    #             el__ho_b = el__ho_t
    #     if el__el_t >= continuum_el:    
    #         el__el_t = continuum_el
    #         if el__el_b > el__el_t:
    #             el__el_b = el__el_t
                    

    y4 = []
    if 'barriers' in input.keys():
        # print('aaaaa',sys.stderr)
        for profiles in profiles__lh:
            y4.append([])
            for profile in profiles:
                el__b = el__lh_b
                el__t = el__lh_t
                continuum = ...
                if profile[0] <= profile[-1]:  continuum = profile[0]
                else:                          continuum = profile[-1]

                if el__t >= continuum:    
                    el__t = continuum
                    if el__b > el__t:
                        el__b = el__t
                            
                y4[-1].append(qqbd.eigenvalues_1(x1, profile, lh, el__b, el__t, elr))
    else:   
        for profiles in profiles__lh:
            y4.append([])
            for profile in profiles:
                y4[-1].append(qqbd.eigenvalues_1(x1, profile, lh, el__lh_b, el__lh_t, elr))
                # y4[-1].append(qqbd.eigenvalues_1(x1, profile, lh, -elt, -elb, elr))
    for i in range(0,len(y4)):
        for j in range(0,len(y4[i])):
            y4[i][j] = [-k / multiplier for k in y4[i][j]]




    y5 = []
    if 'barriers' in input.keys():
        for profiles in profiles__hh:
            y5.append([])
            for profile in profiles:
                el__b = el__hh_b
                el__t = el__hh_t
                continuum = ...
                if profile[0] <= profile[-1]:  continuum = profile[0]
                else:                          continuum = profile[-1]

                if el__t >= continuum:    
                    el__t = continuum
                    if el__b > el__t:
                        el__b = el__t
                            
                y5[-1].append(qqbd.eigenvalues_1(x1, profile, hh, el__b, el__t, elr))
                # y5[-1].append(qqbd.eigenvalues_1(x1, profile, hh, -elt, -elb, elr))
    else:
        for profiles in profiles__hh:
            y5.append([])
            for profile in profiles:
                y5[-1].append(qqbd.eigenvalues_1(x1, profile, hh, el__hh_b, el__hh_t, elr))
                # y5[-1].append(qqbd.eigenvalues_1(x1, profile, hh, -elt, -elb, elr))
    for i in range(0,len(y5)):
        for j in range(0,len(y5[i])):
            y5[i][j] = [-k / multiplier for k in y5[i][j]]

    y6 = []
    if 'barriers' in input.keys():
        for profiles in profiles__el:
            y6.append([])
            for profile in profiles:
                el__b = el__el_b
                el__t = el__el_t
                continuum = ...
                if profile[0] <= profile[-1]:  continuum = profile[0]
                else:                          continuum = profile[-1]

                if el__t >= continuum:    
                    el__t = continuum
                    if el__b > el__t:
                        el__b = el__t
                            
                y6[-1].append(qqbd.eigenvalues_1(x1, profile, el, el__b, el__t, elr))
                # y6[-1].append(qqbd.eigenvalues_1(x1, profile, el, elb, elt, elr))
    else:
        for profiles in profiles__el:
            y6.append([])
            for profile in profiles:
                y6[-1].append(qqbd.eigenvalues_1(x1, profile, el, el__el_b, el__el_t, elr))
                # y6[-1].append(qqbd.eigenvalues_1(x1, profile, el, elb, elt, elr))
    for i in range(0,len(y6)):
        for j in range(0,len(y6[i])):
            y6[i][j] = [k / multiplier for k in y6[i][j]]

    paraboloids__lh = []
    paraboloids__lh_ = []
    paraboloids__lh__ = []
    y4__max = max([len(i) for i in y4])
    for level in range(0,y4__max):
        paraboloids__lh.append([])
        paraboloids__lh_.append([])
        paraboloids__lh__.append([])
        for i in range(0,len(y4)):
            for j in range(0,len(y4[i])):
                try:
                    paraboloids__lh[-1].append(y4[i][j][level])
                    paraboloids__lh_[-1].append(kx[i])
                    paraboloids__lh__[-1].append(ky[j])
                except:
                    pass
    paraboloids__lh = list(filter(lambda x: x != [], paraboloids__lh))


    paraboloids__hh = []
    paraboloids__hh_ = []
    paraboloids__hh__ = []
    y5__max = max([len(i) for i in y5])
    for level in range(0,y5__max):
        paraboloids__hh.append([])
        paraboloids__hh_.append([])
        paraboloids__hh__.append([])
        for i in range(0,len(y5)):
            for j in range(0,len(y5[i])):
                try:
                    paraboloids__hh[-1].append(y5[i][j][level])
                    paraboloids__hh_[-1].append(kx[i])
                    paraboloids__hh__[-1].append(ky[j])
                except:
                    pass
    paraboloids__hh = list(filter(lambda x: x != [], paraboloids__hh))


    paraboloids__el = []
    paraboloids__el_ = []
    paraboloids__el__ = []
    y6__max = max([len(i) for i in y6])
    for level in range(0,y6__max):
        paraboloids__el.append([])
        paraboloids__el_.append([])
        paraboloids__el__.append([])
        for i in range(0,len(y6)):
            for j in range(0,len(y6[i])):
                try:
                    paraboloids__el[-1].append(y6[i][j][level])
                    paraboloids__el_[-1].append(kx[i])
                    paraboloids__el__[-1].append(ky[j])
                except:
                    pass
    paraboloids__el = list(filter(lambda x: x != [], paraboloids__el))


    globals()['color'] = {
        0: colors['--theme0'],
        1: colors['--theme1'],
        2: colors['--theme2'],
        3: colors['--theme3'],
        4: colors['--theme4']
        }
    # globals()['text'] = common
    globals()['x'].append(paraboloids__lh_)
    globals()['x'].append(paraboloids__hh_)
    globals()['x'].append(paraboloids__el_)
    globals()['y'].append(paraboloids__lh__)
    globals()['y'].append(paraboloids__hh__)
    globals()['y'].append(paraboloids__el__)
    globals()['z'].append(paraboloids__lh)
    globals()['z'].append(paraboloids__hh)
    globals()['z'].append(paraboloids__el)

    globals()['name'].append('X-axis wave vector (1/m)')
    globals()['name'].append('Y-axis wave vector (1/m)')
    globals()['name'].append('energy (eV)')

    code = """fig = go.Figure()

for level in range(0, len(z[0])):
    fig.add_trace(go.Scatter3d(
        x = x[0][level],
        y = y[0][level],
        z = z[0][level],
        mode = 'markers',
        name = 'for lh' + str(level + 1)))
for level in range(0, len(z[1])):
    fig.add_trace(go.Scatter3d(
        x = x[1][level],
        y = y[1][level],
        z = z[1][level],
        mode = 'markers',
        name = 'for hh' + str(level + 1)))
for level in range(0, len(z[2])):
    fig.add_trace(go.Scatter3d(
        x = x[2][level],
        y = y[2][level],
        z = z[2][level],
        mode = 'markers',
        name='for el' + str(level + 1)))

# for level in range(0, len(z[0])):
#    fig.add_trace(go.Mesh3d(
#     x = x[0][level],
#     y = y[0][level],
#     z = z[0][level],
#     opacity = 0.7,
#     name = 'for lh' + str(level + 1)))
# for level in range(0, len(z[1])):
#    fig.add_trace(go.Mesh3d(
#     x = x[1][level],
#     y = y[1][level],
#     z = z[1][level],
#     opacity = 0.7,
#     name = 'for hh' + str(level + 1)))
# for level in range(0, len(z[2])):
#     fig.add_trace(go.Mesh3d(
#         x = x[2][level],
#         y = y[2][level],
#         z = z[2][level], 
#         opacity = 0.7, 
#         name = 'for el' + str(level + 1)))

fig.update_traces(showlegend=True)
fig.update_layout(
    plot_bgcolor = color[0],
    font_color = color[4],
    paper_bgcolor = color[0],
    margin_t = 0,
    margin_b = 0,
    margin_l = 0,
    margin_r = 0,
    scene = dict(
        xaxis = dict(
            gridcolor = '#808080',
            showbackground = False,
            title = 'X-axis wave vector (1/m)'),
        yaxis = dict(
            gridcolor = '#808080',
            showbackground = False,
            title = 'Y-axis wave vector (1/m)'),
        zaxis = dict(
            gridcolor = '#808080',
            showbackground = False,
            title = 'energy (eV)')))
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""







    meta_ = code
    sys.stdout = mystdout = io.StringIO()
    try:
        exec(code + '\n' + code_, globals())
    except Exception as e:
        error_ = str(e).replace('<', '&lt;').replace('>', '&gt;')
    print(error_, sys.stderr)

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










