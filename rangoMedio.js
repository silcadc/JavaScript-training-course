// Responde las siguientes preguntas en los comentarios:

// ¿Cuál tipo de promedio elegiste para trabajar? 
//--> Rango Medio

// ¿Qué casos de uso tiene tu tipo de promedio?
// --> Es una medidas útil que nos ayuda a analizar un conjunto de datos. 
// Al ver los datos necesitamos entender cómo se extienden.

// ¿Cómo traduces su fórmula a código JavaScript?

//Definicion de formulas
// let lista = [
//     10, 20, 15, 11, 31, 12
// ]

// let valorMax = Math.max.apply(null, lista)
// console.log(valorMax)
// let valorMin = Math.min.apply(null, lista)
// console.log(valorMin)

// let sumaValores = valorMax + valorMin;

// let rangoMedio = sumaValores / 2;
// console.log(rangoMedio)

//Encapsulo las formulas en una function

function calcularRangoMedio(lista) {
    let valorMax = Math.max.apply(null, lista)
    let valorMin = Math.min.apply(null, lista)

    let sumaValores = valorMax + valorMin;

    let rangoMedio = sumaValores / 2;
    return rangoMedio;
}