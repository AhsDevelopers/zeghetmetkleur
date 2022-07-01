var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");


window.addEventListener('load', (event) => {
    document.querySelector("#mobile-menu-btn").innerHTML = "MENU";
});


mobileMenuBtn.addEventListener("click", () => {
    if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "flex";
        mobileMenuBtn.innerHTML = "SLUITEN";
    } else {
        mobileMenu.style.display = "none";
        mobileMenuBtn.innerHTML = "MENU";
    }
});

function displayWindowSize() {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    // Display result inside a div element
    //document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h;

    if (w > 600) {
        //window.alert("document is groter dan 600");
        mobileMenu.style.display = "none";
    }
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();