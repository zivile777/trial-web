function myFunction () {
    document.getElementById("demo_1").innerHTML = "Hello Dolly";
}

function myFunctionTwo () {
    document.getElementById("demo_2").style.fontSize =
    "25px";
}

function myFunctionThree () {
    document.getElementById("demo_3").style.display=
    "block";
}

// Get the modal
var modal = document.getElementById ("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function(){
    modal.style.display = "block";
};
    
// When the user clicks on <span> (x), close the modal
span.onclick = function(){
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(){
    if (event.target == modal) {
    modal.style.display = "none";
    }
};
