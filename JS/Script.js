(function () {
  'use strict';

  const hamburger = document.querySelector('.icon-hamburger');
  const navigation = document.querySelector('.app__header-nav');

  hamburger.addEventListener('click', (evt)=>{
    evt.preventDefault();
  if (navigation.style.display === 'none') {
    navigation.style.display = 'flex';
    hamburger.src = './images/icon-close.svg';
  } else {
    navigation.style.display = 'none';
    hamburger.src = './images/icon-hamburger.svg';
  }

  })
}())