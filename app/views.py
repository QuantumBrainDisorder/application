from django.shortcuts import render
import sys

import matplotlib.pyplot as plt
import base64
from io import BytesIO


def get_graph():
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    image_png = buffer.getvalue()
    graph = base64.b64encode(image_png)
    graph = graph.decode('utf-8')
    buffer.close()
    return graph
def get_plot(x,y,codereadata):
    plt.switch_backend('AGG')
    plt.figure(figsize=(4,4))
    #print(codereadata, sys.stderr)
    x = [1,2,3]
    exec(codereadata, locals())
    print(x + x, sys.stderr)
    plt.plot(x,y)
    plt.ylabel('y')
    plt.tight_layout()
    graph = get_graph()
    return graph


def main(request):
    if request.method == 'POST':
        codereadata = request.POST['codearea']
        # try:
        #     # save original standart outut reference'

        #     original_stdout = sys.stdout
        #     sys.stdout = open('file.txt', 'w')

        #     exec(codereadata)

        #     sys.stdout.close()

        #     sys.stdout = original_stdout

        #     output = open('file.txt', 'r').read()
        # except Exception as e:
        #     sys.stdout = original_stdout
        #     output = e

        # x = [1, 2, 3]
        # y = [3, 1, 4]
        plt.switch_backend('AGG')
        plt.figure(figsize=(4,4))
        # x = [1,2,3]
        exec(codereadata, globals())
        plt.plot(x,y)
        plt.tight_layout()
        buffer = BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        image_png = buffer.getvalue()
        graph = base64.b64encode(image_png)
        graph = graph.decode('utf-8')
        buffer.close()
        plot = graph

        # plot = get_plot(x, y, codereadata)
        # return render(request, 'main.html', {'code': codereadata, 'output':output, 'plot': plot})
        return render(request, 'main.html', {'code': codereadata, 'plot': plot})

    con = """x = [3,4,6]
y = [3,4,5]
plt.xlabel('x ax')
plt.ylabel('y ax')"""
    content= {
        'code': con
        }
    return render(request, "main.html", content)
