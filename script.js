// Selectors

// decimal
const decimal = document.querySelector('#decimal');
// Operators
const operators = document.querySelectorAll('.btn--operator');
// Numbers
const numbers = document.querySelectorAll('.btn--number')
// Delete
const del = document.getElementById('delete');
// Clear
const clear = document.getElementById('clear');
// Result
const result = document.getElementById('resultbody');

// UI Variables

// input variable
let displayVal = 0;
let pendingVal; //pending value
let ansArray = [];


// Eventlisteners

// eventlistener for numbers
for (let i = 0; i < numbers.length; i++){
   numbers[i].addEventListener('click', updateValue = (e) => {
      let number = e.target.innerText;

      // check if input field is not empty
      if(displayVal === 0){
         displayVal = "";
      }

      // Append the content of the button we clicked to our displayVal variable and display it
      displayVal += number; 
      result.innerText = displayVal;

   
   })
};

// eventlistener for operators
for(let i = 0; i < operators.length; i++){
   operators[i].addEventListener('click', performOperation = (e) => {
      let operator = e.target.innerText;

      switch (operator) {
         case '+':
             pendingVal = displayVal;
             displayVal = 0;
             result.innerText = displayVal;
             ansArray.push(pendingVal);
             ansArray.push('+');
             break;
         case '-':
             pendingVal = displayVal;
             displayVal = 0;
             result.innerText = displayVal;
             ansArray.push(pendingVal);
             ansArray.push('-');
             break;
         case 'x':
             pendingVal = displayVal;
             displayVal = 0;
             result.innerText = displayVal;
             ansArray.push(pendingVal);
             ansArray.push('*');
             break;
         case '÷':
             pendingVal = displayVal;
             displayVal = 0;
             result.innerText = displayVal;
             ansArray.push(pendingVal);
             ansArray.push('/');
             break;
         case '=':
             ansArray.push(displayVal);
             var evaluation = eval(ansArray.join(' '));
             // convert datatype from number to string
             displayVal = evaluation + ''; 
             console.log(typeof displayVal);
             result.innerText = displayVal;
             ansArray = []; // clear the array
             break;
         default:
             break;
     }
   })
}

del.onclick = () => {
   if(displayVal.innerText != 0){
      result.innerText = result.innerText.slice(0, -1);
   }
   displayVal = 0;
   pendingVal = displayVal;
   
}

clear.onclick = () => {
   displayVal = 0;
   pendingVal = undefined;
   ansArray = [];
   result.innerText = 0;
}

decimal.onclick = () => { 
   if(!displayVal.includes('.')) {
       displayVal += '.';
   }
   result.innerText = displayVal;
}

