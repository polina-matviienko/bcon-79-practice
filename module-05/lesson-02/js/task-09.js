//Сортування чисел за зростанням
//Дано масив чисел:
//Завдання: Використайте toSorted, щоб відсортувати числа за зростанням.
//Очікуваний результат:

//[1, 2, 5, 5, 6, 9]

const numbers = [5, 2, 9, 1, 5, 6];

const sortedNumbers = numbers.toSorted((a, b) => a - b);

console.log(sortedNumbers);
