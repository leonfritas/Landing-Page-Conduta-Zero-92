const containers = document.querySelectorAll(".conteudo")
const home = document.getElementById("home")
const loja = document.getElementById("loja")
const discografia = document.getElementById("disc")
const fotos = document.getElementById("fotos")
const contato = document.getElementById("contato")
const body = document.getElementById("body")
const disco = document.getElementsByClassName("disco")
const discodesc = document.getElementsByClassName("discodesc")


console.log(disco)
console.log(discodesc)

disco[4].addEventListener("click", ()=>{
    discodesc[0].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[3].addEventListener("click", ()=>{
    discodesc[1].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")

})

disco[2].addEventListener("click", ()=>{
    discodesc[2].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[1].addEventListener("click", ()=>{
    discodesc[3].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[0].addEventListener("click", ()=>{
    discodesc[4].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})



home.addEventListener("click", () => {
    containers[0].classList.add("mostrar")
    containers[1].classList.remove("mostrar")
    containers[2].classList.remove("mostrar")
    containers[3].classList.remove("mostrar")
    containers[4].classList.remove("mostrar")
    body.classList.remove("mostrar")
    discodesc[0].classList.remove("mostrardesc")
    discodesc[1].classList.remove("mostrardesc")
    discodesc[2].classList.remove("mostrardesc")
    discodesc[3].classList.remove("mostrardesc")
    discodesc[4].classList.remove("mostrardesc")

})

loja.addEventListener("click", ()=>{
    containers[1].classList.add("mostrar")
    containers[0].classList.remove("mostrar")
    containers[2].classList.remove("mostrar")
    containers[3].classList.remove("mostrar")
    containers[4].classList.remove("mostrar")
    body.classList.add("mostrar")
    discodesc[0].classList.remove("mostrardesc")
    discodesc[1].classList.remove("mostrardesc")
    discodesc[2].classList.remove("mostrardesc")
    discodesc[3].classList.remove("mostrardesc")
    discodesc[4].classList.remove("mostrardesc")
})

discografia.addEventListener("click", ()=>{
    containers[2].classList.add("mostrar")
    containers[0].classList.remove("mostrar")
    containers[1].classList.remove("mostrar")
    containers[3].classList.remove("mostrar")
    containers[4].classList.remove("mostrar")
    body.classList.add("mostrar")
    discodesc[0].classList.remove("mostrardesc")
    discodesc[1].classList.remove("mostrardesc")
    discodesc[2].classList.remove("mostrardesc")
    discodesc[3].classList.remove("mostrardesc")
    discodesc[4].classList.remove("mostrardesc")
})

fotos.addEventListener("click", ()=>{
    containers[3].classList.add("mostrar")
    containers[0].classList.remove("mostrar")
    containers[1].classList.remove("mostrar")
    containers[2].classList.remove("mostrar")
    containers[4].classList.remove("mostrar")
    body.classList.add("mostrar")
    discodesc[0].classList.remove("mostrardesc")
    discodesc[1].classList.remove("mostrardesc")
    discodesc[2].classList.remove("mostrardesc")
    discodesc[3].classList.remove("mostrardesc")
    discodesc[4].classList.remove("mostrardesc")
})

contato.addEventListener("click", ()=>{
    containers[4].classList.add("mostrar")
    containers[0].classList.remove("mostrar")
    containers[1].classList.remove("mostrar")
    containers[2].classList.remove("mostrar")
    containers[3].classList.remove("mostrar")
    body.classList.add("mostrar")
    discodesc[0].classList.remove("mostrardesc")
    discodesc[1].classList.remove("mostrardesc")
    discodesc[2].classList.remove("mostrardesc")
    discodesc[3].classList.remove("mostrardesc")
    discodesc[4].classList.remove("mostrardesc")
})

