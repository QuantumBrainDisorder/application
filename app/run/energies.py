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
xx = []
y = []
yy = []
yyy = []
name = []
unit = []
text = None
color = None

def energies(request):
    glob_ = list(globals().keys()).copy()
    input = json.load(request)
    input = json.loads(input['input'])

    plot_, error_, result_, meta_ = None, None, None, None
    globals()['fig'], globals()['config'] = None, None
    globals()['x'] = []
    globals()['y'] = []
    globals()['xx'] = []
    globals()['yy'] = []
    globals()['yyy'] = []
    globals()['name'] = []
    globals()['unit'] = []

    code_ = input['code']
    if code_ == None: code_ = ''


    colors = input['theme']

    names = list(input['sheets'].keys())




    if not 'valence__band__offset' in names:
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



    structure__unit = input['units']['structure']
    structure__materials, structure__thicknesses = meqbd.read__sheet(input['sheets']['structure'], input['units']['structure'])





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
    if 'energy__gap' in names:
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


    if float(input['wave__vector']) != 0:
        y1 = [-i for i in y1]
        y2 = [-i for i in y2]
        y1 = qqbd.adjust__energy__profile__to__wave__vector(y1, lh, float(input['wave__vector']))
        y2 = qqbd.adjust__energy__profile__to__wave__vector(y2, hh, float(input['wave__vector']))
        y1 = [-i for i in y1]
        y2 = [-i for i in y2]
        if 'energy__gap' in names:
            y3 = qqbd.adjust__energy__profile__to__wave__vector(y3, el, float(input['wave__vector']))
        





    multiplier = units_QBD.standardise(valence__band__offset__unit).value
    elt = float(input['energy__levels__limit__top']) * multiplier
    elb = float(input['energy__levels__limit__bottom']) * multiplier
    elr = float(input['energy__levels__resolution']) * multiplier



    
    y4 = []
    if 'del__holes__lh' in input.keys():
        y4 = qqbd.eigenvalues_1(x1, [-i for i in y1], lh, -elt, -elb, elr)
        # y4 = [-i for i in y4]
        # y4 = [[i / multiplier,i / multiplier] for i in y4]
        # for i in range(1,len(y4) + 1):
        #     names4.append('lh' + str(i))
    y5 = []
    if 'del__holes__hh' in input.keys():
        y5 = qqbd.eigenvalues_1(x1, [-i for i in y2], hh, -elt, -elb, elr)
        # y5 = [-i for i in y5]
        # y5 = [[i / multiplier,i / multiplier] for i in y5]
        # for i in range(1,len(y5) + 1):
        #     names5.append('hh' + str(i))
    y6 = []
    if 'del__electrons' in input.keys():
        y6 = qqbd.eigenvalues_1(x1, y3, el, elb, elt, elr)
        # y6 = [[i / multiplier,i / multiplier] for i in y6]
        # for i in range(1,len(y6) + 1):
        #     names6.append('el' + str(i))

    


    y7 = []
    if 'dwf__holes' in input.keys() and 'del__holes__lh' in input.keys():
        # enes = qqbd.eigenvalues_1(x1, [-i for i in y1], lh, elb, elt, elr)
        # for ene in enes:
        #     y7.append(qqbd.eigenfunctions_1(x1, [-i for i in y1], lh, ene))
        #     y7[-1] = [-i for i in y7[-1]]
        for ene in y4:
            y7.append(qqbd.eigenfunctions_1(x1, [-i for i in y1], lh, ene))
            y7[-1] = [-i for i in y7[-1]]

    y8 = []
    if 'dwf__holes' in input.keys() and 'del__holes__hh' in input.keys():
        # enes = qqbd.eigenvalues_1(x1, [-i for i in y2], hh, elb, elt, elr)
        # for ene in enes:
        #     y8.append(qqbd.eigenfunctions_1(x1, [-i for i in y2], hh, ene))
        #     y8[-1] = [-i for i in y8[-1]]
        for ene in y5:
            y8.append(qqbd.eigenfunctions_1(x1, [-i for i in y2], hh, ene))
            y8[-1] = [-i for i in y8[-1]]

    y9 = []
    if 'dwf__electrons' in input.keys() and 'del__electrons' in input.keys():
        # enes = qqbd.eigenvalues_1(x1, y3, el, elb, elt, elr)
        # for ene in enes:
        #     y9.append(qqbd.eigenfunctions_1(x1, y3, el, ene))
        for ene in y6:
            y9.append(qqbd.eigenfunctions_1(x1, y3, el, ene))
            


    names4 = []
    y4 = [[-i / multiplier,-i / multiplier] for i in y4]
    for i in range(1,len(y4) + 1):
        names4.append('lh' + str(i))
    names5 = []
    y5 = [[-i / multiplier,-i / multiplier] for i in y5]
    for i in range(1,len(y5) + 1):
        names5.append('hh' + str(i))
    names6 = []
    y6 = [[i / multiplier,i / multiplier] for i in y6]
    for i in range(1,len(y6) + 1):
        names6.append('el' + str(i))





    multiplier = units_QBD.standardise(valence__band__offset__unit).value
    y1 = [i / multiplier for i in y1]
    y2 = [i / multiplier for i in y2]
    if 'energy__gap' in names:
        multiplier = units_QBD.standardise(energy__gap__unit).value
        y3 = [i / multiplier for i in y3]  
    multiplier = units_QBD.standardise(structure__unit).value
    x1 = [i / multiplier for i in x1]
    x4 = [0,x1[-1]]

    for i in range(0,len(y7)):
        y7[i] = qqbd.normalization(y7[i],x1)
        y7[i] = [-j + y4[i][0] for j in y7[i]]
    for i in range(0,len(y8)):
        y8[i] = qqbd.normalization(y8[i],x1)
        y8[i] = [-j + y5[i][0] for j in y8[i]]
    for i in range(0,len(y9)):
        y9[i] = qqbd.normalization(y9[i],x1)
        y9[i] = [j + y6[i][0] for j in y9[i]]


    globals()['color'] = colors['--theme4']
    # globals()['text'] = common
    globals()['x'].append(x1)
    globals()['xx'].append(x4)
    if 'holes' in input.keys():
        globals()['y'].append(y1)
        globals()['y'].append(y2)
    if 'energy__gap' in names:
        globals()['y'].append(y3)
    if 'del__holes__lh' in input.keys():
        globals()['yy'].append(y4)
        if 'dwf__holes' in input.keys():
            globals()['yyy'].append(y7)
    if 'del__holes__hh' in input.keys():
        globals()['yy'].append(y5)
        if 'dwf__holes' in input.keys():
            globals()['yyy'].append(y8)
    if 'del__electrons' in input.keys():
        globals()['yy'].append(y6)
        if 'dwf__electrons' in input.keys():
            globals()['yyy'].append(y9)
    if 'energy__gap' in names:
        globals()['y'].append(y3)
    globals()['name'].append('structure growth direction Z (' + structure__unit +')')
    globals()['name'].append('energy (eV)')
    globals()['name'].append(names4)
    globals()['name'].append(names5)
    globals()['name'].append(names6)

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
    code = """fig = go.Figure()"""

    if 'electrons' in flags:
        if 'holes' in flags:
            code += """
fig.add_trace(go.Scatter(x=x[0], y=y[0], name='light holes band'))
fig.add_trace(go.Scatter(x=x[0], y=y[1], name='heavy holes band'))
fig.add_trace(go.Scatter(x=x[0], y=y[2], name='electrons band'))"""
        else:            
            code += """
fig.add_trace(go.Scatter(x=x[0], y=y[0], name='electrons band'))"""
    else:
        code += """
fig.add_trace(go.Scatter(x=x[0], y=y[0], name='light holes band'))
fig.add_trace(go.Scatter(x=x[0], y=y[1], name='heavy holes band'))"""



    if 'del__holes__lh' in flags:
        code += """
for i in range(0,len(yy[0])):
    fig.add_trace(go.Scatter(x=xx[0], y=yy[0][i], name=name[2][i]))"""
        if 'del__holes__hh' in flags:
            code += """
for i in range(0,len(yy[1])):
    fig.add_trace(go.Scatter(x=xx[0], y=yy[1][i], name=name[3][i]))"""
    elif 'del__holes__hh' in flags:
        code += """
for i in range(0,len(yy[0])):
    fig.add_trace(go.Scatter(x=xx[0], y=yy[0][i], name=name[3][i]))"""
    if 'del__electrons' in flags:
        code += """
for i in range(0,len(yy[-1])):
    fig.add_trace(go.Scatter(x=xx[0], y=yy[-1][i], name=name[4][i]))"""


    if 'del__holes__lh' in flags:
        if 'dwf__holes' in flags:
            code += """
for i in range(0,len(yyy[0])):
    fig.add_trace(go.Scatter(x=x[0], y=yyy[0][i], name=name[2][i] + ' wf'))"""
            if 'del__holes__hh' in flags:
                code += """
for i in range(0,len(yyy[1])):
    fig.add_trace(go.Scatter(x=x[0], y=yyy[1][i], name=name[3][i] + ' wf'))"""
    elif 'del__holes__hh' in flags:
        if 'dwf__holes' in flags:
            code += """
for i in range(0,len(yyy[0])):
    fig.add_trace(go.Scatter(x=x[0], y=yyy[0][i], name=name[3][i] + ' wf'))"""
    if 'del__electrons' in flags:
        if 'dwf__electrons' in flags:
            code += """
for i in range(0,len(yyy[-1])):
    fig.add_trace(go.Scatter(x=x[0], y=yyy[-1][i], name=name[4][i] + ' wf'))"""



    code += """
fig.update_xaxes(title_text = name[0], gridcolor = color, zerolinecolor = color)
fig.update_yaxes(title_text = name[1], gridcolor = color, zerolinecolor = color)
fig.update_layout(plot_bgcolor='rgba(0,0,0,0)', font_color=color, paper_bgcolor='rgba(0,0,0,0)')
config = dict({'scrollZoom': True})"""

    return code




