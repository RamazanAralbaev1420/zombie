const linkYes = `https://amazon.pl/?vote=yes`; //здесь нужно водить линки
const linkNo = `https://amazon.pl/?vote=no`; //здесь нужно водить линки


// modal

const openModal = document.querySelectorAll('.openModal');
const modal = document.querySelector('.modal_container');
const modal_close = document.querySelector('.modal_close');
const modalBg = document.querySelector('.modal_background');
const closeModal = document.querySelector('.modal_close');

openModal.forEach((item) => {
  item.addEventListener('click', () => {
    console.log('btn click');

    modal.style.display = 'block';
    modalBg.style.display = 'block';
    document.body.classList.add('modal-open');
  });
});

modal_close.addEventListener('click', () => {
  modal.style.display = 'none';
  modalBg.style.display = 'none';
  document.body.classList.remove('modal-open');
});

// burger menu
const open_btns = document.querySelectorAll('.open_btn');
const mobile_links = document.querySelector('.mobile_links');
const close_btn = document.querySelector('.close_btn');

// Для всех кнопок "открытия" бургер-меню
open_btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    mobile_links.style.right = '0px';
  });
});

// Закрытие меню
close_btn.addEventListener('click', () => {
  mobile_links.style.right = '-100%';
});



// coockie
document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookieBanner').style.display = 'block';
  }
  document
    .getElementById('acceptCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookiesAccepted', 'true');
      document.getElementById('cookieBanner').style.display = 'none';
    });
});

// only_mobile container
window.addEventListener('load', function () {
  const mobile_content_no = document.querySelector('#mobile_content_no');
  const mobile_content_yes = document.querySelector('#mobile_content_yes');
  const container = document.querySelector('#accept_mobile_container');

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const gclid = urlParams.get('gclid');

  mobile_content_no.href = linkNo + gclid;
  mobile_content_yes.href = linkYes + gclid;
});

// coockie

window.addEventListener('load', function () {
  const cookieBanner = document.getElementById('cookieBanner');

  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'block';
  }

  document
    .getElementById('acceptCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
});
