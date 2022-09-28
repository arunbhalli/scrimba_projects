// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let message = '';
let messageEl = document.getElementById('error');
function errorMessage() {
  message = 'Something went wrong, please try again';
  messageEl.innerText = message;
  console.log(message);
}
