let password = "Hero123";
let attemptCount = 0;

while (true) {
    let inputPassword = prompt("Enter password to enter Samir's TodoList");
    if (inputPassword === password) {
        alert("Welcome to Samir's TodoList!");
        break; 
    } else {
     
        attemptCount++;
        if (attemptCount >= Infinity) {
            alert("Too many incorrect attempts. System locked.");
            break; 
        }
        alert("Wrong password. Please try again.");
    }
}

function myFunction(){
   Addsector.style.display = 'block'
   cards.style.display = 'none'
}
function myCloseFunction  () {
    Addsector.style.display = 'none';
    cards.style.display = 'block'
}
//UI123
let keey;
let Svalue;

let U1,U2,U3;

forSaver.addEventListener('click', (e)=>{
keey = document.getElementById("keey").value;
Svalue =document.getElementById("Svalue").value;
e.preventDefault();
    localStorage.setItem(keey,Svalue) 
    displaySavedNote();
});
let todayList = "Today's List";
let todoProj = "Todo projects";
let weekPlan = "Week Plan";
        function logInputData(e){
            // e.preventDefault();
            localStorage.setItem(todayList,UI1.value)
            displaySavedNote();
        console.log(UI1.value);
        }
        function logInputData2(e){
            // e.preventDefault();
            localStorage.setItem(todoProj, UI2.value)
            displaySavedNote();
        console.log(UI2.value);
        }
        function logInputData3(e){
            // e.preventDefault();
            localStorage.setItem(weekPlan,UI3.value)
            displaySavedNote();
        console.log(UI3.value);
        }
        function logDeleteData(){
                localStorage.removeItem(todayList)
                displaySavedNote();
              }
        function logDeleteData2(){
                localStorage.removeItem(todoProj)
                displaySavedNote();
              }
        function logDeleteData3(){
                localStorage.removeItem(weekPlan)
                displaySavedNote();
              }

              function displaySavedNote(){
                let allSaveNoteElement = document.getElementById('AllsaveNote');
                allSaveNoteElement.innerHTML = ""; 
            
                for (let i = 0; i < localStorage.length; i++) {
                    let key = localStorage.key(i);
                    let value = localStorage.getItem(key);
            
                    let uniqueId = `note_${i}`;
            
                    allSaveNoteElement.innerHTML += `
                        <div style="display: flex;">
                            <h1 id="${uniqueId}" style="padding-left: 20px;">${key}</h1>
                            <button class="deleter" data-key="${key}" style="margin-left: auto; margin-right:12px; border:none; color:white;"> X </button>
                        </div>
                        <h1 id="p_${uniqueId}" style="padding-left: 20px;">${value}</h1>
                    `;
                }
            
                // Attach event listeners after adding elements to the DOM
                let deleteButtons = document.querySelectorAll('.deleter');
                deleteButtons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        let keyToRemove = e.target.dataset.key;
                        localStorage.removeItem(keyToRemove);
                        displaySavedNote(); // Refresh the display after removal
                    });
                });
              }

     window.addEventListener('load', () => {
                displaySavedNote();
            });      
        





