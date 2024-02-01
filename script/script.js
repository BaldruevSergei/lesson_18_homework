// Инициализация массива с путями к изображениям
const array = ["media/1.jpg", "media/2.jpg", "media/3.jpg", "media/4.jpg", "media/5.jpg"];
// Получение элемента изображения из DOM
const imageNode = document.querySelector(".image");
// Получение элементов кнопок из DOM
const leftButtonNode = document.getElementById("left-button");
const rightButtonNode = document.getElementById("right-button");
// Установка начального изображения
imageNode.src = array[0];
// Индекс текущего изображения
let i = 0;

// Добавление обработчика события на кнопку "вправо"
rightButtonNode.addEventListener("click", () => {
    // Логика переключения на следующее изображение
    if (i === array.length - 1) { // Если текущее изображение последнее в массиве
        i = 0; // Переход к первому изображению
    } else {
        i++; // Переход к следующему изображению
    }
    imageNode.src = array[i]; // Обновление источника изображения
});

// Добавление обработчика события на кнопку "влево"
leftButtonNode.addEventListener("click", () => {
    // Логика переключения на предыдущее изображение
    console.log("begin", i); // Вывод текущего индекса для отладки
    if (i === 0) { // Если текущее изображение первое в массиве
        i = array.length - 1; // Переход к последнему изображению
    } else {
        i--; // Переход к предыдущему изображению
    }
    imageNode.src = array[i]; // Обновление источника изображения
});
