from django.shortcuts import render
from .plot import get_plot

# Create your views here.

def main(request):
    return render(request, "main.html")

def x(request):
    return render(request, "x.html")

def plot(request):
    x = [1, 2, 3]
    y = [3, 1, 4]
    plot = get_plot(x, y)
    return render(request, 'plot.html', {'plot': plot})




import sys

# Create your views here.

def index(request):
    return render(request, 'index.html')

def runcode(request):
    if request.method == 'POST':
        codereadata = request.POST['codearea']

        try:
            # save original standart outut reference'

            original_stdout = sys.stdout
            sys.stdout = open('file.txt', 'w')

            exec(codereadata)

            sys.stdout.close()

            sys.stdout = original_stdout

            output = open('file.txt', 'r').read()
        except Exception as e:
            sys.stdout = original_stdout
            output = e

    return render(request, 'index.html', {'code': codereadata, 'output':output})