//Сортування рядків за довжиною
//Дано той самий масив рядків
//Завдання: Відсортуйте рядки за їхньою довжиною (від найкоротшого до найдовшого).
//Очікуваний результат:

//['kiwi', 'apple', 'grape', 'banana', 'orange']

const words = ["banana", "apple", "grape", "orange", "kiwi"];

const sortedWords = words.slice().sort((a, b) => a.length - b.length);

console.log(sortedWords);
