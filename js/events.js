
// console.log(event.target.btn);
btn.onclick = () => {
    cntr();
    enterSize.style.display = "none";
    isStart = true;
}

//Счётчик

span.innerHTML = counter_score;
ball.onclick = () => {
  if (isStart) span.innerHTML = ++counter_score;
  else alert("Нажмите кнопку Start");
}

//Ползунок
ranger.onchange = () => {
  ball.style.display = "block";
  ball.style.width = ranger.value + "px";
  ball.style.height = ranger.value + "px";
  ball.style.top = "40%";
  ball.style.left = "50%";
  document.getElementById('rangeValue').innerHTML = ranger.value;
  btn.style.display = "block";
}

//получаем значение при клике и устанавливаем значение шарика
ball.addEventListener("click", newPlace);

btn_history.onclick = () => {
  console.log(getHisory(counter_score));
}

btn_newGame.onclick = () => {
  finalScore.style.display = "none";
  counter_score = 0;
  isStart = false;
  enterSize.style.display = "block";
  timer_p.style.display = "none";
  span.innerHTML = counter_score;
  btn.style.display = "none";
}