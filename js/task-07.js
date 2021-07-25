const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('span');

inputEl.addEventListener('input', () => {
   
    textEl.style.fontSize =  `${inputEl.value}px`; 
});