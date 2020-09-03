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
      var keystroke = event.key;
      if (key.charCodeAt(0) === 97) {
          alert('bingo yo');
      }
  });
  // check for 'keydown' events
  // if code is correct -> alert() congrats message
  // if not, keep listening

}
