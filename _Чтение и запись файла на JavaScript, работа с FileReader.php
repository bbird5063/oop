
ITDoctor
Чтение и запись файла на JavaScript, работа с FileReader на JavaScript
https://www.youtube.com/watch?v=p1jqBiqnnxI

https://github.com/bbird5063/oop.git

JavaScript НЕ ИМЕЕТ ДОСТУПА К ФАЙЛОВОЙ СИСТЕМЕ!!!
ПОЭТОМУ ОН НЕ МОЖЕТ СОЗДАВАТЬ И ИЗМЕНЯТЬ ФАЙЛЫ.
ТОЛЬКО ЧТЕНИЕ...
Для этого два варианта:
1. PHP
2. Сервер на Node.js

Ни один мне не подходит :(
У меня есть только браузер.

Из комментариев:
----------------------------------------------------------
@user-rr7yr9ml9p
10 месяцев назад
Можно записать в файл! Для этого нужно создать блоб, 
потом использовать URL.createObjectURL и передать это в href ссылки
3
Ответить

1 ответ
@user-mp7sl2it7b
@user-mp7sl2it7b
12 дней назад
здравствуйте можете помочь мне с этим проблемом, 
если есть видео то можете ссылкой скинуть?
===================================================================

Поэтому используем метод FileReader()


---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS-TXT</title>
</head>
<body>
    <input type="file" id="file" value="books.txt"> <!-- type="file" окно "Выбор файла", value="books.txt" - не нужно  -->
    <button id="readFile">Чтение файла</button>
    <div id="text"></div>

    <script>
        document.querySelector('#readFile').addEventListener('click', function() { // 
            let file = document.getElementById('file').files[0]; // массив, файлов может быть много при других селекторах (не ...ById)
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function() {
                document.getElementById("text").innerText = reader.result;
            }
        });
    </script>
</body>
</html>
---