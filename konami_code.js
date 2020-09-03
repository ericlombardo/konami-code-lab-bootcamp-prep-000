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
var KonomiCode = [24, 24, 25, 25, 27, 26, 27, 26, 98, 97];
function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(event) {
    while (event.key.charCodeAt() === KonomiCode[index]) {
      if (index === 9) {
        alert('Bingo!!!')
      }
      index += 1;  
    }
    index = 0;    
  });
}
