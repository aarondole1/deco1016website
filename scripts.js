x = 0


function expand() {
    x += 1
    if (x % 2 == 1) {
        document.getElementById("secret").style.height = "10vh";
        document.getElementById("secret").style.opacity = "1";
        // document.getElementById("secret").style.display = "block";
    } else {
        document.getElementById("secret").style.height = "0vh";
        document.getElementById("secret").style.opacity = "0";
        // document.getElementById("secret").style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function whyMenu() {
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}