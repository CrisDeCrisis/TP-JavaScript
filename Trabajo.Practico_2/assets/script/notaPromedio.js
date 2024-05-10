let nota1 = parseInt(prompt('Ingrese la nota del primer trimestre: '))
    nota2 = parseInt(prompt('Ingrese la nota del segundo trimestre: '))
    nota3 = parseInt(prompt('Ingrese la nota del tercer trimestre: '));

if (isNaN(nota1 || nota2 || nota3)) {
    alert('No debe ingresar campos vacios o distintos de números!');
}

let promedio = Math.round((nota1 + nota2 + nota3) / 3);

switch (true) {
    case promedio >= 1 && promedio <=3:
        alert('Nota Insuficiente!')
        break;
    case promedio == 4 || promedio ==5:
        alert('Nota Regular')
        break;
    case promedio == 6 || promedio ==7:
        alert('Nota Buena')
        break;
    case promedio == 8 || promedio == 9:
        alert('Nota Muy Buena')
        break;
    case promedio == 10:
        alert('Nota Sobresaliente!')
        break;
    default:
        alert('No se pudo calcular el promedio.')
        break;
}