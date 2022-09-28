// javascript

let count = 0;

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
function increment() {
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
}
console.log(countEl);

function save() {
  let countStr = count + ' - ';
  saveEl.innerText += countStr;
  console.log(countStr);
  countEl.textContent = 0;
  count = 0;
}
