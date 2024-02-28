
let lefty = document.getElementById('leftContainer');
let righty = document.getElementById('rightContainer');

function getRandomInt() {
  return Math.floor(Math.random() * 2);
}
function getRandomInt2() {
  return Math.floor(Math.random() * 2);
}

let linesAdded = 0;
let maxLines = 50;
let interval;
let arr = [];
let arr2 = [];

interval = setInterval(() => {
    lefty.innerHTML += getRandomInt() ;
   righty.innerHTML += getRandomInt2() ;
    wrapper();
    // swapper();
}, 100);

function wrapper() {
   
    let left = lefty.innerHTML.length;
    let right = righty.innerHTML.length;

    if (left % 30 === 0 && left !== 0) {
        lefty.innerHTML += "<br>";
        linesAdded++;
    }
    if (right % 30 === 0 && right !== 0) {
        righty.innerHTML += "<br>";
        linesAdded++;
    }

    if (linesAdded >= maxLines) {
        clearInterval(interval); 
    }
}
