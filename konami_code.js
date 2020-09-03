const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // attach event listener to document.body
  const main = document.querySelector('body');
  main.addEventListener('keydown', function(k) {
    if (k.value === 97) {
      console.log('hoooray')
    }
  });
  // check for 'keydown' events
  // if code is correct -> alert() congrats message
  // if not, keep listening

}
