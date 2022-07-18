/*
When the button #counter_btn is clicked, display how many times it has been clicked in the span#click_count
*/
// YOUR CODE GOES HERE
const counter_btn = document.getElementById("counter_btn");
let click_count = document.getElementById("click_count");

counter_btn.addEventListener("click", countUpTotal);

function countUpTotal() {
click_count.innerHTML++; 
}

/*
When the button #reset_btn is clicked, reset the button click counter to 0
*/
// YOUR CODE GOES HERE
reset_btn.addEventListener("click", resetFunc); 

function resetFunc() {
     click_count.innerHTML = 0;
    
}


