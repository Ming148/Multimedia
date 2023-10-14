// Funtion Scrollbar
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progressBar');

document.addEventListener('scroll', () => {
  const bodyTop = document.body.getBoundingClientRect().top;
  const progressBarTop = progressBar.getBoundingClientRect().top;
  const progressBarHeight = progressBar.getBoundingClientRect().height;
  const scrollY = window.scrollY;
  const offset = progressBarTop - bodyTop;
  if (offset - scrollY < 100 && offset - scrollY > -progressBarHeight) {
    const percent = Math.round((scrollY - offset) / progressBarHeight * 100) + 5;
    progress.style.height = `${percent}%`;
  } else if (offset - scrollY >= -50) {
    progress.style.height = '0%';
  }
});

// Funtion เปิดตู้
let showModal = document.querySelector('#for-sale');
let modal = document.querySelector('.sale-popup');
let closeModal = document.querySelector('#close-btn');
let isModalOpen = false;

const toggleModal = () => {
  if (isModalOpen) {
    modal.classList.add('hide');
    document.body.classList.remove('prevent-scroll');
  } else {
    modal.classList.remove('hide');
    document.body.classList.add('prevent-scroll');
  }
  isModalOpen = !isModalOpen;
}

showModal.addEventListener('click', () => {
  toggleModal();
});

closeModal.addEventListener('click', () => {
  toggleModal();
});

//Scroll เปิดรูป
document.addEventListener("scroll", activeA);
		function activeA(){
			let activeElement = document.querySelectorAll('.imgmoneyblack')
			for(let el of activeElement){
				let y = el.getBoundingClientRect().y
				let bodyY = parseInt(document.body.dataset.y)
				if (bodyY>y) {
					el.style.setProperty('--val',0)
				}else{
					let val = el.dataset.val
					el.style.setProperty('--val',val)
				}
			}
      let activeElement2 = document.querySelectorAll('.imgblendblack')
      for(let el of activeElement2){
				let y = el.getBoundingClientRect().y
				let bodyY = parseInt(document.body.dataset.y)
				if (bodyY>y) {
					el.style.setProperty('--val',0)
				}else{
					let val = el.dataset.val
					el.style.setProperty('--val',val)
				}
			}
      let activeElement3 = document.querySelectorAll('.imgtaskblack')
      for(let el of activeElement3){
				let y = el.getBoundingClientRect().y
				let bodyY = parseInt(document.body.dataset.y)
				if (bodyY>y) {
					el.style.setProperty('--val',0)
				}else{
					let val = el.dataset.val
					el.style.setProperty('--val',val)
				}
			}
		}