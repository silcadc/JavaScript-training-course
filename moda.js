// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1
// ];

function calcularModa (lista) {
    let listaCount = {};

    lista.map(//.map es metodo para mutar mi arreglo, funciona similar
        //al forEach porque recorre todo el arreglo pero forEach no puede retornar
        //un nuevo arreglo y .map si lo puede hacer.
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;//esta linea es la abreviacion de decir
                //listaCount[elemento] = listaCount[elemento] + 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    console.log(listaCount)
    //Object.entries() este metodo crea a partir de un objeto un array
    //un array con arrays por dentro.
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1]
    return moda;
}
