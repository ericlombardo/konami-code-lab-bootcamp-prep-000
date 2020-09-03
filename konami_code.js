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
  document.body.addEventListener('keydown', function(event) {
  if (event.key === 'a') {
    alert('bingo');
  });
  // check for 'keydown' events
  // if code is correct -> alert() congrats message
  // if not, keep listening

}
