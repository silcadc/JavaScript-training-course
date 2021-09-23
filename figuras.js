//Video 7 encapsulando código en funciones
// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
} 
console.groupEnd();

// Código del círculo
console.group("Círculos");

//Diámetro
function diametroCirculo(radio) {
    return radio *2;
}

const PI = Math.PI;
console.log("El valor de PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}//llamando funciones dentro de funciones

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();