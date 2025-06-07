const input = document.getElementById('myInput');
const button = document.getElementById('myButton');

// Додай подію:
button.addEventListener('click', () => {
return button.textContent = input.value;
});

// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

const img = document.getElementById("img-task2");
img.src = "https://static-cse.canva.com/blob/847064/29.jpg";

// Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

const a = document.querySelector("a");
a.href = "https://www.facebook.com/?locale=ru_RU";
const imageElement = document.getElementById('task-2');
imageElement.setAttribute('alt', "NEW");

// Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const ul = document.getElementById("ul-task4");
const firstChild = ul.firstElementChild;
console.log(firstChild);
firstChild.innerHTML = `Lev`