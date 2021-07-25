const inputEl = document.querySelector('input');
const galleryEl = document.querySelector('#boxes');
const creatBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]')


const createBoxes = (amount) =>{
 
    for(let i=1; i<=amount; i+= 1) {

        galleryEl.insertAdjacentHTML('beforeend',`<div id='${i}'></div>`);
        const el = document.querySelector('#i');
        console.log(el);
        console.log(galleryEl.insertAdjacentHTML('beforeend',`<div id='${i}'></div>`));
        
        
        // el.style.wight = '30px';
        // el.style.height = '30px';
    };

};

createBoxes(2);



