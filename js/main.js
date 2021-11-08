window.onscroll = function() {scrollEvent()};

let time_now = new Date();
let time_target_devent = new Date(2018, 11, 18);

function scrollEvent() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mainNav").className = "navbar navbar-expand-lg navbar-dark fixed-top site-header";

  } else {
    document.getElementById("mainNav").className = "navbar navbar-expand-lg navbar-dark fixed-top";

  }

}


function changeNavBtn() {
  //navBtn fas fa-bars icon-dark
  var element = document.querySelector('#navBtn');
  if (nav_status) {
    element.classList.remove('fa-bars');
    element.classList.add('fa-times');
    nav_status = 0;
  } else {
    element.classList.remove('fa-times');
    element.classList.add('fa-bars');
    nav_status = 1;
  }

}

function loadCountNumber(target_id, time_target) {
  let time_cal = calculateTime(time_target);
  document.querySelector('#'+target_id).innerHTML = time_cal

}

function countNumber(idx) {
  timerId = setInterval(PrintTime, 1000);


}

function calculateTime(time_target) {
  return Math.floor((time_now.getTime() - time_target.getTime()) / (1000 * 60 * 60 * 24)) * -1;
}
