let edad = parseInt(prompt('Ingrese su edad:'));

if (0 <= edad && edad <= 12) {
    alert('Es un niño/a.');
} else if (13 <= edad && edad <= 19) {
    alert('Es un/a adolescente.');
} else if (20 <= edad && edad <= 59) {
    alert('Es un/a adulto/a.');
} else if (60 <= edad && edad <= 119) {
    alert('Es un/a adulto/a mayor.');
} else if (120 <= edad) {
    alert('Excede el rango de edad, felicidades!');
} else {
    alert('El caracter ingresado no es valido!');
}