
// elemenks = document.querySelector('.skill_container') ; 
elemenks = document.querySelector('#content') ; 
// let proj_showcase = document.querySelector('.project_showcase'); 

// elemenks.addEventListener("click", myFunction);



// proj_showcase.addEventListener("click", myFunction);

// INITIALIZE NEEDS 
// function myFunction(e) {
  // console.log
    // console.log(e)
    // proj_showcase.innerHTML = "Project <br> Showcase " ;  
    // proj_inner = proj_showcase.innerHTML ; 
    // proj_inner = "nice" ; 
    // print
    // alert(proj_inner);   
    
    // alert(typeof proj_inner);   
    // cnosole.log(proj_inner); 
    // alert(proj_showcase.innerHTML ) ;
    // alert("Hello World!");
  // }
  
  
  
  
  //   Create a MediaQueryList object
  let x = window.matchMedia("(max-width: 500px)")
  let proj_showcase = document.querySelector('.project_showcase'); 
  // let mediaQuery = window.matchMedia('(max-width:500px') ;    
  
  window.addEventListener('resize',()=>{
    // console.log('this changess ! '); 
    if(window.innerWidth < 500){
      console.log('it is less than');           
      proj_showcase.innerHTML = "Project Showcase " ;  
    } else {
      console.log('it is greater than') ; 
      proj_showcase.innerHTML = "Project <br> Showcase " ;  
  }

  console.log('why it ino working ? '); 
  
  // if(mediaQuery.matches){
  //   console.log('it is less than');     
  // } else {
  //   console.log('it is greater than') ; 
  // }
})




  // Call listener function at run time
  // myFunction(x);
  
  // Attach listener function on state changes
  // x.addEventListener("change", function(){
    
  //     // myFunction();
  // }); 




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

   

let contact_bar = document.querySelectorAll('.contact_bar') ; 
let github = document.querySelector('#github p') ;
let gmail = document.querySelector('#gmail p') ;  
// let gmail = 

contact_bar.forEach(contact_list => {
  contact_list.addEventListener('click' , (event)=>{
    // console.log('im working');
    // console.log(event.target)  ; 
    console.log(event.target.className)  ;  
    // console.log(typeof event.target.className)  ;   
    
    x = event.target.className
    

    // console.log(typeof event.target)  ; 
    if (['contact_bar github', 'fa-brands fa-github'].includes(x) ) {
      console.log(github) ; 
      github.classList.add('act') ;   
      setTimeout(function(){
        console.log('imwwoking shite') ; 
        github.classList.remove('act')
        
    } , 2000 )  

    if(gmail.classList.contains('act')  ){
      gmail.classList.remove('act')
    }
      
    }
    
    if (['contact_bar gmail' , 'gmail'].includes(x)) {
      console.log('do im working ?'); 
      gmail.classList.add('act')   ;         
      
      console.log(gmail); 
      setTimeout(function(){
        console.log('imwwoking shite') ; 
        gmail.classList.remove('act')
        
      } , 2000 )
      
      if(github.classList.contains('act')  ){
        github.classList.remove('act')
      }
      // gmail.innerHTML = "<div class='gmail'>  </div>  <p> enervinluan01@gmail.com </p>" ;                  
    }
    

    // TOOGGLE SOME this button using ACTIVE ! 

  
    
  })
  // addEventListene
    // console.log('helyy') ; 
});



  // console.log(contact_bar ) ;  