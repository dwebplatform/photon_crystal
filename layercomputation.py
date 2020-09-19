# угол раз -> для каждого слоя создаем матрицу от предыдущих углов
import numpy as np

# угол падения, число слоев, показатель преломления воздуха и тд
ALPHA = 0
NUM_OF_LAYERS = 20
AIR_NPARAM = 1.4
ODD_NPARAM = 1.6
ODD_HPARAM = 0.5
EVEN_NPARAM = 1.8
EVEN_HPARAM = 0.7
class Layer:
    def __init__(self,n,h,layer_type):
        self.n = n
        self.h = h
        self.layer_type = layer_type
    def setPMatrix(self, prevLayer):
        newMatrix = np.matrix([[prevLayer.n+1,prevLayer.n-1],[prevLayer.h+1,prevLayer.h-1 ] ])        
        self.PMatrix = newMatrix
    
    def getPMatrix(self):
        return self.PMatrix;
    def setSMatrix(self,nextLayer):
        newMatrix = np.matrix([[nextLayer.n/2,nextLayer.n*2],[nextLayer.h-15,nextLayer.h-12]])
         
        self.SMatrix = newMatrix
    def getSMatrix(self):
        return self.SMatrix;


layers = []
 
for i in range(0,22):
    if i == 0:
        first_layer = Layer(AIR_NPARAM,1000000,"AIR")
        layers.append(first_layer)
    elif i == 21:
        last_layer = Layer(AIR_NPARAM,1000000,"AIR")
        layers.append(last_layer)
    elif  i % 2 == 0:
        odd_layer = Layer(ODD_NPARAM,ODD_HPARAM,"PVC")
        odd_layer.setPMatrix(layers[i-1])
        layers.append(odd_layer)
    
    else:
        even_layer = Layer(EVEN_NPARAM, EVEN_HPARAM,"PVC")                
        even_layer.setPMatrix(layers[i-1])
        layers.append(even_layer)



for i in range(1, len(layers)-1):
    if layers[i].layer_type=='AIR':
        continue
    else:
        layers[i].setSMatrix(layers[i+1])
        print(layers[i].getSMatrix())

 