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







































from django.shortcuts import render
import sys
import chemical_QBD as cqbd
import matplotlib
import quantum_QBD as qqbd
import material_engineering_QBD as meqbd
import json
import mpld3
import matplotlib.pyplot as plt
import base64
from io import BytesIO

import units_QBD


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
        # print('+++++++++++++++++++++++++++++++', sys.stderr)
        # print(request.POST.get('panel__form__profile__submit'),sys.stderr)
        # print('+++++++++++++++++++++', sys.stderr)
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

            fi = plt.figure(figsize=(4,3)) # 10 is width, 7 is height
            plt.plot([1,2,3,4,5], [1,2,3,4,10], 'go', label='GreenDots')  # green dots
            plt.plot([1,2,3,4,5], [2,3,4,5,11], 'b*', label='Bluestars')  # blue stars
            plt.title('A Simple Scatterplot')  
            plt.xlabel('X')
            plt.ylabel('Y')
            plt.xlim(0, 6)
            plt.ylim(0, 12)
            plt.legend(loc='best')

            plpl = mpld3.fig_to_html(fi)
            return render(request, 'main.html', {'plot': plot, 'input': input, 'plpl': plpl})

    con = """x = [3,4,6]
y = [3,4,5]
plt.xlabel('x ax')
plt.ylabel('y ax')"""
    content= {
        'code': con, 'plpl': ''
        }
    return render(request, "main.html", content)



