let lefty = document.getElementById('leftContainer');
let righty = document.getElementById('rightContainer');

function getRandomInt() {
  return Math.floor(Math.random() * 2);
}

function getRandomInt2() {
  return Math.floor(Math.random() * 2);
}

let linesAdded = 0;
let maxLines = 200;
let arr = [];
let arr2 = [];

// The second interval (interval2) runs indefinitely without being cleared
setInterval(() => {
    swapArrays(arr, arr2);
    wrapper();
}, 100);

let interval = setInterval(() => {
    arr.push(getRandomInt());
    lefty.innerHTML = arr.join('');
    arr2.push(getRandomInt2());
    righty.innerHTML = arr2.join('');
      wrapper();
}, 10);
// interval()


function wrapper() {
    let left = arr.length;
    let right = arr2.length; // Use arr2.length to get the length of the joined string

    if (left % 21=== 0) {
        arr.push("<br>");
        linesAdded++;
    }
    if (right % 21 === 0) {
        arr2.push("<br>");
        linesAdded++;
    }

    // if (linesAdded >= maxLines) {
    //     clearInterval(interval); // Clear only the first interval, not the second one
    // }
}
function swapArrays(arr1, arr2) {
    let temp = arr1.slice();
    arr1.length = 0;
    arr1.push(...arr2);
    arr2.length = 0;
    arr2.push(...temp);
}

let UserInteract = document.getElementById('UserInteract')
let msg = [
    "INTIALIZING THE DATA...",
    "FETCHNG THE DATA FROM THE CHROME...",
    "CONNECTING TO THE SERVER",
    "USERNAME FOUND SUCESSFULLY!",
    "CONNECTING TO THE FACEBOOK...",
    "CRACKING DOWN THE PASSWORD...",
    "2000K PASSWORD TRIED...",
    "MATCH NOT FOUND!",
    "200K PASSWORD TRIED",
    "MATCH FOUND!",
    "ACESSING ACCOUNT...",
    "FACEBOOK HACKED SUCESSFULLY!",
]
let MsgLength = msg.length;

const sleep = (seconds) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
                resolve(true)
         },seconds*1000)
    })
} 

const Handler = async (message) =>{
    await sleep(1);
   console.log(message);
UserInteract.innerHTML +=  message + "<br>";
}

(async () => {
    for(let i = 0; i<msg.length; i++){
        await Handler(msg[i]);
    }
})()

// UserInteract.innerHTML = ""