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
import plotly.express
from django.http import JsonResponse
import units_QBD
import plotly.graph_objects as go
import numpy as np

fig, config, names = None, None, None
x = []
name = []
unit = []
text = None
color = None

def distribution(request):
    glob_ = list(globals().keys()).copy()
    input = json.load(request)
    input = json.loads(input['input'])

    plot_, error_, result_, meta_ = None, None, None, None
    globals()['fig'], globals()['config'] = None, None
    globals()['x'] = []
    globals()['name'] = []
    globals()['unit'] = []

    code_ = input['code']
    if code_ == None: code_ = ''

    if len(input['axes']) == 0:
        sys.stdout = mystdout = io.StringIO()
        if code_ != '':
            try:
                exec(code_, globals())
            except Exception as e:
                error_ = str(e).replace('<', '&lt;').replace('>', '&gt;')
    else:





        colors = input['theme']
        names = list(input['axes'].keys())
        properties = {}
        for name in names:
            a, b = cqbd.read__sheet(input['axes'][name], 'list')
            properties.update({name: dict(zip(a, b))})
        common = list(properties[names[0]].keys())
        for material in common.copy():
            for name in names:
                if not material in properties[name].keys():
                    common.remove(material)
                    break

        # print('-------------------',sys.stderr)
        # print(common,sys.stderr)
        # print('-------------------',sys.stderr)
        # bowings = input['bowings']
        # if not 'pobd' in input:
        #     for name in names:
        #         if name in bowings.keys():
        #             for material in common:
        #                 if not material in bowings[name].keys():
        #                     bowings[name][material] = 0
        #                 else:
        #                     bowings[name][material] = float(bowings[name][material])
        #         else:
        #             bowings[name] = {}
        #             for material in common:
        #                 bowings[name][material] = 0
        #         print(bowings[name],sys.stderr)
        # print('-------------------',sys.stderr)

        x = {}
        # if 'ii' in input:
        #     print(input['r'],sys.stderr)
        #     if ('pobd' in input):
        #         print('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',sys.stderr)
        #     else:
        #         pass



        globals()['color'] = {
            0: colors['--theme0'],
            1: colors['--theme1'],
            2: colors['--theme2'],
            3: colors['--theme3'],
            4: colors['--theme4']
            }
        globals()['text'] = common
        for i in range(0,len(names)):
            globals()['x'].append([float(properties[names[i]][material]) for material in common])
            globals()['name'].append(names[i]  + ' (' + input['units'][names[i]] + ')')
            globals()['unit'].append(input['units'][names[i]])








        code = getcode(len(input['axes']))
   
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
















def getcode(ax):
    code = None

    if ax == 1:
        code = """fig = plotly.express.histogram(x = text, y = x[0])
fig.update_xaxes(title_text = "Material")
fig.update_yaxes(
    title_text = name[0],
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_layout(
    plot_bgcolor = color[0],
    font_color = color[4],
    paper_bgcolor = color[0])
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""
    elif ax == 2:
        code = """fig = plotly.express.scatter(x=x[0], y=x[1], text=text)
fig.update_xaxes(
    title_text = name[0],
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_yaxes(
    title_text = name[1],
    gridcolor = '#808080',
    zerolinecolor = color[4])
fig.update_traces(textposition = 'bottom right')
fig.update_layout(
    plot_bgcolor = color[0],
    font_color=color[4],
    paper_bgcolor=color[0])
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""   
    elif ax == 3:
        code = """fig = plotly.express.scatter_3d(
    x = x[0],
    y = x[1],
    z = x[2],
    text = text,
    labels = {'x': name[0], 'y': name[1], 'z': name[2]})
fig.update_traces(textposition='bottom right')
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
            showbackground = False),
        yaxis = dict(
            gridcolor = '#808080',
            showbackground = False),
        zaxis = dict(
            gridcolor = '#808080',
            showbackground = False)))
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""  
    elif ax == 4:
        code = """fig = plotly.express.scatter_3d(
    x=x[0],
    y=x[1],
    z=x[2],
    color=x[3],
    text=text,
    labels = {'x': name[0], 'y': name[1], 'z': name[2], 'color': name[3]})
fig.update_traces(textposition = 'bottom right')
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
            showbackground = False),
        yaxis = dict(
            gridcolor = '#808080',
            showbackground = False),
        zaxis = dict(
            gridcolor = '#808080',
            showbackground = False)))
config = dict({
    'scrollZoom': True,
    'doubleClick': 'reset+autosize'})"""  

    return code 






    
    # elif len(input['axes']) == 1:
    #     # property__name = list(input['axes'].keys())[0]
    #     # materials, values = cqbd.read__sheet(input['axes'][property__name], 'list')
    #     # fig = plotly.express.histogram(x = materials,y = values)
    #     # config = dict({'scrollZoom': True})
    #     # fig.update_xaxes(title_text = "Material")
    #     # fig.update_yaxes(title_text = property__name + ' (' + input['units'][property__name] + ')')
    #     # fig.update_layout(plot_bgcolor='rgba(0,0,0,0)', font_color=input['theme']['--theme4'], paper_bgcolor='rgba(0,0,0,0)')
    #     # plot_ = plotly.io.to_html(fig, config)
    #     # if 'orint' in input:
    #     #     fig.show()
    #     #     plot_ = ''
    #     # result_ = {"plot": plot_, "meta": meta_, "code": code_, "error": error_}

        
    #     property__name = list(input['axes'].keys())[0]
    #     materials, values = cqbd.read__sheet(input['axes'][property__name], 'list')
        
    #     fig = plotly.express.histogram(x = materials,y = values)
    #     config = dict({'scrollZoom': True})
    #     fig.update_xaxes(title_text = "Material")
    #     fig.update_yaxes(title_text = property__name + ' (' + input['units'][property__name] + ')')
    #     fig.update_layout(plot_bgcolor='rgba(0,0,0,0)', font_color=input['theme']['--theme4'], paper_bgcolor='rgba(0,0,0,0)')


    # elif len(input['axes']) == 2:
    #     property__name_0 = list(input['axes'].keys())[0]
    #     property__name_1 = list(input['axes'].keys())[1]
    #     materials_0, values_0 = cqbd.read__sheet(input['axes'][property__name_0], 'list')
    #     materials_1, values_1 = cqbd.read__sheet(input['axes'][property__name_1], 'list')
    #     dict_0 = dict(zip(materials_0, values_0))
    #     dict_1 = dict(zip(materials_1, values_1))
    #     materials = [i for i in materials_0 if i in materials_1]

    #     w = [float(dict_0[i]) for i in materials]
    #     x = [float(dict_1[i]) for i in materials]
    #     fig = plotly.express.scatter(x=w, y=x, text=materials)

    #     config = dict({'scrollZoom': True})
    #     fig.update_traces(textposition="bottom right")
    #     fig.update_xaxes(title_text = property__name_0 + ' (' + input['units'][property__name_0] + ')')
    #     fig.update_yaxes(title_text = property__name_1 + ' (' + input['units'][property__name_1] + ')')


    #     plot_ = plotly.io.to_html(fig, config)
    #     if 'orint' in input:
    #         fig.show()
    #         plot_ = ''
    #     result_ = {"plot": plot_, "meta": meta_, "code": code_, "error": error_}
    # elif len(input['axes']) == 3:
    #     property__name_0 = list(input['axes'].keys())[0]
    #     property__name_1 = list(input['axes'].keys())[1]
    #     property__name_2 = list(input['axes'].keys())[2]
    #     materials_0, values_0 = cqbd.read__sheet(input['axes'][property__name_0], 'list')
    #     materials_1, values_1 = cqbd.read__sheet(input['axes'][property__name_1], 'list')
    #     materials_2, values_2 = cqbd.read__sheet(input['axes'][property__name_2], 'list')
    #     dict_0 = dict(zip(materials_0, values_0))
    #     dict_1 = dict(zip(materials_1, values_1))
    #     dict_2 = dict(zip(materials_2, values_2))
    #     materials = [i for i in materials_0 if i in materials_1 and i in materials_2]

    #     w = [float(dict_0[i]) for i in materials]
    #     x = [float(dict_1[i]) for i in materials]
    #     y = [float(dict_2[i]) for i in materials]

    #     config = dict({'scrollZoom': True})
    #     ax_0 = property__name_0 + ' (' + input['units'][property__name_0] + ')'
    #     ax_1 = property__name_1 + ' (' + input['units'][property__name_1] + ')'
    #     ax_2 = property__name_2 + ' (' + input['units'][property__name_2] + ')'
    #     labels = {'x': ax_0, 'y': ax_1, 'z': ax_2}
    #     fig = plotly.express.scatter_3d(x=w, y=x, z=y, text=materials, labels=labels)


    #     plot_ = plotly.io.to_html(fig, config)
    #     if 'orint' in input:
    #         fig.show()
    #         plot_ = ''
    #     result_ = {"plot": plot_, "meta": meta_, "error": error_}
    # elif len(input['axes']) == 4:
    #     property__name_0 = list(input['axes'].keys())[0]
    #     property__name_1 = list(input['axes'].keys())[1]
    #     property__name_2 = list(input['axes'].keys())[2]
    #     property__name_3 = list(input['axes'].keys())[3]
    #     materials_0, values_0 = cqbd.read__sheet(input['axes'][property__name_0], 'list')
    #     materials_1, values_1 = cqbd.read__sheet(input['axes'][property__name_1], 'list')
    #     materials_2, values_2 = cqbd.read__sheet(input['axes'][property__name_2], 'list')
    #     materials_3, values_3 = cqbd.read__sheet(input['axes'][property__name_3], 'list')
    #     dict_0 = dict(zip(materials_0, values_0))
    #     dict_1 = dict(zip(materials_1, values_1))
    #     dict_2 = dict(zip(materials_2, values_2))
    #     dict_3 = dict(zip(materials_3, values_3))
    #     materials = [i for i in materials_0 if i in materials_1 and i in materials_2 and i in materials_3]

    #     w = [float(dict_0[i]) for i in materials]
    #     x = [float(dict_1[i]) for i in materials]
    #     y = [float(dict_2[i]) for i in materials]
    #     z = [float(dict_3[i]) for i in materials]
    #     ax_0 = property__name_0 + ' (' + input['units'][property__name_0] + ')'
    #     ax_1 = property__name_1 + ' (' + input['units'][property__name_1] + ')'
    #     ax_2 = property__name_2 + ' (' + input['units'][property__name_2] + ')'
    #     ax_3 = property__name_3 + ' (' + input['units'][property__name_3] + ')'
    #     labels = {'x': ax_0, 'y': ax_1, 'z': ax_2, 'color': ax_3}
    #     fig = plotly.express.scatter_3d(x=w, y=x, z=y, color=z, text=materials, labels=labels)
    #     config = dict({'scrollZoom': True})
    #     fig.update_traces(textposition="bottom right")


    #     if 'orint' in input:
    #         fig.show()
    #         plot_ = ''
    #     result_ = {"plot": plot_, "meta": meta_, "code": code_, "error": error_}