const boton = document.querySelector(".btnburger");
const lines = document.querySelectorAll(".bar");

const animateBoton = ()=>{
  for(line of lines){
    line.classList.remove("no-animation");
    line.classList.toggle("animate");
  }
}

boton.addEventListener("click", animateBoton);