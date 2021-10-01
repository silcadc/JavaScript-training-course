// const lista1 = [
//     100,
//     250,
//     300,
//     400
// ];

// //suma de listado
// let sumaLista1 = 0;

// for (let i=0; i < lista1.length; i++) {
//     sumaLista1 = sumaLista1 + lista1[i];
// };

// //promedio del listado
// let promedioLista1 = sumaLista1 / lista1.length;

//funcional
// function calcularMediaAritmetica(lista) {
//     let sumaLista = 0;

//     for (let i=0; i < lista.length; i++) {
//         sumaLista = sumaLista + lista[i];
//     };

//     let promedioLista = sumaLista / lista.length;

//     return promedioLista;
// };

//segunda opcion, encapsular la funcion incluyendo el metodo reduce para los arrays
function calcularMediaAritmetica(lista) {
    //el metodo reduce es un acumulador, que recibe como argumento una funcion,
    //la funcion recibe dos argumentos, el valor acumulado y el nuevo elemento.
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    let promedioLista = sumaLista / lista.length;

    return promedioLista;
};