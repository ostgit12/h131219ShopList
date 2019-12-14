//let msg = "Hello World! ";
//let txt = "This page is active!!!";

//alert(msg);
//alert(txt);


const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

const newItem = document.querySelector('.addItem');

newItem.addEventListener('click', addNewItem);

function addNewItem() {
  const itemTxt = document.querySelector('.itemTxt');
  const rngValue = document.querySelector('.rngBar');
  const itemColor = document.querySelector('.color');
  const itemPrice = document.querySelector('.itemPrice');
    
  let myItem = itemTxt.value+" (quantity: "+rngValue.value+", colour: "
  +itemColor.value+", price: "+itemPrice.value*rgnValue.value+")";
  itemTxt.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
  list.removeChild(listItem);
}
  input.focus();
  
}