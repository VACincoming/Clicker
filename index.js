const wrapper = document.getElementById("wrapper");
const info = document.getElementById("info");
const counter = document.getElementById("counter");
const counter_p = document.createElement("p");
const ball = document.createElement("div");
const span = document.createElement('span');
const btn = document.querySelector('input[type=submit]');
const ranger = document.getElementById("ranger");
const timer = document.getElementById("timer");
const timer_p = document.createElement("p");
const enterSize = document.getElementById("enterSize");
timer.appendChild(timer_p);
info.appendChild(span);
counter.appendChild(counter_p);
wrapper.appendChild(ball);
span.style.display = "inline-block";
ball.classList.add("ball");

let isStart = false;

function timerFunc() {
    timer.style.display = "block";
    let j = 0;
    for (let i=30; i >= 0; i--) {
        j++;
        setTimeout(function () {
            timer_p.innerHTML = i;
            if (i === 0) {
                timer.style.marginLeft = "43%";
                timer_p.innerHTML = "Time is left";
                ball.style.display = "none";
            }
        }, 1000 * j);
    }
}

// function tmr(j) {

// }

function cntr() {
    counter_p.innerHTML = 3;
    let j = 0;
    counter.style.display = 'block';
    for (let i=3;i >= -1; i--) {
        setTimeout(function () {
            counter_p.innerHTML = i;
            if (i === 0) timerFunc();
            if (i === -1) counter.style.display = 'none';
        }, 1000 * j);
        j++;
    }
}
// console.log(event.target.btn);
btn.onclick = (event) => {
    console.log(event.target.btn);
    cntr(timerFunc);
    enterSize.style.display = "none";
    isStart = true;
}



//Счётчик
let i = 0;
span.innerHTML = i;
ball.onclick = () => {
    if (isStart) span.innerHTML = ++i;
    else alert("Нажмите кнопку Start");
}

//Ползунок
ranger.onchange = () => {
    ball.style.width = ranger.value+"px";
    ball.style.height = ranger.value + "px";
    ball.style.top = "40%";
    ball.style.left = "50%";

    document.getElementById('rangeValue').innerHTML = ranger.value;
    btn.style.display = "block";
}

//получаем значение при клике и устанавливаем значение шарика
ball.addEventListener("click", newPlace);

function newPlace() {
    if (isStart) {
        let ballHeight = parseInt(ball.style.height.split("px"));
        let ballWidth = parseInt(ball.style.width.split("px"));
        let rndH = Math.random() * ((500 - (ballHeight + 1) - (ballHeight + 1)));
        let rndW = Math.random() * ((1000 - (ballWidth + 1) - (ballWidth + 1)));
        ball.style.top = rndH + "px";
        ball.style.left = rndW + "px";
    }
}

//model - 
//view - отображение (связана с контроллером)
//controller
//webpack
