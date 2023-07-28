
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