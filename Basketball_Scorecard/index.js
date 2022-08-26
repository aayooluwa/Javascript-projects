let scoreHome = document.getElementById("scoreHome")
let scoreGuest = document.getElementById("scoreGuest")
let home = 0 
let guest = 0

function point_1_home() {
  home = home + 1;
  scoreHome.textContent = home
}

function point_2_home() {
  home = home + 2;
  scoreHome.textContent = home
}

function point_3_home() {
  home = home + 3;
  scoreHome.textContent = home
}

function point_1_guest() {
  guest += 1;
  scoreGuest.textContent = guest
}

function point_2_guest() {
  guest += 2;
  scoreGuest.textContent = guest
}

function point_3_guest() {
  guest += 3;
  scoreGuest.textContent = guest
}

function reset() {
  guest = 0
  home = 0
  scoreGuest.textContent = 0
  scoreHome.textContent = 0
}