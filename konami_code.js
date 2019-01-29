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
  let codePath = codes.slice()

  const konami = (event) => {
    if (event.key === codePath[0]) {
      codePath.shift()
      if (codePath.length === 0) {
        window.alert("You have infinite lives!")
      }
    } else {
      codePath = codes.slice()
    }
  }

  document.body.addEventListener('keydown', konami)
}
