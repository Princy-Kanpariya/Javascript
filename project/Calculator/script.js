let input = document.getElementById('input');
let output = document.getElementById('output');
let buttons = document.querySelectorAll('button');

// Clear the stored value on page reload
window.addEventListener('load', () => {
    localStorage.removeItem('calculatorValue');
});

let storedValue = localStorage.getItem('calculatorValue');
let string = storedValue ? storedValue : '';
input.value = string;

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let inputValue = e.target.innerHTML;

        if (inputValue == '=') {
            string = eval(string);
            output.value = string;
            output.style.display = 'inline';
            input.style.fontSize = '28px';
            input.style.color = 'red';
            string = ''; // Reset the string after getting the result
        }
        else if (inputValue == 'AC') {
            string = '';
            input.value = string;
            output.value = '';
            output.style.display = 'none';
            input.style.fontSize = '';
            input.style.color = ''; 
        }
        else if (inputValue == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (
            (string === '' && isOperator(inputValue)) ||
            (isOperator(string[string.length - 1]) && isOperator(inputValue))
        ) {
            string = string.slice(0, -1) + inputValue; 
            input.value = string;
            output.value = '';
            output.style.display = 'none';
        }
        else {
            string += inputValue;
            input.value = string;
            welcome.style.display = 'none';
        }
        localStorage.setItem('calculatorValue', string);
    });
});

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}
