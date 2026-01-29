//Підрахунок загальної вартості товарів
//Дано масив товарів:
//Завдання: За допомогою reduce підрахуйте загальну вартість усіх товарів у кошику.
//Очікуваний результат:
//14.8

const cart = [
  { product: "Apple", price: 1, quantity: 4 },
  { product: "Banana", price: 0.5, quantity: 10 },
  { product: "Orange", price: 0.8, quantity: 6 },
];

const total = cart.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

console.log(total);
