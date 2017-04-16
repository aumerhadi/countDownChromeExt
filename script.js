//var deadline = getDeadline();
//initializeClock('clockdiv', deadline);
var timeinterval;

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  timeinterval = setInterval(updateClock, 1000);
  console.log(timeinterval);
}

function getDeadline(){
    var countTime = 1;
    var days_inp = document.getElementById("days_inp").value;
    if(days_inp != "0" && days_inp != ""){ countTime = days_inp * 24};
    var hours_inp = document.getElementById("hours_inp").value;
    if(hours_inp != "0" && hours_inp != ""){ countTime = countTime * hours_inp * 60};
    var minutes_inp = document.getElementById("minutes_inp").value;
    if(minutes_inp != "0" && minutes_inp != ""){ countTime = countTime * minutes_inp *60};
    var seconds_inp = document.getElementById("seconds_inp").value;
    if(seconds_inp != "0" && seconds_inp != ""){ countTime = countTime + seconds_inp};

    var deadline = new Date(Date.parse(new Date()) + countTime * 1000);
    return deadline;
}

$("#target").submit(function (e) {
    if (timeinterval >= 0) {
      clearInterval(timeinterval);
    }
    var deadline = getDeadline();
    initializeClock('clockdiv', deadline);
    e.preventDefault();
  });
