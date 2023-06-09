async function carregarModelo(modelo){
    console.log('carregando modelo');
    RequestModel(modelo);
    Delay = (ms) => new Promise(res => setTimeout(res, ms));
    while(!HasModelLoaded(modelo)){
      await Delay(1000);
    }
    console.log('modelo carregado');
} 