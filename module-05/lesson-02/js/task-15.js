//Перетворення масиву на HTML
//Дано масив імен
//Завдання: За допомогою map створіть масив HTML-рядків для відображення цих імен у списку.
//Очікуваний результат:

//['<li>Alice</li>', '<li>Bob</li>', '<li>Charlie</li>']

const names = ["Alice", "Bob", "Charlie"];

const htmlList = names.map(name => `<li>${name}</li>`);

console.log(htmlList);
