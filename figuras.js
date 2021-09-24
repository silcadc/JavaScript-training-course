//Video 8 interactuando con JavaScript desde HTML
// Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado**2;
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

function alturaTriangulo(lado1, base) {
    let dataPythagoras = lado1**2 - (base**2) / 4;
    //Math.sqrt es una funcion que permite calcular las raices cuadradas
    Math.sqrt(dataPythagoras);
    return Math.sqrt(dataPythagoras);
}
console.groupEnd();

// Código del círculo
console.group("Círculos");
//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}//llamando funciones dentro de funciones

//Área
function areaCirculo(radio) {
    return (radio**2) * PI;
}
console.groupEnd();

// Aquí interactuamos con el HTML
// Código del cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = parseInt(input.value);

    const area = areaCuadrado(value);
    alert(area);
}
//tarea crear funciones y formularios para triangulo y circulo
// Código del triángulo

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("inputTriangulo1");
    let value1 = parseInt(lado1.value);
   
    const lado2 = document.getElementById("inputTriangulo2");
    let value2 = parseInt(lado2.value);
    
    const base = document.getElementById("inputTrianguloBase");
    const valueBase = parseInt(base.value);
   
    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTrianBase");
    const valueBase = base.value;

    const altura = document.getElementById("inputTrianguloAltura");
    const valueAltura = altura.value;
        
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
} 

function calcularAlturaTriangulo() {
    const isosceleLado1 = document.getElementById("inputTrianguloIsosceles1");
    let isoValue1 = parseInt(isosceleLado1.value);
   
    const isosceleLado2 = document.getElementById("inputTrianguloIsosceles2");
    let isoValue2 = parseInt(isosceleLado2.value);
    
    const isosceleBase = document.getElementById("inputTrianguloIsoscelesBase");
    let valueBase = parseInt(isosceleBase.value);
   
    if (isoValue1 === isoValue2) {
        const altura = alturaTriangulo(isoValue1, valueBase);
        alert(altura);
    }
}

// Código del círculo

function calcularPerimetroCirculo() {
    const radio = document.getElementById("inputCirculo");
    let valueRadio = parseInt(radio.value);
      
    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("inputCirculo");
    let valueRadio = parseInt(radio.value);

    const area = areaCirculo(valueRadio);
    alert(area);
}