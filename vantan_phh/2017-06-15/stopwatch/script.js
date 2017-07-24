window.addEventListener('load', function () {
  var startTime;
  var timerID;
  var elapsedTime = 0;
  var isRunning = false;
  var startBtn = document.getElementById('start');
  var stopBtn = document.getElementById('stop');
  var resetBtn = document.getElementById('reset');
  var lapBtn = document.getElementById('lap');
  var raptimeBtn = document.getElementById(raptime);
  var timerText = document.getElementById('timerText');
  startBtn.addEventListener('click', function () {
    if (isRunning) {
      return;
    }
    startTime = Date.now();
    updateTimerText();
  });
  stopBtn.addEventListener('click', function () {
    isRanning = false;
    elapsedTime += Date.now() - startTime;
    clearTimeout(timerID)
  })
  resetBtn.addEventListener('click', function () {
    if (isRunning) {
      return;
    }
    timeText.innerHTML = '0.00';
    elepsedTime = 0;
  });
  lapBtn.addEventListener('click', function () {
    if(!isRunning) {
      return;
    }
    var time = Date.now()-startTime + elapsedTime;
    laptimeText.innerHTML +='<i>'+(time/100).toFixed(2)+'</i>';
  });
    console.log('laptime' + Date.now() - startTime + elepsedTime);
  });
  function updateTimerText() {
    timerID = setTimeout(function () {
      var time = Date.now() - startTime + elapsedTime;
      timeText.innerHTML = (time / 1000).toFixed(2);
      updateTimerText();
    }, 10)
  }
});