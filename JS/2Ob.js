
// const observer2 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         document.querySelectorAll(".Pics")[0].classList.add("H2");
//         document.querySelectorAll(".Pics")[2].classList.add("H2");
//         document.querySelectorAll(".Pics")[3].classList.add("H2");
//       } else{
//         document.querySelectorAll(".Pics")[0].classList.remove("H2");
//         document.querySelectorAll(".Pics")[2].classList.remove("H2");
//         document.querySelectorAll(".Pics")[3].classList.remove("H2");
//       }
//     })
//   })
  
//   observer2.observe(document.querySelector("#F1"));

  
  
  
  
const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('H2');
        } else{
            entry.target.classList.remove('H2')
        }
    })
})
const hiddenElement = document.querySelectorAll('#hidden')
hiddenElement.forEach((el) => observe.observe(el))




const observe2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('F_Show');

        } else{
            entry.target.classList.remove('F_Show')
        }
    })
})

const hiddenElement2 = document.querySelectorAll('.F1_class')
hiddenElement2.forEach((el) => observe2.observe(el))


// let videoP = document.querySelectorAll(".videoF")
let videoP = document.getElementById("hidden")

const videoOB = IntersectionObserver((entries) => { new
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            videoP.play()
        }
    })
})

