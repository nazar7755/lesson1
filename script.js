// const age = 10;
// const firstName = "Nazar";

// console.log(age);
// console.log(firstName);

// const isVIP = true;
// console.log(isVIP);

// // const type = typeof 5;
// // console.log(type);

// console.log("This is a number", age);

// console.log("before");
// alert("Hello!");
// console.log("after");

// const shoudRenew = confirm("Хотите купить этот товар ?");
// console.log(shoudRenew);

// let userInput = prompt("Введите число 52");
// userInput = Number(userInput);
// console.log(typeof userInput);
// console.log(userInput === 52);

// console.log("5" == 5);

// const value = "qwerty";

// const number = Number(value);

// console.log(number);

// const blockWidth = "300.5px";
// const width = Number.parseFloat(blockWidth);

// console.log(typeof width);

// let number = prompt("Введите число");
// number = Number(number);
// let power = prompt("Введите степень ");
// power = Number(power);
// console.log(number);
// console.log(power);

// const result = Math.pow(number, power);
// console.log(result);

// const firstName = "Nazar";
// const lastName = "Chornovol";
// const room = "15";
// const type = "VIP";

// const fullName = firstName + " " + lastName;

// console.log(fullName);

// const message =
//   "Гость " +
//   firstName +
//   " " +
//   lastName +
//   " " +
//   "поселяется в " +
//   type +
//   " номер " +
//   room;

// const message = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

// console.log(message);

// const value = "QWERTY";

// const input = prompt("Что хочешь");

// console.log("input before", input);
// console.log("input after", input);
// const normalizInput = input.toLowerCase();
// console.log("normalizInput: ", normalizInput);
// console.log(value === normalizInput);

// const number = 60;

// const isInRange = number > 10 && number < 30;

// console.log(`Число ${number} попадает в отрезок от 10 до 30`, isInRange);

// const isInRange = number < 10 || number > 30;

// console.log(`Число ${number} попадает в отрезок от 10 до 30`, isInRange);
// console.log(0 || false || 0);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("canOpenChat: ", canOpenChat);

// const subscription = "pro";
// const canAccessContent = subscription === "pro" || subscription === "vip";
// console.log(" canAccessContent:", canAccessContent);
// console.log(" canAccessContent:", canAccessContent);

// console.log("before");
// if (5 > 30) {
//   // тело
//   console.log("inside");
// }
// console.log("after");

// let balance = 1000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} гривен. Проверяем количество доступный средств на вашем балансе`
// );

// if (balance >= payment) {
//   balance = balance - payment;
//   console.log(`Покупка успешна! Спасибо за покупку!`);
//   console.log(`На счету осталось ${balance} гривен`);
// } else {
//   console.log("Недостаточно средств!");
// }

const totalExpenses = 5000000000;
const payment = 5000;
let discount = 0;

if (totalExpenses >= 100 && totalExpenses < 1000) {
  discount = 0.02;
  console.log("Бронзовый партнер, скидка 2%");
} else if (totalExpenses >= 1000 && totalExpenses < 5000) {
  discount = 0.05 % console.log("Сребрянный партнер, скидка 5%");
} else if (totalExpenses >= 5000) {
  discount = 0.2 % console.log("Золотой партнер, скидка 20%");
} else {
  console.log("У вас пока что нету партнерской скидки");
}

const finalAmount = payment - payment * discount;

console.log(finalAmount);

console.log(`Оформляем заказ со скидкой ${discount}%`);

// const age = 16;
// const category = age >= 18 ? "adult" : "child";

// if (age >= 18) {
//   category = "adult";
// } else {
//   category = "child";
// }

// console.log(category);

// if (stars === 1) {
//   console.log("1");
// } else if (stars === 2) {
//   console.log("2");
// } else if (stars === 3) {
//   console.log("3");
// } else if (stars === 4) {
//   console.log("4");
// } else if (stars === 5) {
//   console.log("5");
// } else {
//   console.log("Неверный ввод");
// }

// const stars = 6;
// let price = 0;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//   case 3:
//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 100;
//     break;

//   default:
//     result = "Неверный ввод";
// }
// console.log(price);

// for (let i = 0; i < 5; i += 1) {
//   console.log(`i ${i}`);
// }

// let userInput = prompt("Введите число");
// userInput = Number(userInput);
// let total = 0;
// for (let i = 1; i <= userInput; i += 1) {
//   total += i;
// }
// console.log(`Total = ${total}`);

// const number = 5;
// let total = 0;
// let i = 1;

// while (i <= number) {
//   total += i;

//   i += 1;
// }

// console.log(`Total = ${total}`);

// let userInput;
// do {
//   userInput = prompt("Print 5");

//   if (userInput === null) {
//     break;
//   }
//   userInput = Number(userInput);
// } while (userInput !== 5);
// console.log(userInput);
