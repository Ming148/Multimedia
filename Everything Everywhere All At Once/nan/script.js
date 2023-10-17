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
    const contentElement = document.querySelector('#pic_part5_1');
    let animationStarted = false;

    const startAnimation = () => {
      if (!animationStarted && isElementInViewport(contentElement)) {
        // Start the animation only once
        contentElement.style.animation = 'foot 2s forwards';
        animationStarted = true;
      }
    };

    window.addEventListener('scroll', startAnimation);
  }

animateOnScroll()
console.log('Element scrolled!');

