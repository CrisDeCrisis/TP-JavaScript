let cantProduc = parseInt(prompt('Ingrese la cantidad de productos: '))
    precioUni = parseInt(prompt('Ingrese el valor del producto por unidad: '))
    precioTotal = (cantProduc*precioUni);

if (isNaN (cantProduc || precioUni)) {
    alert('Los valores ingresados no son válidos!');
}

precioDesc = (precioTotal * 0.85)

if (cantProduc < 10) {
    alert('La cantidad de productos no supera los 10 artículos!');
} else if (precioTotal < 20000) {
    alert(`El valor total de la compra no supera $20000
Debera pagar $${precioTotal}`)
} else {
    alert(`Felicidades, se le aplico un descuento del 15%
Total a pagar: $${precioDesc}`)
}