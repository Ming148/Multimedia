function reveal() {
    var reveals = document.querySelectorAll(".noti-box");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
function car() {
  var cars = document.querySelectorAll("#pic-4");

  for (var i = 0; i < cars.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = cars[i].getBoundingClientRect().top;
    var elementVisible = 350;

    if (elementTop < windowHeight - elementVisible) {
      cars[i].classList.add("active");
    } else {
      cars[i].classList.remove("active");
    }
  }
}  


window.addEventListener("scroll", reveal);
window.addEventListener("scroll", car);