/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку,
где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(word) {
    let newWord = ""
    for (let i = 0; i < word.length; i++) {
        newWord = newWord + word[i] + word[i]
    }
    return newWord
}
// const output = doubleEachCharacter("hello")
// console.log(output)