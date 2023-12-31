document.addEventListener("DOMContentLoaded", function () {
    function activeElement() {
        var keys = document.querySelectorAll("#key-pic");
        var locks = document.querySelectorAll("#lock-pic");
        var unlockPopups = document.querySelectorAll("#unlock-box");
        var lock = document.getElementById("lock");
        var locktop = lock.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        
        if(locktop < windowHeight-150){
            animateImage(lock, true);
        }else{
            animateImage(lock, false);
        }

        for (var i = 0; i < keys.length; i++) {
            var elementTop = keys[i].getBoundingClientRect().top;
            var lockActive = [false, false, false, false, false];
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                keys[i].classList.add("active");
                lockActive[i] = true;

            } else {
                keys[i].classList.remove("active");
                lockActive[i] = false;
            }

            if (lockActive[i]) {
                animateImage(locks[i], true);
                unlockPopups[i].classList.add("active");
                locks[i].classList.add("fade-out");
                keys[i].style.opacity = 0

            } else {
                animateImage(locks[i], false);
                unlockPopups[i].classList.remove("active");
                locks[i].classList.remove("fade-out");
                keys[i].style.opacity = 1
            }

        }
    }

    window.addEventListener("scroll", activeElement);
});

const images = ['images/lock.svg', 'images/unlock_1.svg', 'images/unlock_2.svg'];
function animateImage(lockElement, scrollDown) {
    for (let i = 0; i < images.length; i++) {
        if (scrollDown) {
            lockElement.src = images[i];
        } else {
            lockElement.src = images[2 - i];

        }
    }
}

