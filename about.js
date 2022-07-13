document.getElementById("nav-home").addEventListener("click", navHome);
document.getElementById("how-to-play").addEventListener("click", howToPlay);


async function navHome() {
  window.location.href="/index.html"
}

async function howToPlay() {
  var instructions = document.createElement("div")
  let boxDiv = document.getElementById("how-to")
    boxDiv.appendChild(instructions);
    instructions.className = "instructions"
    instructions.id = "instruction-box"
  var escape = document.createElement("div");
    instructions.appendChild(escape);
    escape.id = "escape-button"
    escape.innerHTML = "X"
document.getElementById("escape-button").addEventListener("click", exOut);

var title = document.createElement('h2');
  title.innerHTML = 'How To Play:';
  instructions.appendChild(title);
var p = document.createElement('p');
  p.innerHTML = 'Write the longest word you can think of within the time limit. The longer the word, the higher the score!';
  instructions.appendChild(p);
var l = document.createElement('p');
  l.innerHTML = "The faster you are, the more time you will have for the next round!";
  instructions.appendChild(l);
var m = document.createElement('p');
  m.innerHTML = "Careful, the words will get longer so make sure you save up your time!";
  instructions.appendChild(m);
  animateCSS(instructions, "fadeIn")
}

async function exOut() {
  let instructions = document.getElementById("instruction-box")
  //animateCSS(instructions, "fadeOut")
  instructions.remove();
}