const navbarEl = document.querySelector('.navbar')

const bottomContainerEl = document.querySelector(".bottom-container")


//console.log(bottomContainerEl.offsetTop)

//getting the Y axis number position based on px
//console.log(window.scrollY)

window.addEventListener("scroll", ()=> {
  if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active")
  } else {
    navbarEl.classList.remove("active")
  }
})