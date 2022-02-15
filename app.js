function Pin() {
    const pin = Math.round(Math.random() * 10000);
   const  pinx = pin + '';
    if (pinx.length == 4) {
        return pin;
    }
    else {
        return Pin();
        
    }
}
function generatePin() {
    const pin = Pin();
    
    document.getElementById('input').value = pin;

}

//calculator type
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('number-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        
    }
    else {
       
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
    
})

//match kora 2 ta pin
function verifyClick() {
    const pin = document.getElementById('input').value;
    const typedNumber = document.getElementById('number-input').value;
    const success = document.getElementById('notify-success');
    const fail = document.getElementById('notify-fail');
    if (pin == typedNumber) {
        
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
       
        fail.style.display = 'block';
        success.style.display = 'none';
    }

    
}
