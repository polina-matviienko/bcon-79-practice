//TODO: Join, Split, ForEach
// Task 1
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

const out1 = document.querySelector(".out-1");
const b1 = document.querySelector(".b-1");
b1.onclick = fn1;

function fn1() {
  const arr1_res = [];
  arr1.forEach(el => {
    arr1_res.push(el * 2);
  });
  out1.textContent = arr1_res.join(", ");
}

// Task 2
const arr2 = [2, 3, 4, 5, 10, 11, 12];

const out2 = document.querySelector(".out-2");
const b2 = document.querySelector(".b-2");

b2.onclick = fn2;

function fn2() {
  const arr2_res = [];

  arr2.forEach(el => {
    arr2_res.push(el / 2);
  });

  out2.textContent = arr2_res.join(", ");
}

// Task 3
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"];

const out3 = document.querySelector(".out-3");
const b3 = document.querySelector(".b-3");

b3.onclick = fn3;

function fn3() {
  const arr3_res = [];

  arr3.forEach(el => {
    if (typeof el === "number") {
      arr3_res.push(el);
    }
  });

  out3.textContent = arr3_res.join(", ");
}

// Task 4
const spans4 = document.querySelectorAll(".task-4");
const out4 = document.querySelector(".out-4");

const arr4_res = [];

function fn4() {
  arr4_res.length = 0; // очищаємо масив при кожному запуску

  spans4.forEach(span => {
    arr4_res.push(span.getAttribute("data"));
  });

  out4.textContent = arr4_res.join(", ");
}

// Task 5
const p5 = document.querySelectorAll(".task-5");
const out5 = document.querySelector(".out-5");
const arr5_res = [];

p5.forEach(p => {
  p.onclick = fn5;
});

function fn5() {
  arr5_res.push(this.getAttribute("data"));
  out5.textContent = arr5_res.join(", ");
}

// Task 6
const str6 = "helloworld";

const out6 = document.querySelector(".out-6");
const b6 = document.querySelector(".b-6");

b6.onclick = fn6;

function fn6() {
  const arr6_res = str6.split("");
  out6.textContent = arr6_res.join(", ");
}

// Task 7
const str7 = "hello world hi mazai";

const out7 = document.querySelector(".out-7");
const b7 = document.querySelector(".b-7");

b7.onclick = fn7;

function fn7() {
  const arr7_res = str7.split(" ");
  out7.textContent = arr7_res.join(", ");
}

// Task 8
const arr8 = [1, 2, 66, 77, 15];

const out8 = document.querySelector(".out-8");
const b8 = document.querySelector(".b-8");

b8.onclick = fn8;

function fn8() {
  const arr8_res = arr8.join("-");
  out8.textContent = arr8_res;
}

// Task 9
const arr9 = [
  ["hi", "mahai"],
  ["test", "best"],
];

const out9 = document.querySelector(".out-9");
const b9 = document.querySelector(".b-9");

b9.onclick = fn9;

function fn9() {
  const arr9_res = arr9.flat().join("-");
  out9.textContent = arr9_res;
}

// Task 10
const arr10 = { name: "ivan", age: 15, sex: 1, id: 45 };

const out10 = document.querySelector(".out-10");
const b10 = document.querySelector(".b-10");

b10.onclick = fn10;

function fn10() {
  const arr10_res = Object.entries(arr10)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  out10.textContent = arr10_res;
}

//TODO: MAP FILTER
// Task 11
const arr11 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

const out11 = document.querySelector(".out-11");
const b11 = document.querySelector(".b-11");

b11.onclick = fn11;

function fn11() {
  const arr11_res = arr11.map(num => num * 2);
  out11.textContent = arr11_res;
}

// Task 12
const arr12 = [2, 3, 4, 5, 10, 11, 12];

const out12 = document.querySelector(".out-12");
const b12 = document.querySelector(".b-12");

b12.onclick = fn12;

function fn12() {
  const arr12_res = arr12.map(num => num ** 2);
  out12.textContent = arr12_res;
}

// Task 13
const arr13 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

const out13 = document.querySelector(".out-13");
const b13 = document.querySelector(".b-13");

b13.onclick = fn13;

function fn13() {
  const arr13_res = arr13.map(el => Number(el));
  out13.textContent = arr13_res;
}

// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

const out14 = document.querySelector(".out-14");
const b14 = document.querySelector(".b-14");

b14.onclick = fn14;

function fn14() {
  const arr14_res = arr14.filter(el => typeof el === "number");
  out14.textContent = arr14_res;
}

// Task 15
const arr15 = [3, 14, 15, 92, "6"];

const out15 = document.querySelector(".out-15");
const b15 = document.querySelector(".b-15");

b15.onclick = fn15;

function fn15() {
  const arr15_res = arr15.filter(el => typeof el === "number" && el % 2 === 0);
  out15.textContent = arr15_res;
}

// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];

const out16 = document.querySelector(".out-16");
const b16 = document.querySelector(".b-16");

b16.onclick = fn16;

function fn16() {
  const arr16_res = arr16.filter(el => typeof el === "number" && el > 14);
  out16.textContent = arr16_res;
}

// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];

const out17 = document.querySelector(".out-17");
const b17 = document.querySelector(".b-17");

b17.onclick = fn17;

function fn17() {
  const arr17_res = arr17.map(el => el.toLowerCase());
  out17.textContent = arr17_res;
}

// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];
const out18 = document.querySelector(".out-18");
const b18 = document.querySelector(".b-18");

b18.onclick = fn18;

function fn18() {
  const arr18_res = arr18
    .map((el, index) => (el % 2 === 0 ? index : -1))
    .filter(index => index !== -1);

  out18.textContent = arr18_res;
}

// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];

const out19 = document.querySelector(".out-19");
const b19 = document.querySelector(".b-19");

b19.onclick = fn19;

function fn19() {
  arr19.forEach((el, i, arr) => {
    arr[i] = el.toLowerCase();
  });
  out19.textContent = arr19.join(", ");
  return arr19;
}

// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

const out20 = document.querySelector(".out-20");
const b20 = document.querySelector(".b-20");

b20.onclick = fn20;

function fn20() {
  arr20.forEach((el, i, arr) => {
    if (el < 0) {
      arr[i] = 0;
    }
  });
  out20.textContent = arr20.join(", ");
  return arr20;
}

// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

const out21 = document.querySelector(".out-21");
const b21 = document.querySelector(".b-21");

b21.onclick = fn21;

function fn21() {
  const arr21_res = arr21.filter((el, i) => i % 2 === 0);
  out21.textContent = arr21_res.join(", ");
  return arr21_res;
}

// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];

const out22 = document.querySelector(".out-22");
const b22 = document.querySelector(".b-22");

b22.onclick = fn22;

function fn22() {
  const result = Array.isArray(arr22);
  out22.textContent = result;
  return result;
}

// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 9;

const out23 = document.querySelector(".out-23");
const b23 = document.querySelector(".b-23");

b23.onclick = fn23;

function fn23() {
  const result = arr23.includes(arr23_num);
  out23.textContent = result;
  return result;
}

// Task 24
const arr24 = ["c", "C", "d", "e", "E"];
const arr24_sum = "e";

const out24 = document.querySelector(".out-24");
const b24 = document.querySelector(".b-24");

b24.onclick = fn24;

function fn24() {
  const result = arr24
    .map(el => el.toLowerCase())
    .includes(arr24_sum.toLowerCase());
  out24.textContent = result;
  return result;
}

// Task 25
const arr25 = [
  { name: "Mango", pnum: "tr7862" },
  { name: "Poly", pnum: "" },
  { name: "Ajax", pnum: "im7961" },
  { name: "Didi", pnum: "tr786259" },
];

const out25 = document.querySelector(".out-25");
const b25 = document.querySelector(".b-25");

b25.onclick = fn25;

function fn25() {
  const arr25_res = arr25.filter(
    user => user.pnum !== "" && user.pnum.length === 6
  );
  out25.textContent = JSON.stringify(arr25_res, null, 2);
  return arr25_res;
}
