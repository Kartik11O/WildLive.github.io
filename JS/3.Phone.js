

//  window.addEventListener("orientationchange", function() {
     
//      if (window.matchMedia("(orientation: portrait)").matches) {
//          document.getElementsByTagName("BODY")[0].style.display = "block"   
//          document.getElementById("PH_Hide").style.display = "none"
//      }
     
//      if (window.matchMedia("(orientation: landscape)").matches) {
//         //   document.getElementsByTagName("BODY")[0].style.display = "none"
//       }
//   });


window.matchMedia("(orientation: portrait)").addEventListener("change" , e =>{
    const portrait = e.matches
    
    if(portrait){
 document.getElementById("PH_Hide").style.display = "block"

    }

    else{

        document.getElementById("PH_Hide").style.display = "none"

    }


})
