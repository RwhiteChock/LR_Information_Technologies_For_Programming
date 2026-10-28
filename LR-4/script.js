// Создаём массив с фразами
const phrases = [
    "Всё получится, если стараться!",
    "Каждый день — новая возможность.",
    "Учись новому и развивайся!",
    "Главное — не останавливаться на достигнутом!"
];

// Находим кнопку и блок для вывода фразы
const phraseButton = document.getElementById("phraseButton");
const phraseBlock = document.getElementById("phrase");

// Обрабатываем нажатие на кнопку
phraseButton.addEventListener("click", function() {

    // Выбираем случайную фразу из массива
    const randomIndex = Math.floor(Math.random() * phrases.length);

    // Выводим фразу на страницу
    phraseBlock.textContent = phrases[randomIndex];

});