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
var KonomiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(event) {
    if (event.keyCode() === KonomiCode[index]) {
      if (index === 9) {
        alert('Bingo!!!')
      } else {
      index += 1;
      }  
    }  
  });
}
init();