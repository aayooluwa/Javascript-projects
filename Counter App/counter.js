let counter = document.getElementById("counter")

let count = 0 

function increment() {
  count = count + 1
  counter.textContent = count
}


function save() {
  current = counter.innerText + " - "

  let entries = document.getElementById("entries")

  entries.textContent += current

  counter.textContent = 0
  count = 0
} 