//Перетворення масиву в об'єкт
//Дано масив об'єктів
//Завдання: За допомогою reduce перетворіть масив у об'єкт, де ключем буде id, а значенням — відповідний об'єкт.
//Очікуваний результат:

//{
// 1: { id: 1, name: 'Alice' },
// 2: { id: 2, name: 'Bob' },
// 3: { id: 3, name: 'Charlie' }
//}

const people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const peopleObj = people.reduce((acc, person) => {
  acc[person.id] = person;
  return acc;
}, {});

console.log(peopleObj);
