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
import plotly.subplots as ps
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

def dd(request):
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

    multiplier = units_QBD.standardise(input['units']['space__resolution']).value
    input['space__resolution'] = float(input['space__resolution']) * multiplier
    
    structure__unit = input['units']['structure']
    structure__materials, structure__thicknesses = meqbd.read__sheet(input['sheets']['structure'], input['units']['structure'])
    structure__length = 0
    for i in structure__thicknesses:    structure__length += i

    ep__0 = float(input['ep__0']) * units_QBD.standardise(input['ep__unit']).value
    ep__L = float(input['ep__L']) * units_QBD.standardise(input['ep__unit']).value
    ep = meqbd.external__potential__profile__gridded(ep__0, ep__L, structure__thicknesses, input['space__resolution'])
    print(ep,sys.stderr)


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









    carriers__mobility__unit = input['units']['carriers__mobility']

    carriers__mobility__lh__dict = ...
    carriers__mobility__lh__bowings = ...
    carriers__mobility__lh = []

    carriers__mobility__hh__dict = ...
    carriers__mobility__hh__bowings = ...
    carriers__mobility__hh = []

    carriers__mobility__el__dict = ...
    carriers__mobility__el__bowings = ...
    carriers__mobility__el = []

    carriers__mobility__lh__dict = input['sheets']['carriers__mobility']['lh']
    carriers__mobility__lh__dict = {key: float(value) for (key, value) in carriers__mobility__lh__dict.items()}
    carriers__mobility__lh__bowings = ...
    try:
        carriers__mobility__lh__bowings = input['sheets']['bowings']['carriers__mobility']['lh']
    except Exception:
        carriers__mobility__lh__bowings = {}
    for material in structure__materials:   
        carriers__mobility__lh.append(meqbd.interpolation__exception(material, carriers__mobility__lh__dict, carriers__mobility__lh__bowings))
    multiplier = units_QBD.standardise(carriers__mobility__unit).value
    print(carriers__mobility__lh,sys.stderr)
    carriers__mobility__lh = [val * multiplier for val in carriers__mobility__lh]

    carriers__mobility__hh__dict = input['sheets']['carriers__mobility']['hh']
    carriers__mobility__hh__dict = {key: float(value) for (key, value) in carriers__mobility__hh__dict.items()}
    try:
        carriers__mobility__hh__bowings = input['sheets']['bowings']['carriers__mobility']['hh']
    except Exception:
        carriers__mobility__hh__bowings = {}
    for material in structure__materials: 
        carriers__mobility__hh.append(meqbd.interpolation__exception(material, carriers__mobility__hh__dict, carriers__mobility__hh__bowings))
    multiplier = units_QBD.standardise(carriers__mobility__unit).value
    carriers__mobility__hh = [val * multiplier for val in carriers__mobility__hh]

    carriers__mobility__el__dict = input['sheets']['carriers__mobility']['el']
    carriers__mobility__el__dict = {key: float(value) for (key, value) in carriers__mobility__el__dict.items()}
    try:
        carriers__mobility__el__bowings = input['sheets']['bowings']['carriers__mobility']['el']
    except Exception:
        carriers__mobility__el__bowings = {}
    for material in structure__materials: 
        carriers__mobility__el.append(meqbd.interpolation__exception(material, carriers__mobility__el__dict, carriers__mobility__el__bowings))
    multiplier = units_QBD.standardise(carriers__mobility__unit).value
    carriers__mobility__el = [val * multiplier for val in carriers__mobility__el]


    cm_lh = ...
    cm_hh = ...
    cm_el = ...
    xx = ...

    xx, cm_lh = meqbd.profile__gridded(structure__thicknesses, carriers__mobility__lh, float(input['space__resolution']))
    xx, cm_hh = meqbd.profile__gridded(structure__thicknesses, carriers__mobility__hh, float(input['space__resolution']))
    xx, cm_el = meqbd.profile__gridded(structure__thicknesses, carriers__mobility__el, float(input['space__resolution']))






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

    for i in range(0,len(y1)):
        y1[i] += ep[i]
        y2[i] += ep[i]
        y3[i] += ep[i]



    multiplier = units_QBD.standardise(valence__band__offset__unit).value
    # elt = float(input['energy__levels__limit__top']) * multiplier
    # elb = float(input['energy__levels__limit__bottom']) * multiplier
    # elr = float(input['energy__levels__resolution']) * multiplier
    el__el_t = float(input['energy__levels__limit__top']) * multiplier
    el__lh_b = -float(input['energy__levels__limit__top']) * multiplier
    el__hh_b = -float(input['energy__levels__limit__top']) * multiplier
    el__el_b = float(input['energy__levels__limit__bottom']) * multiplier
    el__lh_t = -float(input['energy__levels__limit__bottom']) * multiplier
    el__hh_t = -float(input['energy__levels__limit__bottom']) * multiplier
    elr = float(input['energy__levels__resolution']) * multiplier

    index_el = ...
    index_lh = ...
    index_hh = ...

    a1 = ...
    a2 = ...
    a3 = ...

    y1__barriers = ...
    y2__barriers = ...
    y3__barriers = ...
    if 'barriers' in input:
        if y1[0] <= y1[-1]: index_lh = -1
        else:               index_lh = 0
        a1 = (y1[-1] - y1[0]) / x1[-1]
        y1__barriers = [-(a1 * i + y1[0]) for i in x1]

        if y2[0] <= y2[-1]: index_hh = -1
        else:               index_hh = 0
        a2 = (y2[-1] - y2[0]) / x1[-1]
        y2__barriers = [-(a2 * i + y2[0]) for i in x1]
        
        if y3[0] <= y3[-1]: index_el = 0
        else:               index_el = -1
        a3 = (y3[-1] - y3[0]) / x1[-1]
        y3__barriers = [a3 * i + y3[0] for i in x1]


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

    # F_v = float(input['qfl__ho']) * multiplier
    # F_c = float(input['qfl__el']) * multiplier

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



    ldos__lh__2d = qqbd.ldos__gridded__2D_(eg__temp, x1, [-i for i in y1], lh, kx, ky, el__lh_b, el__lh_t, elr)
    ldos__hh__2d = qqbd.ldos__gridded__2D_(eg__temp, x1, [-i for i in y2], hh, kx, ky, el__hh_b, el__hh_t, elr)
    # ldos__lh__2d = qqbd.ldos__gridded__2D(eg__temp, x1, [-i for i in y1], lh, kx, ky, -elt, -elb, elr)
    # ldos__hh__2d = qqbd.ldos__gridded__2D(eg__temp, x1, [-i for i in y2], hh, kx, ky, -elt, -elb, elr)
    for i in range(0, len(ldos__lh__2d)):
        ldos__lh__2d[i].reverse()
        ldos__hh__2d[i].reverse()
        ldos__ho__2d.append([])
        for j in range(0,len(ldos__lh__2d[i])):
            ldos__ho__2d[-1].append(ldos__lh__2d[i][j] + ldos__hh__2d[i][j])

    ldos__lh__3d = qqbd.ldos__gridded__3D_(eg__temp, x1, y1__barriers, effective__mass__lh[index_lh], -y1[index_lh])
    ldos__hh__3d = qqbd.ldos__gridded__3D_(eg__temp, x1, y2__barriers, effective__mass__hh[index_hh], -y2[index_hh])
    # ldos__lh__3d = qqbd.ldos__gridded__3D(eg__temp, x1, effective__mass__lh[index], -valence__band__offset[index])
    # ldos__hh__3d = qqbd.ldos__gridded__3D(eg__temp, x1, effective__mass__hh[index], -valence__band__offset[index])
    for i in range(0, len(ldos__lh__3d)):
        ldos__lh__3d[i].reverse()
        ldos__hh__3d[i].reverse()
        ldos__ho__3d.append([])
        for j in range(0,len(ldos__lh__3d[i])):
            ldos__ho__3d[-1].append(ldos__lh__3d[i][j] + ldos__hh__3d[i][j])

    ldos__lh__merged = qqbd.ldos__merge__reversed_(x1, ldos__grid, ldos__lh__2d, ldos__lh__3d)
    ldos__hh__merged = qqbd.ldos__merge__reversed_(x1, ldos__grid, ldos__hh__2d, ldos__hh__3d)
    # ldos__lh__merged = qqbd.ldos__merge__reversed(x1, ldos__grid, ldos__lh__2d, ldos__lh__3d, valence__band__offset[index])
    # ldos__hh__merged = qqbd.ldos__merge__reversed(x1, ldos__grid, ldos__hh__2d, ldos__hh__3d, valence__band__offset[index])
    for i in range(0, len(ldos__lh__merged)):
        ldos__lh__merged[i].reverse()
        ldos__hh__merged[i].reverse()
        ldos__ho__merged.append([])
        for j in range(0,len(ldos__lh__merged[i])):
            ldos__ho__merged[-1].append(ldos__lh__merged[i][j] + ldos__hh__merged[i][j])


    temp = []
    for i in range(0,len(valence__band__offset)):
        temp.append(energy__gap[i] + valence__band__offset[i])
    index = temp.index(max(temp))
    ldos__el__2d = qqbd.ldos__gridded__2D_(ldos__grid, x1, y3, el, kx, ky, el__el_b, el__el_t, elr)
    ldos__el__3d = qqbd.ldos__gridded__3D_(ldos__grid, x1, y3__barriers, effective__mass__el[index_el],  y3[index_el])
    ldos__el__merged = qqbd.ldos__merge_(x1, ldos__grid, ldos__el__2d, ldos__el__3d)
    # ldos__el__2d = qqbd.ldos__gridded__2D(ldos__grid, x1, y3, el, kx, ky, elb, elt, elr)
    # ldos__el__3d = qqbd.ldos__gridded__3D(ldos__grid, x1, effective__mass__el[index],  temp[index])
    # ldos__el__merged = qqbd.ldos__merge(x1, ldos__grid, ldos__el__2d, ldos__el__3d, temp[index])
       


    dos__ho__2d = []
    dos__ho__3d = []
    dos__ho__merged = []
    dos__el__2d = []
    dos__el__3d = []
    dos__el__merged = []
    dx = x1[1] - x1[0]

    for i in range(0,len(ldos__grid)):
        dos__ho__2d.append(0)
        dos__el__2d.append(0)
        for j in range(0,len(x1)):
            dos__ho__2d[-1] += dx * ldos__ho__2d[j][i]
            dos__el__2d[-1] += dx * ldos__el__2d[j][i]
    for i in range(0,len(ldos__grid)):
        dos__ho__3d.append(0)
        dos__el__3d.append(0)
        for j in range(0,len(x1)):
            dos__ho__3d[-1] += dx * ldos__ho__3d[j][i]
            dos__el__3d[-1] += dx * ldos__el__3d[j][i]
    for i in range(0,len(ldos__grid)):
        dos__ho__merged.append(0)
        dos__el__merged.append(0)
        for j in range(0,len(x1)):
            dos__ho__merged[-1] += dx * ldos__ho__merged[j][i]
            dos__el__merged[-1] += dx * ldos__el__merged[j][i]

    F_v__merged, F_i__merged, F_c__merged = ..., ..., ...
    if input['fi__method'] == 'B':
        F_v__merged, F_i__merged, F_c__merged = meqbd.F__calibration(
            T, 
            max(ep) - min(ep), 
            min(y1), 
            max(y3), 
            ldos__grid, 
            dos__ho__merged, 
            dos__el__merged,
            float(input['fi__res']) * multiplier)
    else:
        F_v__merged, F_i__merged, F_c__merged = meqbd.F__calibration_2(
            T, 
            max(ep) - min(ep), 
            min(y1), 
            max(y3), 
            ldos__grid, 
            dos__ho__merged, 
            dos__el__merged,
            float(input['fi__res']) * multiplier)



    cc__lh__merged = meqbd.p(ldos__grid, ldos__lh__merged, F_v__merged, T)
    cc__hh__merged = meqbd.p(ldos__grid, ldos__hh__merged, F_v__merged, T)
    # cc__ho__2d = meqbd.p(ldos__grid, ldos__ho__2d, F_v, T)
    # cc__ho__3d = meqbd.p(ldos__grid, ldos__ho__3d, F_v, T)
    cc__ho__merged = meqbd.p(ldos__grid, ldos__ho__merged, F_v__merged, T)
    # cc__el__2d = meqbd.n(ldos__grid, ldos__el__2d, F_c, T)
    # cc__el__3d = meqbd.n(ldos__grid, ldos__el__3d, F_c, T)
    cc__el__merged = meqbd.n(ldos__grid, ldos__el__merged, F_c__merged, T)

    for i in range(0,len(cc__ho__merged)):
        cc__di__merged.append(cc__ho__merged[i] - cc__el__merged[i])



    h = []
    for i in range(0,len(cc__di__merged)):
        h.append(-cc__di__merged[i] * units_QBD.E[0] / units_QBD.EPSILON_0[0])

    phi__0 = float(input['phi__0'])
    phi__L = float(input['phi__L'])

    phi = mqbd.poisson__1D(x1[1] - x1[0], phi__0, phi__L, rp, h)
    



    J_dr_el = []
    J_dr_lh = []
    J_dr_hh = []
    J_dr_ho = []

    J_di_el = []
    J_di_lh = []
    J_di_hh = []
    J_di_ho = []

    dx = x1[1] - x1[0]
    for i in range(0,len(x1)-1):
        J_dr_el.append(units_QBD.E[0]  * cc__el__merged[i] * cm_el[i] * (phi[i+1]-phi[i]) / dx)
        J_dr_lh.append(-units_QBD.E[0] * cc__lh__merged[i] * cm_lh[i] * (phi[i+1]-phi[i]) / dx)
        J_dr_hh.append(-units_QBD.E[0] * cc__hh__merged[i] * cm_hh[i] * (phi[i+1]-phi[i]) / dx)
        J_dr_ho.append(-units_QBD.E[0] * cc__ho__merged[i] * cm_hh[i] * (phi[i+1]-phi[i]) / dx)
    
    J_dr_el.append(J_dr_el[-1])
    J_dr_lh.append(J_dr_lh[-1])
    J_dr_hh.append(J_dr_hh[-1])
    J_dr_ho.append(J_dr_hh[-1])

    for i in range(0,len(x1)-1):
        J_di_el.append(cm_el[i] * units_QBD.K_B[0] * T * (cc__el__merged[i+1]-cc__el__merged[i]) / dx)
        J_di_lh.append(cm_lh[i] * units_QBD.K_B[0] * T * (cc__lh__merged[i+1]-cc__lh__merged[i]) / dx)
        J_di_hh.append(cm_hh[i] * units_QBD.K_B[0] * T * (cc__hh__merged[i+1]-cc__hh__merged[i]) / dx)
        J_di_ho.append(cm_hh[i] * units_QBD.K_B[0] * T * (cc__ho__merged[i+1]-cc__ho__merged[i]) / dx)
    
    J_di_el.append(J_di_el[-1])
    J_di_lh.append(J_di_lh[-1])
    J_di_hh.append(J_di_hh[-1])
    J_di_ho.append(J_di_hh[-1])

    # J_dr_ho = [J_dr_hh[i] + J_dr_lh[i] for i in range(0,len(x1))]
    # J_di_ho = [J_di_hh[i] + J_di_lh[i] for i in range(0,len(x1))]


    J_dr = [J_dr_ho[i] + J_dr_el[i] for i in range(0,len(x1))]
    J_di = [J_di_ho[i] + J_di_el[i] for i in range(0,len(x1))]
    
    J = [J_dr[i] + J_di[i] for i in range(0,len(x1))]


    ep = [i / units_QBD.E[0] for i in ep]
    ip = [phi[i] - ep[i] for i in range(0,len(phi))]


    globals()['color'] = {
        0: colors['--theme0'],
        1: colors['--theme1'],
        2: colors['--theme2'],
        3: colors['--theme3'],
        4: colors['--theme4']
        }
    multiplier = units_QBD.standardise(structure__unit).value
    globals()['x'] = [i / multiplier for i in x1]
    globals()['y'] = {
        'J_dr_el': J_dr_el,
        'J_dr_lh': J_dr_lh,
        'J_dr_hh': J_dr_hh,
        'J_di_el': J_di_el,
        'J_di_lh': J_di_lh,
        'J_di_hh': J_di_hh,
        'J_dr_ho': J_dr_ho,
        'J_di_ho': J_di_ho,
        'J_dr': J_dr,
        'J_di': J_di,
        'J': J,
        'int.': ip,
        'ext.': ep,
        'tot.': phi
    }
    globals()['name'] = {
        'x': 'structure growth direction Z (' + structure__unit + ')',
        'y1': 'current density (A+1m-2)',
        'y2': 'electric potential (V)',
        'J_dr_el': 'electron driff',
        'J_dr_lh': 'light holes driff',
        'J_dr_hh': 'heavy holes driff',
        'J_di_el': 'electrons diffusion',
        'J_di_lh': 'light holes diffusion',
        'J_di_hh': 'heavy holes diffusion',
        'J_dr_ho': 'total holes driff',
        'J_di_ho': 'total holes diffusion',
        'J_dr': 'total driff',
        'J_di': 'total diffusion',
        'J': 'total current density',
        'ext.': 'external',
        'int.': 'internal',
        'tot.': 'total'
    }


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
    if 'add__potential' in flags:   return get__code_v3()
    else:                           return get__code_v4()


def get__code_v3():
    return """fig = ps.make_subplots(
    rows = 2, cols = 1,
    shared_xaxes = True,
    vertical_spacing = 0.02)


fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_dr_lh'],
        mode = 'lines', 
        name = name['J_dr_lh']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_dr_hh'],
        mode = 'lines', 
        name = name['J_dr_hh']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_dr_el'],
        mode = 'lines', 
        name = name['J_dr_el']),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di_lh'],
        mode = 'lines', 
        name = name['J_di_lh']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di_hh'],
        mode = 'lines', 
        name = name['J_di_hh']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di_el'],
        mode = 'lines', 
        name = name['J_di_el']),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_dr_ho'],
        mode = 'lines', 
        name = name['J_dr_ho']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di_ho'],
        mode = 'lines', 
        name = name['J_di_ho']),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_dr'],
        mode = 'lines', 
        name = name['J_dr']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di'],
        mode = 'lines', 
        name = name['J_di']),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J'],
        mode = 'lines', 
        name = name['J']),
    row=1, 
    col=1)


fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['int.'],
        mode = 'lines', 
        name = name['int.']),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['ext.'],
        mode = 'lines', 
        name = name['ext.']),
    row=2, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['tot.'],
        mode = 'lines', 
        name = name['tot.']),
    row=2, 
    col=1)

fig.update_xaxes(
    title_text = name['x'],
    gridcolor = '#808080',
    zerolinecolor = color[4],
    row = 2)
fig.update_yaxes(
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_yaxes(
    title_text = name['y1'], 
    row = 1, 
    col = 1)
fig.update_yaxes(
    title_text = name['y2'],
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
        y = y['J_dr_lh'],
        mode = 'lines', 
        name = name['J_dr_lh']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_dr_hh'],
        mode = 'lines', 
        name = name['J_dr_hh']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_dr_el'],
        mode = 'lines', 
        name = name['J_dr_el']),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di_lh'],
        mode = 'lines', 
        name = name['J_di_lh']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di_hh'],
        mode = 'lines', 
        name = name['J_di_hh']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di_el'],
        mode = 'lines', 
        name = name['J_di_el']),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_dr_ho'],
        mode = 'lines', 
        name = name['J_dr_ho']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di_ho'],
        mode = 'lines', 
        name = name['J_di_ho']),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_dr'],
        mode = 'lines', 
        name = name['J_dr']),
    row=1, 
    col=1)
fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J_di'],
        mode = 'lines', 
        name = name['J_di']),
    row=1, 
    col=1)

fig.add_trace(
    go.Scatter(
        x = x, 
        y = y['J'],
        mode = 'lines', 
        name = name['J']),
    row=1, 
    col=1)

fig.update_xaxes(
    title_text = name['x'],
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_yaxes(
    gridcolor = '#808080',
    zerolinecolor = color[4],
    title_text = name['y1'],
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