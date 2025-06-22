// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    return ((number%2===0)&&(number>0)) ? true : false
}
let a = +prompt('Введите число:');

let total = isEven(a);
console.log(total);
