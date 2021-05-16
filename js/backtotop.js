var btn = document.getElementById("totopbtn");
var didScroll = false;

window.onscroll = scroll;

function scroll() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
  didScroll = true;
}

setInterval(function() {
  if (didScroll) {
    didScroll = false;
  }
}, 100);

function toTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}
