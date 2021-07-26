const inputEl = document.querySelector('input');
const galleryEl = document.querySelector('#boxes');
const creatBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]')


const createBoxes = () =>{
    const amount = Number(inputEl.value);
    let k = 20;
    for(let i=1; i<=amount; i+= 1) {
    
      const boxEl = document.createElement('div');
      boxEl.style.backgroundColor = `rgb(${Math.random()*100}, ${Math.random()*100}, ${Math.random()*100})`;
      boxEl.classList.add('design');  
      
      galleryEl.append(boxEl);
      boxEl.style.width = `${k+10}px`;
      boxEl.style.height = `${k+10}px`;
      k = k + 10;
         
    };
    
};

const destroyBoxes = () => {

    galleryEl.innerHTML = '';
    inputEl.value ='';

};

creatBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);



