// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

function calculateAverage(first, second) {
    return (first + second) / 2;
}
let a = +prompt('Введите первое число:');
let b = +prompt('Введите второе число:');

let average = calculateAverage(a, b);
console.log(average);
