//1)  Підрахунок кількості повторень кожного елемента (метод reduce)
// Опис: Дано масив рядків, де можуть бути повторювані елементи.
// Підрахуйте кількість кожного елемента і поверніть об'єкт, де ключі —
// це елементи масиву, а значення — кількість їх повторень.

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

const result = arr.reduce(function (accumulator, currentValue) {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(result);

// 2. Пошук найдовшого слова в масиві рядків (метод reduce)
// Опис: Дано масив рядків. Знайдіть найдовше слово в масиві.

const arr2 = ["orange", "apple", "watermelon"];

//як би я робила через цикл:
let longestWord = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i].length > longestWord.length) {
    longestWord = arr2[i];
  }
}
console.log(longestWord);

//reduce

const longestWord2 = arr2.reduce((fruitList, currentFruit) => {
  if (currentFruit.length > fruitList.length) {
    return currentFruit;
  } else {
    return fruitList;
  }
});
console.log(longestWord2);

// 3. Глибоке копіювання об'єкта
// Опис: Дано вкладений об'єкт, що містить інформацію про користувача і його вподобання.
// Створіть глибоку копію цього об'єкта так, щоб зміни в копії не зачіпали оригінал.
// Перевірте, що зміни в копії не впливають на оригінал.

// const user = {
//   name: 'John',
//   age: 30,
//   preferences: {
//     favoriteColor: 'blue',
//     hobbies: ['reading', 'gaming']
//   }
// };

const user = {
  name: "John",
  age: 30,
  preferences: {
    favoriteColor: "blue",
    hobbies: ["reading", "gaming"],
  },
};

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const userCopy = deepCopy(user);

userCopy.preferences.favoriteColor = "red";
userCopy.name = "Tana";

console.log(userCopy);
console.log(user);

// 4. Поверхневе копіювання з додаванням властивостей
// Опис: Дано об'єкт, що представляє книгу.
// Створіть нову копію цього об'єкта і додайте до нього нову властивість — рейтинг книги.
// При цьому зміни в новій копії не повинні впливати на оригінальний об'єкт.

// const book = {
//   title: 'JavaScript: The Good Parts',
//   author: 'Douglas Crockford',
//   year: 2008
// };

const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};

const bookCopy = Object.assign({}, book);
bookCopy.rating = "5/10";
console.log(bookCopy);

// 5. Підрахунок частоти елементів
// Опис: Дано масив чисел. Використовуйте об'єкт Map для підрахунку частоти кожного числа в масиві.
// Поверніть об'єкт Map, де ключами будуть числа з масиву, а значеннями — їх частота.

// const numbers = [1, 2, 3, 2, 4, 3, 3, 5, 1, 4];

const numbers = [1, 2, 3, 2, 4, 3, 3, 5, 1, 4];
const frequencyMap = new Map();
numbers.forEach(function (number) {
  if (frequencyMap.has(number)) {
    frequencyMap.set(number, frequencyMap.get(number) + 1);
  } else {
    frequencyMap.set(number, 1);
  }
});

console.log(frequencyMap);

// 6. Зберігання даних про користувачів
// Опис: Вам потрібно створити систему управління даними користувачів, де кожному користувачеві відповідає його ID.
// Використовуйте об'єкт Map для зберігання даних про користувачів, таких як ім'я, вік та email.
// Напишіть функції для додавання нового користувача,
// отримання інформації про користувача за ID і видалення користувача за ID.

const userMap = new Map([
  ["222222", { name: "Tana", age: 18, email: "example.com" }],
  ["333333", { name: "Alex", age: 25, email: "example.com" }],
]);

function addUser(id, user) {
  userMap.set(id, user);
}
addUser("44444", { name: "Kate", age: 18, email: "example.com" });

function deleteUser(id) {
  return userMap.delete(id);
}

function getInfo(id) {
  return userMap.get(id);
}

console.log(userMap);

console.log(getInfo("44444"));
console.log(deleteUser("333333"));
console.log(getInfo("333333"));
