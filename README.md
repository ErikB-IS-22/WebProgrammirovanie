Файл index.html

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Калькулятор</title>
    <link rel="stylesheet" href="style.css"> 
</head>

<body>
15. Добавьте любое изображение на фон
    <div class="background"></div> - добавление div с фоном
    <div class="calculator">
        <div class="grid-container">
                <div id="result" class="result" style="padding-right: 15px">0</div>

                <button id="btn_op_clear" class="my-btn primary grid-item">C</button>
                <button id="btn_op_backspace" class="my-btn primary grid-item">-></button>
                <button id="btn_op_sign" class="my-btn primary grid-item">+/-</button>
                <button id="btn_op_div" class="my-btn primary grid-item">/</button>
                <button id="btn_op_percent" class="my-btn secondary grid-item">%</button>
                <button id="btn_op_k" class="my-btn k secondary grid-item">000</button>

                <button id="btn_digit_7" class="my-btn grid-item">7</button>
                <button id="btn_digit_8" class="my-btn grid-item">8</button>
                <button id="btn_digit_9" class="my-btn grid-item">9</button>
                <button id="btn_op_mult" class="my-btn primary grid-item">x</button>
                <button id="btn_op_sqrt" class="my-btn secondary grid-item">^1/2</button>

                <button id="btn_digit_4" class="my-btn grid-item">4</button>
                <button id="btn_digit_5" class="my-btn grid-item">5</button>
                <button id="btn_digit_6" class="my-btn grid-item">6</button>
                <button id="btn_op_minus" class="my-btn primary grid-item">-</button>
                <button id="btn_op_pow" class="my-btn secondary grid-item">^2</button>
                <button id="btn_op_resultcolorchange" class="my-btn resultcolorchange secondary grid-item">Смена цвета</button>     

                <button id="btn_digit_1" class="my-btn grid-item">1</button>
                <button id="btn_digit_2" class="my-btn grid-item">2</button>
                <button id="btn_digit_3" class="my-btn grid-item">3</button>
                <button id="btn_op_plus" class="my-btn primary grid-item">+</button>
                <button id="btn_op_factorial" class="my-btn secondary grid-item">!</button>
            
                <button id="btn_digit_0" class="my-btn grid-item">0</button>
                <button id="btn_digit_dot" class="my-btn grid-item">.</button>
                <button id="btn_op_equal" class="my-btn secondary execute grid-item">=</button>
        </div>
    </div>
    
    <div class="flex-container">
        <div class="flex-item">
        <div>
            <button id="theme" class="my-btn theme">Переключить тему</button>
            <script src="script.js"></script>
        </div>
    
        <div>ЛР выполнена Байназаровым Эриком Ильгизовичом</div>
    
        <div>
            <form>
                <label for="fruits">Выберите фрукт:</label>
                <select id="fruits" name="fruits">
                  <option value="orange">Яблоко</option>
                  <option value="banana">Банан</option>
                  <option value="apple">Апельсин</option>
                </select>
            </form>
        </div>
        </div>
        <div class="flex-item">
        
    
        <div>
            Цель данной лабораторной работы -
            <b>знакомство</b>
            с инструментами построения пользовательских интерфейсов web-сайтов: 
            <b>HTML, CSS</b>. В ходе выполнения работы, вам предстоит ознакомиться с
            кодом реализации простого калькулятора, и затем выполнить задания по варианту.</title>
        </div>
    
        <div> <a href="https://github.com/IgorSergeevichISIT/Web/blob/main/turorials/lab1/readme.md"> Нажми меня! </a> </div>

        <div>
            <details>
                <summary>Автор</summary>
                <p>Байназаров Эрик Ильгизович, ИС-22</p>
            </details>
        </div>

        </div>
    </div>
</body>
</html>

Файл style.css
body {
    overflow: hidden;
    z-index: 1;
    width: 100vw;
    height: 100vh;
6. Поменяйте шрифт цифр
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; - смена шрифта
}
  
.background {
2. Сделайте фон калькулятора темным (наподобие ночной темы)
    background: white; - смена цвета фона
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url("./photo/calc.jpg");
    background-size: cover;
    opacity: 0.3;
}
  
  .flex-container {
    display: flex;
  }
  .flex-item {
    margin: 8px;
    text-align: left;
  }
  
  body.light-theme {
    background-color: #ffffff;
    color: #000000;
  }
  
  body.dark-theme {
    background-color: #121212;
    color: #ffffff;
  }
  
  .grid-container {
    display: inline-grid;
    grid-template-columns: repeat(6, 4em);
    grid-template-rows: repeat(7, 4em);
    gap: 10px;
  }
  
  .calculator{
    display: grid;
    place-items: center;
  }
  
.my-btn { 
7. Сделайте шрифт более толстым
    font-weight: bold; - установка жирного шрифта
    box-sizing: border-box;
    text-align: center;
    font-size: 1.8em;
    color: white;
3. Сделайте кнопки квадратными вместо круглых.
    border-radius: 0%; - округление кнопки на 0% для того, чтобы кнопка стала квадратной
    border: none;
1. Поменяйте цветовую палитру калькулятора с оранжево-серой на любую другую
    background: rgb(117, 117, 117); - смена цвета кнопки
    color: #000000;              
    cursor: pointer;            
    user-select: none;
} 

8. Измените цвет при наведении мышки на кнопку на другой
.my-btn:hover {
    background: rgb(211, 211, 211); - смена цвета при наведении мышки на кнопку
}
  
  .my-btn:active {
    filter: brightness(130%);
  }
  
  .my-btn.theme {
    width: 220px;
    height: 50px;
    font-size: 1.3em;
    filter: brightness(130%); /* увеличим интенсивность цвета для эффекта вспышки */
  }
  
.my-btn.primary { 
1. Поменяйте цветовую палитру калькулятора с оранжево-серой на любую другую
    background: #a0a0a0; - смена цвета кнопки
}

.my-btn.secondary { 
1. Поменяйте цветовую палитру калькулятора с оранжево-серой на любую другую
    background: #656fca; - смена цвета кнопки
}
  

.my-btn.execute {
    grid-column-start: 3;
    grid-column-end: 7;
    border-radius: 0px;
}
  
  .my-btn.k {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 3;
    grid-row-end: 5;
    border-radius: 0px;   /* подкорректируем округлость */
  }
  
  .my-btn.resultcolorchange {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 5;
    grid-row-end: 7;
    border-radius: 0px;   /* подкорректируем округлость */
    font-size: 0.5em;
  }
  
.result { 
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 3;
    display: inline-block;
    background: gray;
5. Сделайте окно вывода со скруглеными краями
    border-radius: 18px; - закругление краёв             
    text-align: right;
4. Измените цвет вывода результата на любой другой
    color: white; - смена цвета вывода результата
    font-size: 2em;
}
