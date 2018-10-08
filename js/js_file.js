// var name = prompt('Enter your name', 'name');
// alert('Your' + ' name' + ' is ' + name);



// var year = +prompt('How old are you', 'enter your age');
// if (!isNaN(year)) {
//     if (year < 18) {
//         alert('You can not join the team');
//     } else if (year > 40) {
//         alert('Sorry, it is too late for you');
//     } else {
//         alert('Hello! You are accepted');
//     }
// } else {
//     alert('Not valid year');
// }




// var age = prompt('возраст?', 18);

// var message = (age < 3) ? 'Здравствуй, малыш!' :
//     (age < 18) ? 'Привет!' :
//         (age < 100) ? 'Здравствуйте!' :
//             'Какой необычный возраст!';
//
// alert( message );



//
// var message;
//
// if (age < 3) {
//     message = 'Здравствуй, малыш!';
// } else if (age < 18) {
//         message = 'Привет!';
//     } else if (age < 100) {
//             message = 'Здравствуйте!';
//         } else {
//             message = 'Какой необычный возраст!';
// }
//
// alert (message);



// var name = prompt('«Каково «официальное» название JavaScript?».', '');
//
// if (name == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? «ECMAScript»!');
// }


// var value = +prompt('Значение', '');
//
// if (value > 0) {
//     message = '1';
// } else if (value < 0) {
//     message = '-1';
// } else {
//     message = '0';
// }
// alert (message)


// var login = prompt('Кто пришел', '');
//
// if (login == null) {
//     message = 'Вход отменен';
// } else {
//     if (login === 'Админ') {
//         var password = prompt('Пароль', '');
//         if (password === 'Черный властелин') {
//             message = 'Добро пожаловать';
//         } else if (password == null) {
//             message = 'Вход отменен';
//         } else {
//             message = 'Пароль неверен';
//         }
//     } else {
//         message = 'Я вас не знаю';
//     }
// }
// alert (message);



// var login = prompt('Текст', '');
// var message = (login === 'Вася') ? 'Привет':
//     login === 'Директор' ? 'Здравствуйте' :
//     (login === '') ? 'Нет логина':
//         '';
// alert(message);


// var age = +prompt('Возраст', '');
// if (age >= 14 && age <= 90) {
//     message = 'Ok';
// } else {
//     message = 'Bad';
// }
// alert (message);


// var age = +prompt('Возраст', '');
// if (age !== 14 && age !== 90) {
//     message = 'Ok';
// } else {
//     message = 'Bad';
// }
// alert (message);

// switch (browser) {
//     case 'IE':
//         alert( 'О, да у вас IE!' );
//         break;
//
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert( 'Да, и эти браузеры мы поддерживаем' );
//         break;
//
//     default:
//         alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

// var browser = 'Firefox';
//
// if (browser === 'IE') {
//     alert('О, да у вас IE!');
// } else {
//     if (browser === 'Chrome' || 'Opera' || 'Firefox' || 'Safari') {
//         alert('Да, и эти браузеры мы поддерживаем');
//     } else {
//         alert( 'Мы надеемся, что и в вашем браузере все ок!' );
//     }
// }

// var a = +prompt('a?', '');
//
// if (a == 0) {
//     alert( 0 );
// }
// if (a == 1) {
//     alert( 1 );
// }
//
// if (a == 2 || a == 3) {
//     alert( '2,3' );
// }

// var a = +prompt('a?', '');
//
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
// }


// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Родители разрешили?');
// }
// alert(age);

// function checkAge(age) {
//     return age > 18 || confirm('Родители разрешили?')
// }
// alert(age);

// function checkMin(a,b) {
//     if (a > b) {
//         return b;
//     } else {
//             return a;
//     }
// }
// alert(a,b)

//
// var x = +prompt('Price:', '');
// var y = +prompt('Sale:', '');
//
// function price(pr, per) {
//     var sale = pr * per / 100;
//     return pr - sale;
// }
// var a = price(x, y);
//
// alert(a);


// var a = prompt('Enter the number', '');
//
// function giveStatus(x) {
//     var message;
//     switch (x) {
//         case '1':
//             message = 'success';
//             break;
//         case '2':
//             message = 'error';
//             break;
//         case '3':
//             message = 'pending';
//             break;
//
//         default:
//             message = 'unknown';
//
//     }
//     return message;
// }
// var b = giveStatus(a);
// alert(b);


// var first = 2;
// var second = 5;
//
// function getAvarage(a, b) {
//     return (a + b) / 2;
// }
// var y = getAvarage(first, second);
// alert(y);



// function getPar(x, y) {
//     var z = x+y;
//     return z;
// }
// var sum = getPar(1, 2);
// alert (sum);

// function getPar(x,y) {
//      return x+y;
// }
// var one = getPar(1,2);
// alert(one);


// function mult(x,y,z) {
//     return x*y*z;
// }
// var a = mult(1, 2, 3);
// alert(a);


//
// var mult = function (x, y, z) {
//     return x*y*z;
// };
// var a = mult(1, 2, 3);
// alert(a);


// var name = prompt('Enter the name', '');
//
// function checkName(n) {
//     if (n === 'Elia') {
//         alert('Hi ' + n);
//     } else {
//         alert('Enter correct name');
//     }
// }
// checkName(name);


// function checkType(n) {
//     return typeof n;
// }
// var test = checkType('');
// console.log(test);


// var a = 15;
//
// while (a > 10) {
//     alert(a);
//     a--;
// }


// for (var a = 15; a > 10; a--) {
//     alert(a);
// }



// for (var num = 2; num < 10; num++) {
//    if (num % 2 === 0) {
//        alert(num);
//    }
// }


// var num;
//
// while (num = +prompt('Enter the number more than 100', '101')) {
//   if (num > 100) {
//       break;
//   }
// }




// var user = {};
// user.name = 'Вася';
// user.surname = 'Петров';
// user.name = 'Сергей';
// delete user.name;


// var user = {
//     name: 'Вася',
//     surname: 'Петров'
// };
// // var key = 'name';
// // user[key];
//
// console.log(user.name);
// console.log(user['name']);
//
// var key = 'name';
// console.log(user[key]);

// var user = {
//     name: 'Tanya',
//     surname: 'Andr'
// };
//
// user.name = 'Elia';
// alert(user.name);



// var user = {
//     name: 'Elia',
//     surname: 'Mamedova',
//     age: '23'
// };
//
// for (var key in user) {
//     alert('Data of the user: ' + key +' is ' + user[key]);
// }



// function isEmpty(obj) {
//
//    for (var key in obj) {
//        return false;
//    }
//
//    return true;
// }
//
// var schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "подъём";
//
// alert( isEmpty(schedule) ); // false


// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
//
// function checkSumSalaries(obj) {
//
//     var sum = 0;
//
//     for (var sal in obj) {
//        sum += obj[sal];
//     }
//
//     return sum;
// }

// var total = checkSumSalaries(salaries);

// var obj = {
//     sum: function (a, b) {
//         return a + b;
//     }
// };
//
//
// var sum = obj.sum(1, 2);
// alert(sum);



// var goods = ['test', 'test1', 'test2', 'test3'];
//
// alert(goods[goods.length - 1]);



// var goods = ['test', 'test1', 'test2', 'test3'];
//
// goods.push('Computer');
// alert(goods);



// var styles = ['Jazz', 'Blues'];
//
// styles.push('Rock-and-Roll');
// styles[styles.length - 2] = 'Classic';
// alert(styles.shift());
// styles.unshift('Rep', 'Reggy');


// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//
// var rand = Math.floor(Math.random() * arr.length );
//
// alert(arr[rand]);


// var number;
// var arraySum = [];
//
// while (number = prompt('Enter the number', '')) {
//     var newNum = +number;
//
//     if (newNum === true) {
//
//
//        arraySum += number;
//    }
// }
//
// alert(arraySum);


// var arrR = ["test", 2, 1.5, false];
//
// function find(arr, value) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// }
//
// var findR = find(arrR, 2);
// alert(findR);


// var arr = [5, 4, 3, 8, 0];
//
// function filterRange(arr1, a, b) {
//     var filtered = [];
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr1[i] >= a && arr1[i] <= b) {
//             filtered.push(arr1[i]);
//         }
//     }
//     return filtered;
// }
//
// var test = filterRange(arr, 3, 5);
// alert(test);


// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }
//
// alert( arrLength ); // 4,5,2,5



// var arr = ["Есть", "жизнь", "на", "Марсе"];
//
// var arrLength = arr.map(function(name) {
//     return name.length;
// });
// alert( arrLength );


// arr = [1,2,3,4,5];
//
// var sum = arr.map(function (value, index) {
//     return arr.slice(0, ++index).reduce(function (sum, cur) {
//       return sum + cur;
//     })
// });
// alert(sum);


// var obj = {
//     className: 'open menu'
// };
//
// function addClass(obj, cls) {
//     var result = obj.className.split(' ');
//     //console.log(result);
//     result.forEach(function (value) {
//         if (value !== cls && result.indexOf(cls) === -1) {
//             result.push(cls);
//         }
//     });
//     //console.log(result);
//     obj.className = result.join(' ');
// }
//
// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
//
// alert( obj.className ); // "open menu new me"




// function cameLize(str){
//     var result = str.split('-');
//     // console.log(result);
//     var result1 = [];
//
//     result.forEach(function (value, key) {
//         if (key !== 0) {
//             var a = value.split('');
//             var b = a[0].toUpperCase();
//             a.splice(0, 1, b);
//             result1.push(a.join(''));
//             // console.log(a);
//         } else {
//             result1.push(value);
//         }
//     });
//     // console.log(result1);
//
//     return result1.join('');
// }
//
// alert(cameLize('background-color-one'));





// var objGlobal = {
//     className: 'my menu menu'
// };
//
// function removeClass(obj, cls) {
//     var objString = obj.className.split(' ');
//     console.log(objString);
//
//     objString.forEach(function (value, key) {
//         if (cls === value) {
//             objString.splice(key, 1);
//         }
//     });
//
//     obj.className = objString.join(' ');
// }
//
// removeClass(objGlobal, 'menu');
// // console.log(objGlobal);


// var objGlobal = {
//     className: 'my menu menu'
// };
//
// function removeClass(obj, cls) {
//     var pos = -1;
//     while ((pos = obj.className.indexOf(cls, pos + 1)) !== -1) {
//         obj.className = obj.className.slice(pos, cls.length + 1)
//     }
// }
//
// removeClass(objGlobal, 'menu');
// console.log(objGlobal);

//
// var arrGlobal = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
//
// function aclean(arr) {
//     var arr2 = [];
//     arr.forEach(function (value, key) {
//         if (key === 0) {
//             arr2.push(value);
//         } else {
//             for (var i = 0; i < arr2.length; i++) {
//                 if (value.length === arr2[i].length) {
//                     var y = value.split('');
//                     for (var k = 0; k < y.length; k++) {
//                         value.indexOf(y[k])
//                     }
//                 }
//
//
//             }
//         }
//     });
//




// function sum (a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return a + b + c + d;
//             }
//         }
//     };
// }
//
// console.log(sum(1)(2)(4)(5));




// function makeBuffer () {
// //     var saveValue = [];
// //
// //     var makeBuffer2 = function (value) {
// //         if (!arguments.length) {
// //             return saveValue.join('');
// //         } else {
// //             saveValue.push(value);
// //         }
// //     };
// //
// //     makeBuffer2.clear = function () {
// //         saveValue = [];
// //     };
// //
// //     return makeBuffer2;
// // }
// //
// // var buffer = makeBuffer();
// //
// // buffer(0);
// // buffer(1);
// // buffer(0);
// //
// // buffer.clear();
// //
// // console.log(buffer());




// var arr = [1, 2, 3, 4, 5, 6, 7];
//
// function inBetween(a, b) {
//     return function (value) {
//         return value >= a && value <= b;
//     }
// }
//
// function inArray(arr) {
//     return function (value) {
//         return arr.indexOf(value) !== -1;
//     }
// }
//
// function filter (arr, callback) {
//     var arrInt = [];
//
//     arr.forEach(function (value) {
//         if (callback(value)) {
//             arrInt.push(value);
//         }
//     });
//     return arrInt;
// }
//
//
// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
//
// alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
//
// alert(filter(arr, function(a) {
//     return a % 2 === 0
// }));


// function makeArmy() {
// //
// //     var shooters = [];
// //
// //     for (var i = 0; i < 10; i++) {
// //         var shooter = function() { // функция-стрелок
// //             return function() {
// //                 alert( i ); // выводит свой номер
// //             }
// //         };
// //         shooters.push(shooter());
// //     }
// //
// //     return shooters;
// // }
// //
// // var army = makeArmy();
// //
// // army[0](); // стрелок выводит 10, а должен 0
// // army[5]();



//
// var head = {
//     glasses: 1
// };
//
// var table = {
//     pen: 3
// };
//
// var bed = {
//     sheet: 1,
//     pillow: 2
// };
//
// var pockets = {
//     money: 2000
// };
//
// pockets._photo_ = bed;
// // bed._photo_ = table;
// // table._photo_ = head;
//
// console.log(pockets.sheet);
// // console.log(bed.glasses);
// // console.log(table.money);



// var head = {
//     glasses: 1
// };
//
// var table = {
//     pen: 3
// };
// table.__proto__ = head;
//
// var bed = {
//     sheet: 1,
//     pillow: 2
// };
// bed.__proto__ = table;
//
// var pockets = {
//     money: 2000
// };
// pockets.__proto__ = bed;
//
// alert( pockets.pen ); // 3
// alert( bed.glasses ); // 1
// alert( table.money ); // undefined



// function sumArgs() {
//     return [].reduce.call(arguments, function(sum, current) {
//         return sum + current;
//     });
// }
//
// console.log(sumArgs(1, 2, 3));


// function applyAll () {
//     var slice = [].slice.call(arguments, 1, arguments.length);
//     return arguments[0].apply(null, slice);
// }
//
// // Применить Math.max к аргументам 2, -2, 3
// alert( applyAll(Math.max, 2, -2, 3) ); // 3
//
// // Применить Math.min к аргументам 2, -2, 3
// //alert( applyAll(Math.min, 2, -2, 3) ); // -2



// var a = {
//     one: 1,
//     two: 2
// };
//
// var b = Object.create(a);
// console.log(b.one);



// function Test() {
//     this.one = 1;
//     this.two = 2;
// }
//
// Test.prototype.testMethod = function () {
//     return 10;
// };
//
// function TestSecond() {
//     this.three = 3;
// }
//
// TestSecond.prototype = Object.create(Test.prototype);
// TestSecond.prototype.constructor = TestSecond;
//
//
// var rabbit = new TestSecond();
// console.log(rabbit.testMethod());