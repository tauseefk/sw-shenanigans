'use strict';

var init = () => {
  let fetcher = document.querySelector('#fetch');
  let solution = document.querySelector('#solution');
  let computeHere = document.querySelector('#computeHere');
  let compute = document.querySelector('#compute');
  let valueLabel = document.querySelector('label');
  let input = document.querySelector('#input');

  input.addEventListener('change', e => {
    valueLabel.textContent = e.target.value;
  });

  fetcher.addEventListener('click', e => {
    fetch('./src/app.js')
      .then(console.log.bind(this));
  });

  var fib = (n) => {
    if (n < 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }

  computeHere.addEventListener('click', e => {
    solution.textContent = 'computing..';
    let arg = document.querySelector('input').value;
    let processedData = fib(parseInt(arg, 10));
    solution.textContent = processedData;
  });

  if (window.Worker) {
    let worker = new Worker('./src/worker.js');
    compute.addEventListener('click', e => {
      solution.textContent = 'computing..';
      let arg = document.querySelector('input').value;
      let work = {
        operation: 'start',
        cb: fib.toString(),
        cbName: 'fib',
        arg: parseInt(arg, 10)
      }
      worker.postMessage(JSON.stringify(work));
    });
    worker.onmessage = (e) => {
      solution.textContent = e.data;
    }
  }
}

window.onload = function () {
  init();
}