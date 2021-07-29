const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
  
];

const ingredientsEl = document.querySelector ('#ingredients');

const elem = ingredients.forEach(el => { 
const liEl = document.createElement('li');
liEl.textContent = `${el}`;
// console.log(liEl)
ingredientsEl.append(liEl);
});


