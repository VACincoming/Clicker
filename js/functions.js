function finalWindow() {
  finalScore.style.display = "block";
  modal_p.innerHTML = "<p>Your Score: </p>" + counter_score;
}

function getHisory(counter) {
  localStorage.setItem('element', counter);
  let localValue = localStorage.getItem('element');
  return localValue;
}

function timerFunc() {
  timer.style.marginLeft = "50%";
  timer_p.innerHTML = 4;
  timer.style.display = "block";
  timer_p.style.display = "block";
  let j = 0;
  for (let i = 4; i >= -1; i--) {
    j++;
    setTimeout(function () {
      timer_p.innerHTML = i;
      if (i === 0) {
        timer.style.marginLeft = "43%";
        timer_p.innerHTML = "Time is left";
        ball.style.display = "none";
        massCounter.push(counter_score);
      }
      if (i === -1) {
        timer_p.innerHTML = "Time is left";
        finalWindow();
      }
    }, 1000 * j);
  }
}

function cntr() {
  counter_p.innerHTML = 3;
  let j = 0;
  counter.style.display = 'block';
  for (let i = 3; i >= -1; i--) {
    setTimeout(function () {
      counter_p.innerHTML = i;
      if (i === 0) {
        timerFunc();
      }
      if (i === -1) counter.style.display = 'none';
    }, 1000 * j);
    j++;
  }
}

function newPlace() {
  if (isStart) {
    let ballHeight = parseInt(ball.style.height.split("px"));
    let ballWidth = parseInt(ball.style.width.split("px"));
    let rndH = randomNumber(500, ballHeight);
    let rndW = randomNumber(1000, ballWidth);
    ball.style.top = rndH + "px";
    ball.style.left = rndW + "px";
  }
}

function randomNumber(value, ballParams) {
  return Math.random() * ((value - (ballParams + 1) - (ballParams + 1)));
}