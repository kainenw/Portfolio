let button = document.getElementById('button');


const sum = (num1, num2) => {
    return num1 + num2;
};

const getInc = () => {
    let incomeElement =  document.getElementById("income");
    let income = 0;
    if (incomeElement.valueAsNumber > 0) {
        income = incomeElement.valueAsNumber;
    } else {
        income = 0;
    }
    return income;
};

const getExp = () => {
    let expense = document.getElementsByClassName("expense");
    let expenses = [0];
    for(let i = 0; i < expense.length; i++){
        let value = expense[i].valueAsNumber;
        if (value > 0) {
            expenses.push(value);
        } else {
            expenses.push(0);
        }
    };
    return expenses.reduce(sum);
};

const calc = () => {
    let total = getInc() - getExp();
    console.log(getExp())
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

button.addEventListener('click', print);