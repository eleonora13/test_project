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



var login = prompt('Текст', '');
var message = (login === 'Вася') ? 'Привет':
    login === 'Директор' ? 'Здравствуйте' :
    (login === '') ? 'Нет логина':
        '';
alert(message);
