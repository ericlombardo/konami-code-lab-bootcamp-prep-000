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
  let index = 0;
  document.body.addEventListener('keydown', function(event) {
    if (event.key === codes[index]) {
      if (index === 9) {
        alert('Bingo!!!')
      } else {
      index += 1;
      }
    } else {
      index = 0;
    }
  });
}
init();
