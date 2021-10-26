let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1; //счётчик попыток
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

let questionPhrase = '';
let questionRandom = 0;
let winnerPhrase = '';
let winnerRandom = 0;

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    questionRandom = Math.round(Math.random()*3);
    (questionRandom === 0) ? questionPhrase = `Вы загадали число ${answerNumber }?`: 
    (questionRandom === 1) ? questionPhrase = `Спорим, Вы загадали ${answerNumber }?`:
    (questionRandom === 2) ? questionPhrase = `Хм.. это ${answerNumber }?`:
    questionPhrase = `Я думаю, Вы загадали ${answerNumber }`;
    answerField.innerText = questionPhrase;
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
                const phraseRandom = Math.round( Math.random());
                const answerPhrase = (phraseRandom === 1) ?
                    `Вы загадали неправильное число!\n\u{1F914}` :
                    `Я сдаюсь..\n\u{1F92F}`;
    
                answerField.innerText = answerPhrase;
                gameRun = false;
            console.log(phraseRandom);
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            questionRandom = Math.round(Math.random()*3);
            (questionRandom === 0) ? questionPhrase = `Вы загадали число ${answerNumber }?`: 
            (questionRandom === 1) ? questionPhrase = `Спорим, Вы загадали ${answerNumber }?`:
            (questionRandom === 2) ? questionPhrase = `Хм.. это ${answerNumber }?`:
            questionPhrase = `Я думаю, Вы загадали ${answerNumber }`;
            answerField.innerText = questionPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let phraseRandom = Math.round( Math.random());
            let answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            questionRandom = Math.round(Math.random()*3);
            (questionRandom === 0) ? questionPhrase = `Вы загадали число ${answerNumber }?`: 
            (questionRandom === 1) ? questionPhrase = `Спорим, Вы загадали ${answerNumber }?`:
            (questionRandom === 2) ? questionPhrase = `Хм.. это ${answerNumber }?`:
            questionPhrase = `Я думаю, Вы загадали ${answerNumber }`;
            answerField.innerText = questionPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        winnerRandom = Math.round(Math.random()*2);
        (winnerRandom === 0) ? winnerPhrase = `Потому что я победитель по жизни`: 
        (winnerRandom === 1) ? winnerPhrase = `Я всегда побеждаю`:
        winnerPhrase = `Это было слишком просто`;
        answerField.innerText = winnerPhrase;
        gameRun = false;
    }
})

