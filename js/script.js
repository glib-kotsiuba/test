let math = +prompt("Сколько будет 2 + 2");
let sun = confirm("Солнце встает на востоке?");
let math2 = prompt("Сколько будет 5 / 0?");
let sky = prompt("Какого цвета небо?");
let life = prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.");
let result = 0;

if (math == 4) {
    result += 10;
}
if (sun == true) {
    result += 10;
}
if (math2 == 0 || math2 == "infinity" || math2 == "деление на ноль невозможно") {
    result += 10;
}
if (sky == "голубой" || sky == "синий") {
    result += 10;
}
if (life == 42) {
    result += 10;
}
if (result == 0) {
    alert("Ваш результат - 0. Попробуйте еще раз!");
}
if (result >= 10) {
    alert(`Ваш результат - ${result}`);
}
console.log(result);

// доп дз:
// ввод года рождения, вывести через алерт какой это год(козла, дркона и тд..)

let year = +prompt("Введите год рождения");
if (year % 12 == 0) {
    alert("Ваш год рождения - год обезьяны");
}
if (year % 12 == 1) {
    alert("Ваш год рождения - год петуха");
}
if (year % 12 == 2) {
    alert("Ваш год рождения - год собаки");
}
if (year % 12 == 3) {
    alert("Ваш год рождения - год свиньи");
}
if (year % 12 == 4) {
    alert("Ваш год рождения - год крысы");
}
if (year % 12 == 5) {
    alert("Ваш год рождения - год быка");
}
if (year % 12 == 6) {
    alert("Ваш год рождения - год тигра");
}
if (year % 12 == 7) {
    alert("Ваш год рождения - год кролика");
}
if (year % 12 == 8) {
    alert("Ваш год рождения - год дракона");
}
if (year % 12 == 9) {
    alert("Ваш год рождения - год змеи");
}
if (year % 12 == 10) {
    alert("Ваш год рождения - год лошади");
}
if (year % 12 == 11) {
    alert("Ваш год рождения - год козы");
};