//Підрахунок кількості повторень
//Дано масив:
//Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
// apple: 3,
// banana: 2,
// orange: 1
//}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const countFruits = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(countFruits);
