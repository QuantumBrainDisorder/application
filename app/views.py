# from django.shortcuts import render
# import sys

# import matplotlib.pyplot as plt
# import base64
# from io import BytesIO


# def get_graph():
#     buffer = BytesIO()
#     plt.savefig(buffer, format='png')
#     buffer.seek(0)
#     image_png = buffer.getvalue()
#     graph = base64.b64encode(image_png)
#     graph = graph.decode('utf-8')
#     buffer.close()
#     return graph
# def get_plot(x,y,codereadata):
#     plt.switch_backend('AGG')
#     plt.figure(figsize=(4,4))
#     #print(codereadata, sys.stderr)
#     x = [1,2,3]
#     exec(codereadata, locals())
#     print(x + x, sys.stderr)
#     plt.plot(x,y)
#     plt.ylabel('y')
#     plt.tight_layout()
#     graph = get_graph()
#     return graph


# def main(request):
#     print(request.POST.keys(),sys.stderr)
#     if request.method == 'POST':
#         codereadata = request.POST['codearea']
#         # try:
#         #     # save original standart outut reference'

#         #     original_stdout = sys.stdout
#         #     sys.stdout = open('file.txt', 'w')

#         #     exec(codereadata)

#         #     sys.stdout.close()

#         #     sys.stdout = original_stdout

#         #     output = open('file.txt', 'r').read()
#         # except Exception as e:
#         #     sys.stdout = original_stdout
#         #     output = e

#         # x = [1, 2, 3]
#         # y = [3, 1, 4]
#         plt.switch_backend('AGG')
#         plt.figure(figsize=(3,3))
#         # x = [1,2,3]
#         exec(codereadata, globals())
#         plt.plot(x,y)
#         plt.tight_layout()
#         buffer = BytesIO()
#         plt.savefig(buffer, format='png')
#         buffer.seek(0)
#         image_png = buffer.getvalue()
#         graph = base64.b64encode(image_png)
#         graph = graph.decode('utf-8')
#         buffer.close()
#         plot = graph

#         # plot = get_plot(x, y, codereadata)
#         # return render(request, 'main.html', {'code': codereadata, 'output':output, 'plot': plot})
#         return render(request, 'main.html', {'code': codereadata, 'plot': plot})


#     con = """x = [3,4,6]
# y = [3,4,5]
# plt.xlabel('x ax')
# plt.ylabel('y ax')"""
#     content= {
#         'code': con
#         }
#     return render(request, "main.html", content)



































import io
from django.http import HttpResponseRedirect

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

from django.http import JsonResponse

import units_QBD

import plotly.graph_objects as go
import numpy as np



        # exec(x, glb)
        # plot = globals()["plot"]
        # try:
        #     exec('2+2', globals())
        # except Exception as e:
        #     plot = str(e).replace('<', '&lt;').replace('>', '&gt;')



# blah blah lots of code ...


plot_, error_, result_, meta_ = None, None, None, None
def run__distribution(request):
    
    print('------------------------',sys.stderr)
    input = json.load(request)
    input = json.loads(input['input'])
    print('----------------',sys.stderr)

    plot_, error_, result_, meta_ = None, None, None, None
    code_ = input['code']

    print('aaaaaaaaaaaaaaaaa',sys.stderr)
    print(input['code'],sys.stderr)
    print('aaaaaaaaaaaaaaaaaaa',sys.stderr)
    if len(input['axes']) == 0:
        sys.stdout = mystdout = io.StringIO()

        if input['code'] != '':
            try:
                exec(input['code'], globals())
                # result_ = {"plot": globals()['plot_'], "meta": meta_, "code": code_, "error": error_}
            except Exception as e:
                error_ = str(e).replace('<', '&lt;').replace('>', '&gt;')

        code_ = mystdout.getvalue()
        print('+++++++++++++++++=',sys.stderr)
        print(code_,sys.stderr)
        print('++++++++++++++++++++++',sys.stderr)
        
        result_ = {"plot": globals()['plot_'], "meta": meta_, "code": code_, "error": error_}
    elif len(input['axes']) == 1:
        property__name = list(input['axes'].keys())[0]
        materials, values = cqbd.read__sheet(input['axes'][property__name], 'list')
        fig = plotly.express.histogram(x = materials,y = values)
        config = dict({'scrollZoom': True})
        fig.update_xaxes(title_text = "Material")
        fig.update_yaxes(title_text = property__name + ' (' + input['units'][property__name] + ')')
        plot_ = plotly.io.to_html(fig, config)
        if 'orint' in input:
            fig.show()
            plot_ = ''
        result_ = {"plot": plot_, "meta": meta_, "code": code_, "error": error_}
    elif len(input['axes']) == 2:
        property__name_0 = list(input['axes'].keys())[0]
        property__name_1 = list(input['axes'].keys())[1]
        materials_0, values_0 = cqbd.read__sheet(input['axes'][property__name_0], 'list')
        materials_1, values_1 = cqbd.read__sheet(input['axes'][property__name_1], 'list')
        dict_0 = dict(zip(materials_0, values_0))
        dict_1 = dict(zip(materials_1, values_1))
        materials = [i for i in materials_0 if i in materials_1]

        w = [float(dict_0[i]) for i in materials]
        x = [float(dict_1[i]) for i in materials]
        fig = plotly.express.scatter(x=w, y=x, text=materials)

        config = dict({'scrollZoom': True})
        fig.update_traces(textposition="bottom right")
        fig.update_xaxes(title_text = property__name_0 + ' (' + input['units'][property__name_0] + ')')
        fig.update_yaxes(title_text = property__name_1 + ' (' + input['units'][property__name_1] + ')')


        plot_ = plotly.io.to_html(fig, config)
        if 'orint' in input:
            fig.show()
            plot_ = ''
        result_ = {"plot": plot_, "meta": meta_, "code": code_, "error": error_}
    elif len(input['axes']) == 3:
        property__name_0 = list(input['axes'].keys())[0]
        property__name_1 = list(input['axes'].keys())[1]
        property__name_2 = list(input['axes'].keys())[2]
        materials_0, values_0 = cqbd.read__sheet(input['axes'][property__name_0], 'list')
        materials_1, values_1 = cqbd.read__sheet(input['axes'][property__name_1], 'list')
        materials_2, values_2 = cqbd.read__sheet(input['axes'][property__name_2], 'list')
        dict_0 = dict(zip(materials_0, values_0))
        dict_1 = dict(zip(materials_1, values_1))
        dict_2 = dict(zip(materials_2, values_2))
        materials = [i for i in materials_0 if i in materials_1 and i in materials_2]

        w = [float(dict_0[i]) for i in materials]
        x = [float(dict_1[i]) for i in materials]
        y = [float(dict_2[i]) for i in materials]

        config = dict({'scrollZoom': True})
        ax_0 = property__name_0 + ' (' + input['units'][property__name_0] + ')'
        ax_1 = property__name_1 + ' (' + input['units'][property__name_1] + ')'
        ax_2 = property__name_2 + ' (' + input['units'][property__name_2] + ')'
        labels = {'x': ax_0, 'y': ax_1, 'z': ax_2}
        fig = plotly.express.scatter_3d(x=w, y=x, z=y, text=materials, labels=labels)


        plot_ = plotly.io.to_html(fig, config)
        if 'orint' in input:
            fig.show()
            plot_ = ''
        result_ = {"plot": plot_, "meta": meta_, "error": error_}
    elif len(input['axes']) == 4:
        property__name_0 = list(input['axes'].keys())[0]
        property__name_1 = list(input['axes'].keys())[1]
        property__name_2 = list(input['axes'].keys())[2]
        property__name_3 = list(input['axes'].keys())[3]
        materials_0, values_0 = cqbd.read__sheet(input['axes'][property__name_0], 'list')
        materials_1, values_1 = cqbd.read__sheet(input['axes'][property__name_1], 'list')
        materials_2, values_2 = cqbd.read__sheet(input['axes'][property__name_2], 'list')
        materials_3, values_3 = cqbd.read__sheet(input['axes'][property__name_3], 'list')
        dict_0 = dict(zip(materials_0, values_0))
        dict_1 = dict(zip(materials_1, values_1))
        dict_2 = dict(zip(materials_2, values_2))
        dict_3 = dict(zip(materials_3, values_3))
        materials = [i for i in materials_0 if i in materials_1 and i in materials_2 and i in materials_3]

        w = [float(dict_0[i]) for i in materials]
        x = [float(dict_1[i]) for i in materials]
        y = [float(dict_2[i]) for i in materials]
        z = [float(dict_3[i]) for i in materials]
        ax_0 = property__name_0 + ' (' + input['units'][property__name_0] + ')'
        ax_1 = property__name_1 + ' (' + input['units'][property__name_1] + ')'
        ax_2 = property__name_2 + ' (' + input['units'][property__name_2] + ')'
        ax_3 = property__name_3 + ' (' + input['units'][property__name_3] + ')'
        labels = {'x': ax_0, 'y': ax_1, 'z': ax_2, 'color': ax_3}
        fig = plotly.express.scatter_3d(x=w, y=x, z=y, color=z, text=materials, labels=labels)
        config = dict({'scrollZoom': True})
        fig.update_traces(textposition="bottom right")


        plot_ = plotly.io.to_html(fig, config)
        if 'orint' in input:
            fig.show()
            plot_ = ''
        result_ = {"plot": plot_, "meta": meta_, "code": code_, "error": error_}
        
    return JsonResponse(result_, safe = False)

    # df = plotly.express.data.gapminder().query("country=='Canada'")
    # fig = plotly.express.line(df, x="year", y="lifeExp", title='Life expectancy in Canada')
    # config = dict({'scrollZoom': True, 'displayModeBar': False})
    # x = plotly.io.to_html(fig, config)

    # Helix equation
    t = np.linspace(0, 10, 50)
    x, y, z = np.cos(t), np.sin(t), t

    fig = go.Figure(data=[go.Scatter3d(x=x, y=y, z=z, mode='markers')])
    # y = 12
    config = dict({'scrollZoom': True, 'displayModeBar': False})
    x = plotly.io.to_html(fig, config)
    result = {"plot": x}
    return JsonResponse(result)




def get_graph():
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    image_png = buffer.getvalue()
    graph = base64.b64encode(image_png)
    graph = graph.decode('utf-8')
    buffer.close()
    return graph
def get_plot(x,y):
    plt.switch_backend('AGG')
    plt.figure(figsize=(4,4))
    #print(codereadata, sys.stderr)
    plt.plot(x,y)
    plt.ylabel('y')
    plt.xlabel('x')
    plt.tight_layout()
    graph = get_graph()
    return graph


def main(request):
    if request.method == 'POST':
        print('+++++++++++++++++++++++++++++++', sys.stderr)
        print(request.POST.keys(),sys.stderr)
        print('+++++++++++++++++++++', sys.stderr)
        if 'panel__form__distribution__submit' in request.POST.keys():
            dat = json.loads(request.POST.get('panel__form__distribution__submit'))
            
            # x, y = cqbd.read__sheet(dat['energy__gap'])
            x, y = cqbd.read__sheet(dat[list(dat.keys())[0]])
            plt.switch_backend('AGG')
            plt.figure(figsize=(3,3))
            plt.scatter(x,y)
            plt.tight_layout()
            buffer = BytesIO()
            plt.savefig(buffer, format='png')
            buffer.seek(0)
            image_png = buffer.getvalue()
            graph = base64.b64encode(image_png)
            graph = graph.decode('utf-8')
            buffer.close()
            plot = graph

            # plot = get_plot(x, y)
            # return render(request, 'main.html', {'code': codereadata, 'output':output, 'plot': plot})
            return render(request, 'main.html', {'plot': plot})
        elif "panel__form__profile__submit" in request.POST.keys():
            dat = json.loads(request.POST.get('panel__form__profile__submit'))
            x, y = meqbd.read__sheet(dat['structure'], dat['structure__unit'])
            params = cqbd.read__sheet(dat['energy__gap'], 'dict')
            fence = []
            for i in x:
                vel = meqbd.interpolation__exception(i, params, dat['bowings']['energy__gap'])
                fence.append(vel)
            # x, y = meqbd.profile__gridded(y, fence)
            # ev = qqbd.eigenvalues_1(x, y, )
            x, y = meqbd.profile__plain(y, fence)
            # print('----------------',sys.stderr)
            # print(x, sys.stderr)
            # print(y, sys.stderr)
            # print('-------------', sys.stderr)

            plt.switch_backend('AGG')
            plt.figure(figsize=(3,3))
            plt.scatter(x,y)
            plt.tight_layout()
            buffer = BytesIO()
            plt.savefig(buffer, format='png')
            buffer.seek(0)
            image_png = buffer.getvalue()
            graph = base64.b64encode(image_png)
            graph = graph.decode('utf-8')
            buffer.close()
            plot = graph

            plot = get_plot(x, y)
            # return render(request, 'main.html', {'code': codereadata, 'output':output, 'plot': plot})
            return render(request, 'main.html', {'plot': plot})


        elif "panel__form__energy__profile__submit" in request.POST.keys():
            dat = json.loads(request.POST.get('panel__form__energy__profile__submit'))
            structure__materials, structure__thicknesses = meqbd.read__sheet(dat['structure'], dat['unit__structure'])
            energy__gap = cqbd.read__sheet(dat['energy__gap'], 'dict')
            effective__mass = {key: float(value) for (key, value) in dat['effective__mass']['el'].items()}
            # effective__mass = dat['effective__mass']['el']
            fence__energy__gap = []
            fence__effective__mass = []
            for i in structure__materials:
                fence1 = meqbd.interpolation__exception(i, energy__gap, dat['bowings']['energy__gap'])
                fence__energy__gap.append(fence1 * units_QBD.SI_['eV'][0])
                fence2 = meqbd.interpolation__exception(i, effective__mass, dat['bowings']['effective__mass'])
                fence__effective__mass.append(fence2 * units_QBD.SI_['m_e'][0])

            x1, y1 = meqbd.profile__gridded(structure__thicknesses, fence__energy__gap)
            x2, y2 = meqbd.profile__gridded(structure__thicknesses, fence__effective__mass)
            print(y1,sys.stderr)
            print(y2,sys.stderr)
            ev = qqbd.eigenvalues_1(x1, y1, y2)
            print('\n\n------',sys.stderr)
            # print([x1[0],x1[-1]],sys.stderr)
            # print(y1,sys.stderr)
            # print('------\n',sys.stderr)

            plt.switch_backend('AGG')
            plt.figure(figsize=(3,3))
            plt.plot(x1,y1)
            for i in ev:
                plt.plot([x1[0],x1[-1]], [i,i])
                yy = qqbd.eigenfunctions_1(x1,y1,y2,i)
                yyy = [ii + i for ii in yy]
                plt.plot(x1, yyy)

            
            # plt.plot(x2,y2)
            plt.tight_layout()
            buffer = BytesIO()
            plt.savefig(buffer, format='png')
            buffer.seek(0)
            image_png = buffer.getvalue()
            graph = base64.b64encode(image_png)
            graph = graph.decode('utf-8')
            buffer.close()
            plot = graph

            # plot = get_plot(x, y)
            # return render(request, 'main.html', {'code': codereadata, 'output':output, 'plot': plot})
            
            input = """x = [3,4,6]
y = [3,4,5]
plt.xlabel('x ax')
plt.ylabel('y ax')"""

            return render(request, 'main.html', {'plot': plot, 'input': input})

    con = """x = [3,4,6]
y = [3,4,5]
plt.xlabel('x ax')
plt.ylabel('y ax')"""
    content= {
        'code': con, 'plpl': ''
        }
    return render(request, "main.html", content)




