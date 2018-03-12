'use strict';

var init = () => {
  let fetcher = document.querySelector('#fetch');
  fetcher.addEventListener('click', e => {
    fetch('./src/app.js')
      // .then(res => res.json())
      .then(console.log.bind(this));
  })
}

window.onload = function () {
  init();
}