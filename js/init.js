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
const finalScore = document.getElementById("finalScore");
const modal_p = document.getElementById("modal_p");
const btn_newGame = document.getElementById("btn_new-game");
const btn_history = document.getElementById("btn_history");
timer.appendChild(timer_p);
info.appendChild(span);
counter.appendChild(counter_p);
wrapper.appendChild(ball);
span.style.display = "inline-block";
ball.classList.add("ball");
let isStart = false;
let massCounter = [];
let counter_score = 0;