
elemenks = document.querySelector('.skill_container') ; 
proj_showcase = document.querySelector('.project_showcase'); 

elemenks.addEventListener("click", myFunction);
 



// INITIALIZE NEEDS 
function myFunction() {
    // console.log
    proj_showcase.innerHTML = "Project <br> Showcase " ; 
    // proj_inner = proj_showcase.innerHTML ; 

    // proj_inner = "nice" ; 

    // print

    // alert(proj_inner);   

    // alert(typeof proj_inner);   
    // cnosole.log(proj_inner); 
    // alert(proj_showcase.innerHTML ) ;
    // alert("Hello World!");
}





// Create a MediaQueryList object for max-width: 700px
const mediaQuery = window.matchMedia("(max-width: 700px)");

// Define a function to handle changes
function handleViewportChange(event) {
    if (event.matches) {
        // If viewport is <= 700px wide
        document.proj_showcase.style.backgroundColor = "yellow";
    } else {
        // If viewport is > 700px wide
        document.body.style.backgroundColor = "pink";
    }
}

// Call the function initially
handleViewportChange(mediaQuery);

// Attach listener for changes
mediaQuery.addEventListener("change", handleViewportChange);



