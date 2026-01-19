// 1
const a = 7;
const b = 9;
const result1 = a * b;
console.log("🚀 ~ result1:", result1);

// 2
const c = 7;
const d = 9;
const out2 = document.querySelector(".out-2");
out2.textContent = c / d;

// 3
const e = 3;
const f = 5;
const out3 = document.querySelector(".out-3");
out3.textContent = e + f;

// 4
const e1 = "3";
const f1 = 5;
const out4 = document.querySelector(".out-4");
out4.textContent = e1 + f1;

// 5
const e2 = 3;
const f2 = 0;
const out5 = document.querySelector(".out-5");
out5.textContent = e2 / f2;

// 6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
out6.textContent = e3 + f3;

// 7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
out7.textContent = e4 * f4;

// 8
const btn8 = document.querySelector(".b-8");
const input8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");

btn8.onclick = fn8;

function fn8() {
  out8.textContent = input8.value;
  input8.value = "";
}

// 9
const btn9 = document.querySelector(".b-9");
const input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = t9;

function t9() {
  out9.textContent = input9.value;
  input9.value = "";
}

// 10
const btn10 = document.querySelector(".b-10");
const input10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = t10;

function t10() {
  out10.textContent = input10.value * 20;
}

// 11
const btn11 = document.querySelector(".b-11");
const input11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");

btn11.onclick = t11;

function t11() {
  out11.textContent = input11.value + 55;
}

// 12
const btn12 = document.querySelector(".b-12");
const inputName = document.querySelector(".i-12-1");
const inputSurname = document.querySelector(".i-12-2");
const out12 = document.querySelector(".out-12");

btn12.onclick = t12;

function t12() {
  // out12.textContent = "Hello " + inputName.value + " " + inputSurname.value;
  out12.textContent = `Hello ${inputName.value} ${inputSurname.value}`;
}

// 13
const btn13 = document.querySelector(".b-13");
const input13_1 = document.querySelector(".i-13-1");
const input13_2 = document.querySelector(".i-13-2");
const out13 = document.querySelector(".out-13");

btn13.onclick = t13;

function t13() {
  const a = Number(input13_1.value);
  const b = Number(input13_2.value);

  out13.textContent = a + b;
}

// 14
const btn14 = document.querySelector(".b-14");
const input14 = document.querySelector(".i-14");

btn14.onclick = t14;

function t14() {
  input14.value = "Go";
}

// 15
document.querySelector(".b-15").onclick = t15;

function t15() {
  const input = document.querySelector(".i-15");
  input.style.border = "4px solid red";
}

// 16
document.querySelector(".b-16").onclick = t16;

function t16() {
  const a = document.querySelector(".i-16-1").value;
  const b = document.querySelector(".i-16-2").value;

  document.querySelector(".out-16").textContent = a + b;
}

// 17
document.querySelector(".b-17").onclick = t17;

function t17() {
  const input = document.querySelector(".i-17").value;
  document.querySelector(".out-17-1").textContent = parseInt(input);
  document.querySelector(".out-17-2").textContent = parseFloat(input);
  document.querySelector(".out-17-3").textContent = Number(input);
}

// 18
document.querySelector(".b-18").onclick = t18;

function t18() {
  const a = document.querySelector(".i-18").value;
  document.querySelector(".out-18").textContent = parseFloat(a);
}

// 19
document.querySelector(".b-19").onclick = t19;

function t19() {
  const a = +document.querySelector(".i-19-1").value;
  const b = +document.querySelector(".i-19-2").value;
  document.querySelector(".out-19").textContent = a + b;
}

// 20
let count = 0;

document.querySelector(".b-20").onclick = function () {
  count++;
  document.querySelector(".out-20").textContent = count;
};
