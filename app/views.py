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
from django.http import FileResponse


def site__icon_(request):
    return FileResponse(open('./static/images/site__icon_.ico', 'rb'))
def site__icon(request):
    return FileResponse(open('./static/images/site__icon.ico', 'rb'))



def main(request):
#     if request.method == 'POST':
#         print('+++++++++++++++++++++++++++++++', sys.stderr)
#         print(request.POST.keys(),sys.stderr)
#         print('+++++++++++++++++++++', sys.stderr)
#         if 'panel__form__distribution__submit' in request.POST.keys():
#             dat = json.loads(request.POST.get('panel__form__distribution__submit'))
            
#             # x, y = cqbd.read__sheet(dat['energy__gap'])
#             x, y = cqbd.read__sheet(dat[list(dat.keys())[0]])
#             plt.switch_backend('AGG')
#             plt.figure(figsize=(3,3))
#             plt.scatter(x,y)
#             plt.tight_layout()
#             buffer = BytesIO()
#             plt.savefig(buffer, format='png')
#             buffer.seek(0)
#             image_png = buffer.getvalue()
#             graph = base64.b64encode(image_png)
#             graph = graph.decode('utf-8')
#             buffer.close()
#             plot = graph

#             # plot = get_plot(x, y)
#             # return render(request, 'main.html', {'code': codereadata, 'output':output, 'plot': plot})
#             return render(request, 'main.html', {'plot': plot})
#         elif "panel__form__profile__submit" in request.POST.keys():
#             dat = json.loads(request.POST.get('panel__form__profile__submit'))
#             x, y = meqbd.read__sheet(dat['structure'], dat['structure__unit'])
#             params = cqbd.read__sheet(dat['energy__gap'], 'dict')
#             fence = []
#             for i in x:
#                 vel = meqbd.interpolation__exception(i, params, dat['bowings']['energy__gap'])
#                 fence.append(vel)
#             # x, y = meqbd.profile__gridded(y, fence)
#             # ev = qqbd.eigenvalues_1(x, y, )
#             x, y = meqbd.profile__plain(y, fence)
#             # print('----------------',sys.stderr)
#             # print(x, sys.stderr)
#             # print(y, sys.stderr)
#             # print('-------------', sys.stderr)

#             plt.switch_backend('AGG')
#             plt.figure(figsize=(3,3))
#             plt.scatter(x,y)
#             plt.tight_layout()
#             buffer = BytesIO()
#             plt.savefig(buffer, format='png')
#             buffer.seek(0)
#             image_png = buffer.getvalue()
#             graph = base64.b64encode(image_png)
#             graph = graph.decode('utf-8')
#             buffer.close()
#             plot = graph

#             # plot = get_plot(x, y)
#             # return render(request, 'main.html', {'code': codereadata, 'output':output, 'plot': plot})
#             return render(request, 'main.html', {'plot': plot})


#         elif "panel__form__energy__profile__submit" in request.POST.keys():
#             dat = json.loads(request.POST.get('panel__form__energy__profile__submit'))
#             structure__materials, structure__thicknesses = meqbd.read__sheet(dat['structure'], dat['unit__structure'])
#             energy__gap = cqbd.read__sheet(dat['energy__gap'], 'dict')
#             effective__mass = {key: float(value) for (key, value) in dat['effective__mass']['el'].items()}
#             # effective__mass = dat['effective__mass']['el']
#             fence__energy__gap = []
#             fence__effective__mass = []
#             for i in structure__materials:
#                 fence1 = meqbd.interpolation__exception(i, energy__gap, dat['bowings']['energy__gap'])
#                 fence__energy__gap.append(fence1 * units_QBD.SI_['eV'][0])
#                 fence2 = meqbd.interpolation__exception(i, effective__mass, dat['bowings']['effective__mass'])
#                 fence__effective__mass.append(fence2 * units_QBD.SI_['m_e'][0])

#             x1, y1 = meqbd.profile__gridded(structure__thicknesses, fence__energy__gap)
#             x2, y2 = meqbd.profile__gridded(structure__thicknesses, fence__effective__mass)
#             print(y1,sys.stderr)
#             print(y2,sys.stderr)
#             ev = qqbd.eigenvalues_1(x1, y1, y2)
#             print('\n\n------',sys.stderr)
#             # print([x1[0],x1[-1]],sys.stderr)
#             # print(y1,sys.stderr)
#             # print('------\n',sys.stderr)

#             plt.switch_backend('AGG')
#             plt.figure(figsize=(3,3))
#             plt.plot(x1,y1)
#             for i in ev:
#                 plt.plot([x1[0],x1[-1]], [i,i])
#                 yy = qqbd.eigenfunctions_1(x1,y1,y2,i)
#                 yyy = [ii + i for ii in yy]
#                 plt.plot(x1, yyy)

            
#             # plt.plot(x2,y2)
#             plt.tight_layout()
#             buffer = BytesIO()
#             plt.savefig(buffer, format='png')
#             buffer.seek(0)
#             image_png = buffer.getvalue()
#             graph = base64.b64encode(image_png)
#             graph = graph.decode('utf-8')
#             buffer.close()
#             plot = graph

# #             # plot = get_plot(x, y)
# #             # return render(request, 'main.html', {'code': codereadata, 'output':output, 'plot': plot})
            
# #             input = """x = [3,4,6]
# # y = [3,4,5]
# # plt.xlabel('x ax')
# # plt.ylabel('y ax')"""

# #             return render(request, 'main.html', {'plot': plot, 'input': input})

#     con = """x = [3,4,6]
# y = [3,4,5]
# plt.xlabel('x ax')
# plt.ylabel('y ax')"""
#     content= {
#         'code': con, 'plpl': ''
#         }
    return render(request, "main.html")




