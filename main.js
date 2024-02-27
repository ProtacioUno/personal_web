
// elemenks = document.querySelector('.skill_container') ; 
elemenks = document.querySelector('#content') ; 
// proj_showcase = document.querySelector('.project_showcase'); 

// elemenks.addEventListener("click", myFunction);



elemenks.addEventListener("click", myFunction);

// function myFunction(){
//   alert('cleck')
// }



// INITIALIZE NEEDS 
function myFunction(e) {
    // console.log
    console.log(e)
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


window.addEventListener('load' , (e)=>{
    startQueries();
    // console.log(e) ; 
})



// const startQueries = () => {
//     const media_query = window.matchMedia('( min-width : 400px )')
    
//     console.log(e)
    
//     if(media_query.matches){
//         console.log("it matehces !  ")
//     //    alert('matches!') ; 
//         // console.log(media_query)
//     }
//     // print(media_query.addEventListener)


    
// }
 
// window.addEventListener('load' , () => {
//     startQueries(); 
// })


// // Create a MediaQueryList object for max-width: 700px
// const mediaQuery = window.matchMedia("(min-width: 400px)");

// // Define a function to handle changes
// function handleViewportChange(event) {
//     if (event.matches) {
//         // If viewport is <= 700px wide
//         document.proj_showcase.style.backgroundColor = "yellow";
//     } else {
//         // If viewport is > 700px wide
//         document.proj_showcase.backgroundColor = "pink";
//     }
// }

// // Call the function initially
// handleViewportChange(mediaQuery);

// // Attach listener for changes
// mediaQuery.addEventListener("change", handleViewportChange);


// const tool_lest = document.querySelectorAll('.tool_list');


function myFunction(x) {
    if (x.matches) { // If media query matches
      
      console.log("singkamas ", tool_lest.innerHTML)
      // alert()
        // alert('higher !'); 
    //   document.bodasdasy.style.backgroundColor = "yellow";
    } else {
        alert('lower !')
    //   document.body.style.backgroundColor = "pink";
    }
  }

//   Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 500px)")
   
  // Call listener function at run time
  // myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  }); 




const  tool_lest = document.querySelector('.tool_list').textContent;
// const tool_lest = document.querySelectorAll('.tool_list').children;
const emo = document.querySelector('#tool_bar');
   
  emo.addEventListener('click', ()=>{
    console.log('it wokks ! '); 
    // console.log(tool_lest.innerHTML)

    for(let i=0 ; i<20; i++){
      console.log(tool_lest[i])
    }
    // console.log(tool_lest[3])
    // console.log(tool_lest[])
    // console.log(tool_lest[3])
    //  console.log(typeof tool_lest)  
    

    
    
    // console.log("ukinaam ${tool_lest}"); 
    
  })