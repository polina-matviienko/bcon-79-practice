// Task 01

const out1 = document.querySelector(".out-1");
const b1 = document.querySelector(".b-1");
b1.onclick = fn1;
function fn1() {
  out1.textContent = 1;
}

// Task 02

const out2 = document.querySelector(".out-2");
const b2 = document.querySelector(".b-2");
b2.onclick = fn2;
function fn2() {
  out2.textContent = 2;
}

// Task 03

const out3 = document.querySelector(".out-3");
const b3 = document.querySelector(".b-3");
b3.onclick = fn3;
function fn3() {
  out3.textContent = 3;
}

// Task 04

const i4 = document.querySelector(".i-4");
const out4 = document.querySelector(".out-4");
const b4 = document.querySelector(".b-4");
b4.onclick = fn4;
function fn4() {
  out4.textContent = i4.checked;
}

// Task 05

const i5 = document.querySelector(".i-5");
const out5 = document.querySelector(".out-5");
const b5 = document.querySelector(".b-5");
b5.onclick = fn5;
function fn5() {
  out5.textContent = i5.checked ? i5.value : false;
}

// Task 06

const i6 = document.querySelector(".i-6");
const out6 = document.querySelector(".out-6");
const b6 = document.querySelector(".b-6");
b6.onclick = fn6;
function fn6() {
  out6.textContent = i6.value;
}

// Task 07

const i7 = document.querySelector(".i-7");
const out71 = document.querySelector(".out-71");
const out72 = document.querySelector(".out-72");
const b7 = document.querySelector(".b-7");
b7.onclick = fn7;
function fn7() {
  out71.textContent = i7.value;
  out72.textContent = i7.value.length >= 6 ? 1 : 0;
}

// Task 08

const out8 = document.querySelector(".out-8");
const b8 = document.querySelector(".b-8");
b8.onclick = fn8;
function fn8() {
  out8.textContent = "";
  const newDiv = document.createElement("div");
  newDiv.className = "js2";
  newDiv.textContent = "new div";
  out8.append(newDiv);
}

// Task 09

const r9 = document.querySelector(".r-9");
const out9 = document.querySelector(".out-9");
const b9 = document.querySelector(".b-9");
b9.onclick = fn9;
function fn9() {
  out9.textContent = r9.checked ? r9.value : false;
}

// Task 10

const i10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");
const b10 = document.querySelector(".b-10");
b10.onclick = fn10;
function fn10() {
  out10.style.background = i10.value;
}

// Task 11

const i111 = document.querySelector(".i-111");
const i112 = document.querySelector(".i-112");
const b11 = document.querySelector(".b-11");
b11.onclick = fn11;
function fn11() {
  i112.value = i111.value;
}

// Task 12

const i12 = document.querySelector(".i-12");
const out12 = document.querySelector(".out-12");
const b12 = document.querySelector(".b-12");
b12.onclick = fn12;
function fn12() {
  out12.innerHTML = i12.value;
}

// Task 13

const i13 = document.querySelector(".i-13");
const out13 = document.querySelector(".out-13");
i13.oninput = fn13;
function fn13() {
  out13.innerHTML = i13.value;
}

// Task 14

const t14 = document.querySelector(".t-14");
const out14 = document.querySelector(".out-14");
const b14 = document.querySelector(".b-14");
b14.onclick = fn14;
function fn14() {
  out14.innerHTML = t14.value;
}

// Task 15

const i15 = document.querySelector(".i-15");
const t15 = document.querySelector(".t-15");
const out15 = document.querySelector(".out-15");
const b15 = document.querySelector(".b-15");
b15.onclick = fn15;
function fn15() {
  t15.value = i15.value;
  out15.innerHTML = i15.value;
}

// Task 16

const s16 = document.querySelector(".s-16");
const out16 = document.querySelector(".out-16");
const b16 = document.querySelector(".b-16");

b16.onclick = fn16;

function fn16() {
  out16.textContent = s16.value;
}

// Task 17

const s17 = document.querySelector(".s-17");
const out17 = document.querySelector(".out-17");

s17.onchange = fn17;

function fn17() {
  //   const currentOption = s17.value;
  //     out17.textContent = currentOption;
  const currentOption = s17.selectedOptions[0].value;
  out17.textContent = currentOption;
}

// Task 18

const s18 = document.querySelector(".s-18");
const i18 = document.querySelector(".i-18");

s18.onchange = fn18;

function fn18() {
  i18.value = s18.value;
}

// Task 19

const i19 = document.querySelector(".i-19");
const out19 = document.querySelector(".out-19");
const b19 = document.querySelector(".b-19");

b19.onclick = fn19;

function fn19() {
  i19.value = out19.textContent;
}

// Task 20

const s201 = document.querySelector(".s-201");
const s202 = document.querySelector(".s-202");

s201.onchange = fn20;

function fn20() {
  s202.value = s201.value;
}
