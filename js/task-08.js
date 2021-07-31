const inputEl = document.querySelector('input');
const galleryEl = document.querySelector('#boxes');
const creatBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]')

    
    let a = 20;
    let b = 20;
const createBoxes = () =>{
    const amount = Number(inputEl.value);
      
    for(let i=1; i<=amount; i+= 1) {
    
      const boxEl = document.createElement('div');
      boxEl.style.backgroundColor = `rgb(${Math.random()*100}, ${Math.random()*100}, ${Math.random()*100})`;
      boxEl.classList.add('design');  
      galleryEl.append(boxEl);
      boxEl.style.width = `${a+=10}px`;
      boxEl.style.height = `${b+=10}px`;
     
     
    };
   
};

const destroyBoxes = () => {

    galleryEl.innerHTML = '';
    inputEl.value ='';
    a=20;
    b=20;
};

creatBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);



