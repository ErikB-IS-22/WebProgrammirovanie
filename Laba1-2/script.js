// файл script.js
window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
  
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
  
    function onDigitButtonClicked(digit) {
      if (!selectedOperation) {
          if (a === '' && digit === '0') return
          if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
              a += digit
          }
          outputElement.innerHTML = a
      } else {
        if (b === '' && digit === '0') return
          if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
              b += digit
              outputElement.innerHTML = b        
          }
      }
  }
  
  // устанавка колбек-функций на кнопки циферблата по событию нажатия
  digitButtons.forEach(button => {
    button.onclick = function() {
        const digitValue = button.innerHTML
        onDigitButtonClicked(digitValue)
    }
  });
  
  // установка колбек-функций для кнопок операций
  document.getElementById("btn_op_mult").onclick = function() { 
    if (a === '') return
    selectedOperation = 'x'
  }
  document.getElementById("btn_op_plus").onclick = function() { 
    if (a === '') return
    selectedOperation = '+'
  }
  document.getElementById("btn_op_minus").onclick = function() { 
    if (a === '') return
    selectedOperation = '-'
  }
  document.getElementById("btn_op_div").onclick = function() { 
    if (a === '') return
    selectedOperation = '/'
  }
  
  document.getElementById("btn_op_backspace").onclick = function() {
    let updatedElement = outputElement.innerHTML
    updatedElement = updatedElement.substring(0, updatedElement.length - 1)
    outputElement.innerHTML = updatedElement
  
    if (!selectedOperation) {
      a = updatedElement
    } else {
      b = updatedElement
    }
  }
  
  document.getElementById("btn_op_sign").onclick = function() {
    if (!selectedOperation) {
      a = (+a) * -1
      outputElement.innerHTML = a
    } else {
      b = (+b) * -1
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_percent").onclick = function() {
    if (!selectedOperation) {
      a = (+a) / 100
      outputElement.innerHTML = a
    } else {
      b = (+b) / 100
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_sqrt").onclick = function() {
    if (!selectedOperation) {
      a = Math.sqrt(+a)
      outputElement.innerHTML = a
    } else {
      b = Math.sqrt(+b)
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_pow").onclick = function() {
    if (!selectedOperation) {
      a = (+a) * (+a)
      outputElement.innerHTML = a
    } else {
      b = (+b) * (+b)
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_factorial").onclick = function() {
    if (!selectedOperation) {
      let result = 1
      for (let i = 2; i <= (+a); i++) {
        result *= i
      }
      a = result
      outputElement.innerHTML = a
    } else {
      let result = 1
      for (let i = 2; i <= (+b); i++) {
        result *= i
      }
      b = result
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById("btn_op_k").onclick = function() {
    if (!selectedOperation) {
      a = (+a) * 1000
      outputElement.innerHTML = a
    } else {
      b = (+b) * 1000
      outputElement.innerHTML = b
    }
  }
  
  document.getElementById('btn_op_resultcolorchange').onclick = function() {
    if (document.getElementById('result').style.background === 'gray') {
        document.getElementById('result').style.background = 'white'
        document.getElementById('result').style.color = 'black'
    } else {
        document.getElementById('result').style.background = 'gray'
        document.getElementById('result').style.color = 'white'
    }
  };
  
  // кнопка очищения
  document.getElementById("btn_op_clear").onclick = function() { 
    a = ''
    b = ''
    selectedOperation = ''
    expressionResult = ''
    outputElement.innerHTML = 0
  }
  
  // кнопка расчёта результата
  document.getElementById("btn_op_equal").onclick = function() { 
    if (a === '' || b === '' || !selectedOperation)
        return
        
    switch(selectedOperation) { 
        case 'x':
            expressionResult = (+a) * (+b)
            break;
        case '+':
            expressionResult = (+a) + (+b)
            break;
        case '-':
            expressionResult = (+a) - (+b)
            break;
        case '/':
            expressionResult = (+a) / (+b)
            break;
    }
    
    a = expressionResult.toString()
    
    outputElement.innerHTML = a
  }
  
  document.getElementById('theme').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
  });
  
  };
  