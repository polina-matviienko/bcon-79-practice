//Фільтрування за частковим збігом
//Дано масив об'єктів
//Завдання: За допомогою filter залиште лише ті продукти, назва яких містить "TV".
//Очікуваний результат:

//[
// { name: 'Sony TV', category: 'electronics' },
// { name: 'LG TV', category: 'electronics' }
//]

const products = [
  { name: "Apple iPhone", category: "phones" },
  { name: "Samsung Galaxy", category: "phones" },
  { name: "Sony TV", category: "electronics" },
  { name: "LG TV", category: "electronics" },
];

const tvProducts = products.filter(product => product.name.includes("TV"));

console.log(tvProducts);
