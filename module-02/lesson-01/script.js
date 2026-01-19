// Task 1
// При натисканні кнопки .b-1 спрацьовує функція f1. Функція повинна прочитати вміст .i-1 і порівняти його з числом 4 (порівняння ==). Результат порівняння - true або false виведіть у .out-1.

document.querySelector(".b-1").onclick = f1;

function f1() {
  const inputVal = document.querySelector(".i-1").value;
  const result = inputVal == 4;
  document.querySelector(".out-1").innerHTML = result;
}

// Task 2
// Дані дві змінні a21 і a22. При натисканні кнопки .b-2, запускається функція f2. Функція повинна порівняти змінні за допомогою if else і вивести в .out-2 число, яке більше. Варіант рівності змінних не розглядаємо.

let a21 = 45;
let a22 = 32;

document.querySelector(".b-2").onclick = f2;

function f2() {
  if (a21 > a22) {
    document.querySelector(".out-2").innerHTML = a21;
  } else {
    document.querySelector(".out-2").innerHTML = a22;
  }
}

// Task 3
// Дані 2 input - .i-31 і .i-32, обидва - input[type=number]. При натисканні кнопки .b-3 спрацьовує функція f3. Функція повинна порівняти числа з input, вивести в .out-3 більше число.
// Проведіть самостійний тест роботи, введіть пари чисел 4 і 9, 9 і 22, 5 і 111.

document.querySelector(".b-3").onclick = f3;

function f3() {
  const num1 = +document.querySelector(".i-31").value;
  const num2 = +document.querySelector(".i-32").value;

  if (num1 > num2) {
    document.querySelector(".out-3").innerHTML = num1;
  } else {
    document.querySelector(".out-3").innerHTML = num2;
  }
}

// Task 4.
// Користувач вводить в .i-4 рік свого народження. Є кнопка .b-4, яка запускає функцію f4. Функція повинна вивести в .out-4 число 1, якщо користувачеві більше або дорівнює 18 років, і 0, якщо менше.

document.querySelector(".b-4").onclick = f4;

function f4() {
  const birthYear = +document.querySelector(".i-4").value;
  const age = 2026 - birthYear;

  if (age >= 18) {
    document.querySelector(".out-4").innerHTML = 1;
  } else {
    document.querySelector(".out-4").innerHTML = 0;
  }
}

// Task 5.
// На сторінці є input з класом i-5, куди користувач може ввести число. Є кнопка b-5, яка запускає функцію f5. Функція повинна вивести в .out-5 символ 'm' - якщо число менше нуля, 0 - якщо число дорівнює нулю, і число 1 - якщо більше.

document.querySelector(".b-5").onclick = f5;

function f5() {
  const num = +document.querySelector(".i-5").value;

  if (num < 0) {
    document.querySelector(".out-5").innerHTML = "m";
  } else if (num === 0) {
    document.querySelector(".out-5").innerHTML = 0;
  } else {
    document.querySelector(".out-5").innerHTML = 1;
  }
}

// Task 6.
// На сторінці є input з класом i-6, куди користувач може ввести число. Є кнопка .b-6, яка запускає функцію f6. Функція повинна вивести в .out-6 слово even, якщо число парне, і odd, якщо непарне. Для перевірки парності використовується цілочисельна остача від ділення на 2 (оператор %). Якщо остача дорівнює нулю - парне, ні - непарне.

document.querySelector(".b-6").onclick = f6;

function f6() {
  const num = +document.querySelector(".i-6").value;

  if (num % 2 === 0) {
    document.querySelector(".out-6").innerHTML = "even";
  } else {
    document.querySelector(".out-6").innerHTML = "odd";
  }
}

// Task 7.
// Дані 2 input - .i-71 і .i-72, обидва - input[type=number]. При натисканні кнопки .b-7 спрацьовує функція f7. Функція повинна число з .i-71 піднести до степеня .i-72, вивести результат в .out-7. Для піднесення до степеня можна використовувати **, або Math.pow.

document.querySelector(".b-7").onclick = f7;

function f7() {
  const base = +document.querySelector(".i-71").value;
  const exponent = +document.querySelector(".i-72").value;
  const result = base ** exponent;

  document.querySelector(".out-7").innerHTML = result;
}

// Task 8.
// Дано select s-8, який містить 3 значення: 1, 2, 3. Дана кнопка b-8. При її натисканні спрацьовує функція f8. Функція повинна отримати обране в select число, потім за допомогою switch case порівняти його по черзі з 1, 2, 3. І якщо вибрано число 1, то вивести в .out-8 рядок one, якщо 2 - two, якщо 3 - three. Нагадую - це програмування. Як зазначено в завданні - так і виводимо. Тобто Three з великої літери - помилка!

document.querySelector(".b-8").onclick = f8;

function f8() {
  const value = document.querySelector(".s-8").value;

  switch (value) {
    case "1":
      document.querySelector(".out-8").innerHTML = "one";
      break;
    case "2":
      document.querySelector(".out-8").innerHTML = "two";
      break;
    case "3":
      document.querySelector(".out-8").innerHTML = "three";
      break;
  }
}

// Task 9
// Є input з класом .i-9, куди користувач може ввести номер квартири. Є кнопка .b-9, яка запускає функцію f9. Функція повинна вивести в .out-9 номер під'їзду, в якому знаходиться квартира.
//  якщо від 1 включно до 32 включно - то вивести цифру 1
//  якщо від 33 (включно) до 43 (включно) - то вивести 2
//  якщо від 44 (включно) до 64 (включно) - то 3.
//  В іншому випадку, вивести 0.

document.querySelector(".b-9").onclick = f9;

function f9() {
  const apt = +document.querySelector(".i-9").value;
  let entrance = 0;

  if (apt >= 1 && apt <= 32) {
    entrance = 1;
  } else if (apt >= 33 && apt <= 43) {
    entrance = 2;
  } else if (apt >= 44 && apt <= 64) {
    entrance = 3;
  }

  document.querySelector(".out-9").innerHTML = entrance;
}

// Task 10
// Дано select .s-100. Після натискання кнопки, виведіть value обраного option в .out-10.

document.querySelector(".b-10").onclick = f10;

function f10() {
  const selectValue = document.querySelector(".s-100").value;
  document.querySelector(".out-10").innerHTML = selectValue;
}

// Task 11
// Дано select .s-110. При зміні стану select (подія onchange) виведіть value обраного option в .out-11.

document.querySelector(".s-110").onchange = f11;

function f11() {
  const selectedValue = document.querySelector(".s-110").value;
  document.querySelector(".out-11").innerHTML = selectedValue;
}

// Task 12
// Дано input .i-120. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в .out-12 typeof отриманої змінної. Typeof дозволяє визначити тип даних.

document.querySelector(".b-12").onclick = f12;

function f12() {
  const inputValue = document.querySelector(".i-120").value;
  document.querySelector(".out-12").innerHTML = typeof inputValue;
}

// Task 13
// Дано input i-130. На відміну від попереднього завдання - input[type="number"]. Після натискання кнопки отримайте значення з input в змінну, а потім виведіть в out-13 typeof отриманої змінної. Typeof дозволяє визначити тип даних. Якщо ви правильно все зробили - то дивно, але тип даних буде string! Подумайте чому так?

document.querySelector(".b-13").onclick = f13;

function f13() {
  const inputValue = document.querySelector(".i-130").value;
  document.querySelector(".out-13").innerHTML = typeof inputValue;
}

// Task 14
// Дано input .i-141 і .i-142, [type=number]. Дано select .s-143, який містить чотири операції - +, -, *, / . Дана кнопка b-14, при натисканні на яку спрацьовує функція f14. Функція виводить в .out-14 результат операцій, обраних в 3-му select, до чисел, введених в першому і другому input. Наприклад вибрано 1 13 +, потрібно вивести результат операції 1+13 тобто 14.

document.querySelector(".b-14").onclick = f14;

function f14() {
  const num1 = +document.querySelector(".i-141").value;
  const num2 = +document.querySelector(".i-142").value;
  const operation = document.querySelector(".s-143").value;

  let result;

  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  }

  document.querySelector(".out-14").innerHTML = result;
}

// Task 15
// Дано select .s-151 і .s-152, кожен з яких містить 1 і 0. Дано select .s-153, який містить дві операції - && і || . Дана кнопка .b-15, при натисканні на яку спрацьовує функція f15. Функція виводить в .out-15 результат логічних операцій, обраних в 3 select, до чисел, обраних в першому і другому select. Наприклад, вибрано 1 1 &&, потрібно вивести результат операції 1&&1 тобто 1 або 0.

document.querySelector(".b-15").onclick = f15;

function f15() {
  const a = +document.querySelector(".s-151").value;
  const b = +document.querySelector(".s-152").value;
  const op = document.querySelector(".s-153").value;

  let result;

  if (op === "&&") {
    result = a && b;
  } else if (op === "||") {
    result = a || b;
  }

  document.querySelector(".out-15").innerHTML = result;
}
