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
  let  index = 0
  document.body.addEventListener("keydown", function(event) {
    let key = event.key
    index = (codes[index] === key) ? (index = index + 1 || ++index) : 0
    if(index === codes.length) {
      window.alert('You figured it out');
      index = 0
    }
  })
}
