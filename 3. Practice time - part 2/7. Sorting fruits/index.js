let fruit = ['🍎', '🍊', '🍎', '🍎', '🍊'];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');
let message = '';
let messageEl = document.getElementById('mes');
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function shelf() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === '🍎') {
      appleShelf.textContent += '🍎';
    } else if (fruit[i] === '🍊') {
      orangeShelf.textContent += '🍊';
    } else {
      message = 'there are no apple and orange';
      messageEl.innerText = message;
    }
  }
}
shelf();
