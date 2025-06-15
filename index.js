// Your code here

const dodger = document.getElementById("dodger");// we are accessing the element by its Id

// we create a named function for the left arrow key
//so girst we determine the current position of the dodger and remove the px in the string, eg. if it was "20px", now we have "20".
// now we turn the string, eg. "20px" into integer using parseInt method and using base of 10 for normal numbers. base of 2 would be binary.
// now we move to the left but on condition that we havent reached the edge.

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Now we have determined what should happen if an event of pressing key happens. 
// the keydown event tells JS that a key is pressed. Could be anykey.
// The function now is the response to the key being pressed. 
// the response is that is the key pressed is arrowleft key,
// then the moveDodgerLeft function should be called
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10);

    if(left<360){
        dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener(keydown, function(e){
    if(e.key==="ArrowLeft"){
        moveDodgerLeft();
    } else if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
});