// Найбільше число в масиві
//Дано масив чисел
//Завдання: Знайдіть найбільше число за допомогою reduce.
//Очікуваний результат:
//48

const numbers = [10, 25, 48, 7, 32, 18];

const maxNumber = numbers.reduce((max, current) => {
  return current > max ? current : max;
}, numbers[0]);

console.log(maxNumber);
