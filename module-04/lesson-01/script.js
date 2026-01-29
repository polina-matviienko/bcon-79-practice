// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

const b1 = document.querySelector("button.b-1");
const out1 = document.querySelector("div.out-1");

b1.onclick = fn1;

function fn1() {
  out1.innerHTML = obj1.two;
}

// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

const b2 = document.querySelector("button.b-2");
const out2 = document.querySelector("div.out-2");
b2.onclick = fn2;

function fn2() {
  out2.innerHTML = obj2["five"];
}

// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

const b3 = document.querySelector("button.b-3");
const out3 = document.querySelector("div.out-3");
b3.onclick = fn3;
function fn3() {
  for (const key in obj3) {
    obj3[key] === "hi" ? (out3.innerHTML += obj3[key] + " ") : out3.innerHTML;
  }
}

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

const b4 = document.querySelector("button.b-4");
const out4 = document.querySelector("div.out-4");

b4.onclick = fn4;

function fn4() {
  let result = "";

  for (let key in obj4) {
    result += key + " " + obj4[key] + " <br>";
  }

  out4.innerHTML = result;
  return result;
}

// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

const b5 = document.querySelector("button.b-5");
const out5 = document.querySelector("div.out-5");

b5.onclick = function () {
  fn5(obj5, out5);
};

function fn5(object, selector) {
  let str = "";

  for (const key in object) {
    str += key + " " + object[key] + " <br>";
  }

  selector.innerHTML = str;
}

// Task 6
const obj6 = {
  b: 17,
  e: 22,
};

const i61 = document.querySelector(".i-61");
const i62 = document.querySelector(".i-62");
const b6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");

b6.onclick = fn6;

function fn6() {
  const key = i61.value;
  const value = i62.value;

  obj6[key] = value;

  fn5(obj6, out6);
}

// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

const i7 = document.querySelector(".i-7");
const b7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");

b7.onclick = fn7;

function fn7() {
  const key = i7.value;
  let result = 0;

  if (key in obj7) {
    result = 1;
  }

  out7.textContent = result;
}

// Task 8
const obj8 = {
  b: 17,
  e: 22,
};

const i8 = document.querySelector(".i-8");
const b8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");

b8.onclick = fn8;

function fn8() {
  const key = i8.value;
  let result = 0;

  if (key in obj8) {
    result = obj8[key];
  }

  out8.textContent = result;
}

// Task 9
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

const i9 = document.querySelector(".i-9");
const b9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

b9.onclick = fn9;

function fn9() {
  const value = i9.value;
  let result = "";

  for (const key in obj9) {
    if (obj9[key] == value) {
      result += key + " ";
    }
  }

  out9.textContent = result;
}

// Task 10
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

const test10 = 22;
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = fn10;

function fn10() {
  for (const key in obj10) {
    if (test10 === obj10[key]) {
      out10.innerHTML = true;
      return;
    }
  }
  out10.innerHTML = false;
}

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

const btn11 = document.querySelector(".b-11");
const input11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");

btn11.onclick = fn11;

function fn11() {
  const key = input11.value;

  if (obj11.hasOwnProperty(key)) {
    delete obj11[key];
  }

  fn5(obj11, out11);
}

// Task 12
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

const btn12 = document.querySelector(".b-12");
const input12 = document.querySelector(".i-12");
const out12 = document.querySelector(".out-12");

btn12.onclick = fn12;

function fn12() {
  const value = +input12.value;

  for (const key in obj12) {
    if (obj12[key] === value) {
      delete obj12[key];
    }
  }

  out12.innerHTML = "";
  for (const key in obj12) {
    out12.innerHTML += key + ": " + obj12[key] + "<br>";
  }
}

// Task 13
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
};

const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");

btn13.onclick = fn13;

function fn13() {
  let sum = 0;

  for (const key in obj13) {
    if (typeof obj13[key] === "number") {
      sum += obj13[key];
    }
  }

  out13.innerHTML = sum;
}

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

const btn14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");

btn14.onclick = fn14;

function fn14() {
  let result = "";

  for (const key in obj14) {
    result += obj14[key][0] + " ";
  }

  out14.innerHTML = result.trim();
}

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

const btn15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");

btn15.onclick = fn15;

function fn15() {
  let result = "";

  for (const key in obj15) {
    for (let i = 0; i < obj15[key].length; i++) {
      result += obj15[key][i] + " ";
    }
  }

  out15.innerHTML = result.trim();
}

// Task 16
const obj16 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

const btn16 = document.querySelector(".b-16");
const out16 = document.querySelector(".out-16");

btn16.onclick = fn16;

function fn16() {
  let result = "";

  for (const key in obj16) {
    result += obj16[key].name + " ";
  }

  out16.innerHTML = result.trim();
}

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

const btn17 = document.querySelector(".b-17");
const out17 = document.querySelector(".out-17");

btn17.onclick = fn17;

function fn17() {
  let result = "";

  for (const key in obj17) {
    if (obj17[key].age > 30) {
      result += obj17[key].name + " ";
    }
  }

  out17.innerHTML = result.trim();
}

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

const btn18 = document.querySelector(".b-18");
const input18 = document.querySelector(".i-18");
const out18 = document.querySelector(".out-18");

btn18.onclick = fn18;

function fn18() {
  const branch = input18.value;
  let result = "";

  if (obj18.hasOwnProperty(branch)) {
    for (let i = 0; i < obj18[branch].length; i++) {
      result += obj18[branch][i] + " ";
    }
  }

  out18.innerHTML = result.trim();
}

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

const btn19 = document.querySelector(".b-19");
const input19 = document.querySelector(".i-19");
const out19 = document.querySelector(".out-19");

btn19.onclick = fn19;

function fn19() {
  const station = input19.value.toLowerCase();
  let color = "";

  for (const key in obj19) {
    for (let i = 0; i < obj19[key].length; i++) {
      if (obj19[key][i].toLowerCase() === station) {
        color = key;
        break;
      }
    }
    if (color) break;
  }

  out19.innerHTML = color;
}

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};

const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");

btn20.onclick = fn20;

function fn20() {
  let result = "";

  for (const key in obj20) {
    for (let i = 0; i < obj20[key].length; i++) {
      if (obj20[key][i][1] === 2) {
        result += obj20[key][i][0] + " ";
      }
    }
  }

  out20.innerHTML = result.trim();
}
