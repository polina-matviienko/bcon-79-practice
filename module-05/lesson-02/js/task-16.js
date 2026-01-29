//Фільтрування рядків, які починаються на "A"
//Дано масив рядків
//Завдання: Використайте filter, щоб залишити лише ті рядки, які починаються на "A".
//Очікуваний результат:

//['Apple', 'Avocado', 'Apricot']

const words = ["Apple", "Banana", "Avocado", "Cherry", "Apricot"];

const aWords = words.filter(word => word.startsWith("A"));

console.log(aWords);
