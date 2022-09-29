let hands = ['rock', 'paper', 'scissor'];
let player2 = '';
let player1 = hands[Math.floor(Math.random() * hands.length)];
let message = '';
// Create a function that returns a random item from the array
function rps() {
  player2 = hands[Math.floor(Math.random() * hands.length)];
  console.log(player2);
  if (player2 === 'rock' && player1 === 'paper') {
    message = 'player1 won ';
    console.log(message);
  } else if (player2 === 'paper' && player1 === 'scissor') {
    message = 'player1 won ';
    console.log(message);
  } else if (player2 === 'scissor' && player1 === 'rock') {
    message = 'player1 won ';
    console.log(message);
  } else if (player2 === player1) {
    message = 'It is a tie';
    console.log(message);
  } else {
    message = 'Player 2 won ';
    console.log(message);
  }
}
console.log(player2);
rps();
