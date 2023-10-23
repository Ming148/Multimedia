var cards = document.querySelectorAll('.card');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateOnScroll() {
    const foot = document.querySelector('#pic_part5_1');
    const bottle_left = document.querySelector('#pic_part10_1');
    const bottle_right = document.querySelector('#pic_part10_3');
    let animationStarted = false;

    const startAnimation = () => {
      if (!animationStarted && isElementInViewport(foot)) {
        foot.style.animation = 'foot 2s forwards';
        animationStarted = true;
      }
      if(!animationStarted && (isElementInViewport(bottle_left) & isElementInViewport(bottle_right))){
        bottle_left.style.animation = 'toright 1s forwards';
        bottle_right.style.animation = 'toleft 1s forwards';
        animationStarted = true;
      }

    };
    window.addEventListener('scroll', startAnimation);
  }
  function animateOnScroll2() {
    const bottle_left = document.querySelector('#pic_part10_1');
    const bottle_right = document.querySelector('#pic_part10_3');
    let animationStarted = false;

    const startAnimation = () => {
      if(!animationStarted && (isElementInViewport(bottle_left) & isElementInViewport(bottle_right))){
        bottle_left.style.animation = 'toright 1s forwards';
        bottle_right.style.animation = 'toleft 1s forwards';
        animationStarted = true;
      }
    };
    window.addEventListener('scroll', startAnimation);
  }
  animateOnScroll();
  animateOnScroll2()
console.log('Element scrolled!');

