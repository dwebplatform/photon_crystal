const Layers = [];

function createSMatrix(curentLayer, nextLayer) {
  let newSMatrix = [
    [nextLayer.n / nextLayer.d, Math.random()],
    [nextLayer.n / nextLayer.d, Math.random() * 10]
  ];
  return newSMatrix;
}
function createPMatrix(prevLayer) {
  if (!prevLayer) {
    return;
  }
  return [
    [prevLayer.PMatrix[0][0] / 2, prevLayer.PMatrix[0][1] / 2],
    [prevLayer.PMatrix[0][0] * 2, prevLayer.PMatrix[0][0] * 2]
  ];
}

class Layer {
  constructor(n,d,PMatrix = [
      [1, 1],
      [1, 1]
    ]
  ) {
    this.n = n;
    this.d = d;
    this.PMatrix = PMatrix;
  }
  setSMatrix(matrix) {
    if (!matrix) {
      console.log("ERROR");
      return;
    }
    this.SMatrix = matrix;
  }
}

for (let i = 0; i < 22; i++) {
  if (i === 0) {
    let newlayer = new Layer(1, 0.5);
    Layers.push(newlayer);
  } else {
    let newlayer = new Layer(1, 0.5, createPMatrix(Layers[i - 1]));
    Layers.push(newlayer);
  }
}

Layers.forEach((layer, i) => {
  if (Layers[i + 1]) {
    layer.setSMatrix(createSMatrix(layer, Layers[i + 1]));
  }

  // layer.setSMatrix(createSMatrix(layer,Layer[i+1]));
});
