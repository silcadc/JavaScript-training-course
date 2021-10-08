// const lista1 = [
//     12,
//     8,
//     21,
//     5,
//     15
// ];

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

//ahora queremos encontrar la mitad de la cantidad de datos de mi lista
// const laMitadLista = parseInt(lista.length / 2);
// console.log(lista.length);
// console.log(laMitadLista);

//esta funcion valida si la cantidad de datos de mi lista es par o impar
function esPar(numerito) { 
    //para obtener el cociente en la division debo utilizar el /
    if(numerito % 2 === 0) {//para obtener un residuo o modulo en una division utilizo el %
        return true;
    } else {
        return false;
    }
}

let mediana;

function calcularMediana(lista){
    let listaOrdenada = lista.sort((a, b) => a - b);//con este argumento extra en la function .sort
    //podemos evitar que organice con algunos errores los datos.
    console.log(listaOrdenada);

    const laMitadLista = parseInt(listaOrdenada.length / 2);
    console.log(listaOrdenada.length);
    console.log(laMitadLista);
    
    if(esPar(listaOrdenada.length)) {
        let elemento1 = listaOrdenada[laMitadLista - 1];
        console.log(elemento1);
        let elemento2 = listaOrdenada[laMitadLista];
        console.log(elemento2);
    
        let promedio1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ])
       mediana = promedio1y2;
       return mediana;
    
    } else {
        mediana = listaOrdenada[laMitadLista];
        return mediana;
    }
}
