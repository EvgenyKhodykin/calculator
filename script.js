let lastOperand = 0;
let operation = null;

const inputWindow = document.querySelector('#inputWindow');


document.querySelector('#btn_clr').addEventListener('click',()=> {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.querySelector('#btn_sum').addEventListener('click',()=> {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.querySelector('#btn_sub').addEventListener('click',()=> {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sub';
    inputWindow.value = '';
})

document.querySelector('#btn_mult').addEventListener('click',()=> {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
})

document.querySelector('#btn_division').addEventListener('click',()=> {
    lastOperand = parseInt(inputWindow.value);
    operation = 'division';
    inputWindow.value = '';
})

document.querySelector('#btn_sqr').addEventListener('click',()=> {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sqr';
    inputWindow.value = '';
})

document.querySelector('#btn_calc').addEventListener('click',()=> {
    if (operation === 'sum'){
        const result = lastOperand + parseInt(inputWindow.value);
        operation = 0;
        inputWindow.value = result;
    }
    if (operation === 'sub'){
        const result = lastOperand - parseInt(inputWindow.value);
        operation = 0;
        inputWindow.value = result;
    }
    if (operation === 'mult'){
        const result = lastOperand * parseInt(inputWindow.value);
        operation = 0;
        inputWindow.value = result;
    }
    if (operation === 'division'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = 0;
        inputWindow.value = result;
    }
    if (operation === 'sqr'){
        const result = Math.sqrt(lastOperand);
        operation = 0;
        inputWindow.value = result;
    }
})



document.querySelector('#btn_1').addEventListener('click',()=> {
    inputWindow.value += '1';
})
document.querySelector('#btn_2').addEventListener('click',()=> {
    inputWindow.value += '2';
})
document.querySelector('#btn_3').addEventListener('click',()=> {
    inputWindow.value += '3';
})
document.querySelector('#btn_4').addEventListener('click',()=> {
    inputWindow.value += '4';
})
document.querySelector('#btn_5').addEventListener('click',()=> {
    inputWindow.value += '5';
})
document.querySelector('#btn_6').addEventListener('click',()=> {
    inputWindow.value += '6';
})
document.querySelector('#btn_7').addEventListener('click',()=> {
    inputWindow.value += '7';
})
document.querySelector('#btn_8').addEventListener('click',()=> {
    inputWindow.value += '8';
})
document.querySelector('#btn_9').addEventListener('click',()=> {
    inputWindow.value += '9';
})
document.querySelector('#btn_0').addEventListener('click',()=> {
    inputWindow.value += '0';
})