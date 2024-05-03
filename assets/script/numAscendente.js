let num1 = (prompt('Ingrese el primer número:'))
    num2 = (prompt('Ingrese el segundo número:'))
    num3 = (prompt('Ingrese el tercer número:'));

if (num1 < num2 && num1 < num3 && num2 < num3) {
    alert(`${num1} ${num2} ${num3}`);
} else if (num1 < num2 && num1 < num3 && num3 < num2) {
    alert(`${num1} ${num3} ${num2}`);
} else if (num2 < num1 && num2 < num3 && num1 < num3) {
    alert(`${num2} ${num1} ${num3}`);
} else if (num2 < num1 && num2 < num3 && num3 < num1) {
    alert(`${num2} ${num3} ${num1}`);
} else if (num3 < num1 && num3 < num2 && num1 < num2) {
    alert(`${num3} ${num1} ${num2}`);
} else {
    alert(`${num3} ${num2} ${num1}`);
}