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