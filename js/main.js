const budgetValue = document.querySelector('.budget-value')
const startBtn = document.getElementById('start')
const expensesItem1 = document.querySelector('#expenses_1');
const expensesItem2 = document.querySelector('#expenses_2');
const expensesItem3 = document.querySelector('#expenses_3');
const expensesItem4 = document.querySelector('#expenses_4');
const expensesValue = document.querySelector('.expenses-value');
const expensesItemBtn = document.querySelector('.expenses-item-btn');

const optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
const optionalExpensesValue = document.querySelector('.optionalexpenses-value');
const optionalExpensesBtn = document.querySelector('.optionalexpenses-btn');

const dayBudgetValue = document.querySelector('.daybudget-value');
const levelValue = document.querySelector('.level-value');
const countBudgetBtn = document.querySelector('.count-budget-btn');

const chooseIncome = document.querySelector('.choose-income');
const incomeValue = document.querySelector('.income-value');

const checkSavings = document.querySelector('#savings');
const sumValue = document.querySelector('#sum');
const persentValue = document.querySelector('#percent');
const monthsavingsValue = document.querySelector('.monthsavings-value');
const yearsavingsValue = document.querySelector('.yearsavings-value');

sumValue.disabled = true
persentValue.disabled = true

const appData = {
    budget: 0,
    expenses: {},
    optionalexpenses: {},
    income: [],
    savings: false,

    setSavings() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
        console.log(appData.savings);
    },
    getSavings() {
        if (appData.savings == true) {
            let sum = +sumValue.value
            let persent = +persentValue.value
            appData.montincome = sum/100/12*persent
            appData.yearincome = sum/100*persent
            monthsavingsValue.textContent = appData.montincome.toFixed(2)
            yearsavingsValue.textContent = appData.yearincome.toFixed(2)
        }
    },

    start() {
        money = +prompt('Ваш бюджет на месяц?','');
        while (money == '' || money == null || isNaN(money)) {
            money = +prompt('Вы не ввели бюджет на месяц!','');
        };
        appData.budget = money; 
        budgetValue.textContent = appData.budget
    },
    getExpenses: ()=> {
        // ! получить значения из полей
        let a = expensesItem1.value
        let b = +expensesItem2.value
        let c = expensesItem3.value
        let d = +expensesItem4.value
        let sum = 0

        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50 && a.length >= 3) {
            appData.expenses[a] = b
            sum += b
        };

        if ((typeof (c)) != null && (typeof (d)) != null && c != '' && d != '' && c.length < 50 && c.length >= 3) {
            appData.expenses[c] = d
            sum += d
        };

        expensesValue.textContent = sum
        appData.expenses_sum = sum
    }, 
    getOExpenses() {
        // ! считать данные из inputs
        // ! записать в приложение
        // ! вывести на экран
        // ! повесить функцию на кнопку
        optionalExpensesItem.forEach((item, index)=>{
            appData.optionalexpenses[index] = item.value
        })
        // for (let i=0; i < optionalExpensesItem.length; i++) {
        //     appData.optionalexpenses[optionalExpensesItem[i]] = optionalExpensesItem[i].value
        // }
        console.log(appData.optionalexpenses);

        optionalExpensesValue.textContent = ''
        for (let item in appData.optionalexpenses) {
            if (appData.optionalexpenses[item] != '') {
                optionalExpensesValue.textContent += appData.optionalexpenses[item] + ' - '
            }
        }

    },
    getMoneyPerDay() {
        if (appData.budget != undefined && appData.budget != 0) {
            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = 'Минимальный уровень достатка';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = 'Средний уровень достатка';
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = 'Высокий уровень достатка';
            } else {
                levelValue.textContent = 'Произошла ошибка';
            }
        } else {
            dayBudgetValue.textContent = 'Произошла ошибка';
        }

    },
    getIncome() {
        // ! получить данные из инпута 
        // ! разделить по запятой
        // ! вывести в соответствующее после в правой части сайта
        // ! событие для инпута 'input'
        let items = chooseIncome.value
        if (items != '') {
            appData.income = items.split(',')
            incomeValue.textContent = appData.income
        }
    }
}

startBtn.addEventListener('click', appData.start)
expensesItemBtn.addEventListener('click', appData.getExpenses)
optionalExpensesBtn.addEventListener('click', appData.getOExpenses)
countBudgetBtn.addEventListener('click', appData.getMoneyPerDay)
chooseIncome.addEventListener('input', appData.getIncome)
checkSavings.addEventListener('input', ()=> {
    appData.setSavings()
    if (checkSavings.checked) {
        sumValue.disabled = false
        persentValue.disabled = false
    } else {
        sumValue.disabled = true
        persentValue.disabled = true
        // ! отчистить инпуты если галочка была выключена
        sumValue.value = ''
        persentValue.value = ''
        monthsavingsValue.textContent = ''
        yearsavingsValue.textContent = ''
    }
})
sumValue.addEventListener('input', appData.getSavings)
persentValue.addEventListener('input', appData.getSavings)

const yearValue = document.querySelector('.year-value')
const monthValue = document.querySelector('.month-value')
const dayValue = document.querySelector('.day-value')

const now = new Date()
console.log(now);

console.log(now.getFullYear()); // 2023
console.log(now.getMonth());    // 9 (октябрь)
console.log(now.getDate());     // 25
console.log(now.getHours());    // 15
console.log(now.getMinutes());   // 30
console.log(now.getSeconds());   // 0
console.log(now.getMilliseconds()); // 0
console.log(now.getDay());       // 3 (среда, 0 - воскресенье)

yearValue.value = now.getFullYear()
monthValue.value = now.getMonth() + 1
dayValue.value = now.getDate()