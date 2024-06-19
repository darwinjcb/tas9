function mostrarElementosConPosicion(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Elemento en posición ${i}: ${array[i]}`);
    }
}

function sumarElementos(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

function multiplicarPorTres(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * 3);
    }
}

// Ejemplos de uso
const strings = ["manzana", "banana", "cereza"];
const numeros = [1, 2, 3, 4, 5];

mostrarElementosConPosicion(strings);
console.log("Suma de elementos:", sumarElementos(numeros));
multiplicarPorTres(numeros);
