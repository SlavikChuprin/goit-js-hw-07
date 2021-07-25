let counterValue =0 ;
const btnDecrEl = document.querySelector('button[data-action="decrement"]');
const btnIncrEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

const increment = () => {
   let counterAdd = ++counterValue;
   counterEl.textContent = counterAdd;
};

const decrement = () => {
    let counterAdd = --counterValue;
    counterEl.textContent = counterAdd;
};

btnDecrEl.addEventListener('click', decrement);
btnIncrEl.addEventListener('click', increment); 