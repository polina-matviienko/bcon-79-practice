//Додавання нового поля до об'єктів
//Дано масив об'єктів
//Завдання: За допомогою map створіть новий масив, додавши поле discountedPrice, яке є зниженою ціною (на 10%).
//Очікуваний результат:

//[
//  { name: 'Laptop', price: 1000, discountedPrice: 900 },
//  { name: 'Phone', price: 500, discountedPrice: 450 }
//]

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];

const discountedProducts = products.map(product => ({
  ...product,
  discountedPrice: product.price * 0.9,
}));

console.log(discountedProducts);
