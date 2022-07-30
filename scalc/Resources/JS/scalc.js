const { builtinModules } = require("module");

//let button = document.getElementById('button');


const sum = (num1, num2) => {
    return num1 + num2;
};

const getInc = () => {
    //let incomeElement =  document.getElementById("income");
    let income = 0;
    //if (incomeElement.valueAsNumber > 0) {
        //income = incomeElement.valueAsNumber;
    }
    //return income;
;

function getExp() {
    //let expense = document.getElementsByClassName("expense");
    let expenses = [0];
    for (let i = 0; i < expense.length; i++) {
        let value = expense[i].valueAsNumber;
        if (value > 0) {
            expenses.push(value);
        } else {
            expenses.push(0);
        }
    }
    return expenses.reduce(sum);
}

//let income = getInc();
//let expenses = getExp();

function subtract(num1, num2) {
    let total = num1 - num2
    return total;
};

const print = () => {
    let result = document.getElementById('result');
    let total = calc();
    if(total > 0) {
        result.innerHTML = `You could add<br> <span>$${total}</span><br> to your savings every month!`;
        result.getElementsByTagName('span')[0].style.color = "forestgreen";
    }else if(total < 0) {
        absVal = Math.abs(total);
        result.innerHTML = `You would lose<br> <span>$${absVal}</span><br> from your savings each month!`;
        result.getElementsByTagName('span')[0].style.color = "red";
    }else if(total = 0) {
        result.innerHTML = "You wouldn't be able to save any money on this budget.";
    }
};

//button.addEventListener('click', print);

module.exports.subtract = subtract;