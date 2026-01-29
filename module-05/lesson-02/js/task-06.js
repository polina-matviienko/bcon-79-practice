//Згладження вкладеного масиву
//Дано вкладений масив
//Завдання: За допомогою reduce перетворіть вкладений масив у плаский.
//Очікуваний результат:
//[1, 2, 3, 4, 5, 6]

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatArray = nestedArray.reduce((acc, current) => {
  return acc.concat(current);
}, []);

console.log(flatArray);
