const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progressBar');

document.addEventListener('scroll', () => {
  const bodyTop = document.body.getBoundingClientRect().top;
  const progressBarTop = progressBar.getBoundingClientRect().top;
  const progressBarHeight = progressBar.getBoundingClientRect().height;
  const scrollY = window.scrollY;
  const offset = progressBarTop - bodyTop;
  if (offset - scrollY < 100 && offset - scrollY > -progressBarHeight) {
    const percent = Math.round((scrollY - offset) / progressBarHeight * 100) + 10;
    progress.style.height = `${percent}%`;
  } else if (offset - scrollY >= -50) {
    progress.style.height = '0%';
  }
});