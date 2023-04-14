const containers = document.querySelectorAll(".conteudo")
const home = document.getElementById("home")
const loja = document.getElementById("loja")
const discografia = document.getElementById("disc")
const fotos = document.getElementById("fotos")
const contato = document.getElementById("contato")
const body = document.getElementById("body")
const disco = document.getElementsByClassName("disco")
const discodesc = document.getElementsByClassName("discodesc")
const chamarCarrossel = document.querySelectorAll(".foto")
const jogo = document.getElementById("jogo")
const selectCaracter = document.getElementsByClassName('select-caracter')
const audioGame = document.getElementsByClassName('audioGame')
const voltarDiscografia = document.getElementsByClassName('voltarDiscografia')



for(i = 0; i < 10; i++){
voltarDiscografia[i].addEventListener('click', () => {

    for(i = 0; i < 10; i++){
    discodesc[i].classList.remove("mostrardesc")
    }
    containers[2].classList.add("mostrar")

})
}


chamarCarrossel.forEach((item) => {
    item.addEventListener("click", ()=>{
        containers[4].classList.add("mostrar")
        containers[3].classList.remove("mostrar")
    })

})



disco[9].addEventListener("click", ()=>{
    discodesc[0].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[8].addEventListener("click", ()=>{
    discodesc[1].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[7].addEventListener("click", ()=>{
    discodesc[2].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[6].addEventListener("click", ()=>{
    discodesc[3].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[5].addEventListener("click", ()=>{
    discodesc[4].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[4].addEventListener("click", ()=>{
    discodesc[5].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")

})

disco[3].addEventListener("click", ()=>{
    discodesc[6].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[2].addEventListener("click", ()=>{
    discodesc[7].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[1].addEventListener("click", ()=>{
    discodesc[8].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})

disco[0].addEventListener("click", ()=>{
    discodesc[9].classList.add("mostrardesc")
    containers[2].classList.remove("mostrar")
})


home.addEventListener("click", () => {
    for(i = 0; i <= 6; i++){
        containers[i].classList.remove("mostrar")
    }
    containers[0].classList.add("mostrar")
    //
    body.classList.remove("mostrar")
    //
    for(i = 0; i <= 9; i++){
        discodesc[i].classList.remove("mostrardesc") 
    }
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.remove('mostrargame-board')
    audioGame[0].src = ''
})

loja.addEventListener("click", ()=>{
    for(i = 0; i <=6; i++){
        containers[i].classList.remove("mostrar")
    }
    //
    containers[1].classList.add("mostrar")
    //
    body.classList.add("mostrar")
    for(i = 0; i <= 9; i++){
        discodesc[i].classList.remove("mostrardesc") 
    }  
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.remove('mostrargame-board')
    audioGame[0].src = ''
})

discografia.addEventListener("click", ()=>{
    for(i = 0; i <=6; i++){
        containers[i].classList.remove("mostrar")
    }
    //
    containers[2].classList.add("mostrar")
    //
    body.classList.add("mostrar")
    for(i = 0; i <= 9; i++){
        discodesc[i].classList.remove("mostrardesc")  
    }  
    selectCaracter[0].classList.remove('mostrarcaracter') 
    gameBoard[0].classList.remove('mostrargame-board')
    audioGame[0].src = ''
})

fotos.addEventListener("click", ()=>{
    for(i = 0; i <=6; i++){
        containers[i].classList.remove("mostrar")
    }
    //
    containers[3].classList.add("mostrar")
    //
    body.classList.add("mostrar")
    for(i = 0; i <= 9; i++){
        discodesc[i].classList.remove("mostrardesc") 
    }    
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.remove('mostrargame-board')
    audioGame[0].src = ''
})

contato.addEventListener("click", ()=>{
    for(i = 0; i <=6; i++){
        containers[i].classList.remove("mostrar")
    }
    //
    containers[5].classList.add("mostrar")
    //
    body.classList.add("mostrar")

    for(i = 0; i <= 9; i++){
        discodesc[i].classList.remove("mostrardesc")  
    }
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.remove('mostrargame-board')
    audioGame[0].src = ''
    
})

jogo.addEventListener("click", ()=>{
    console.log(audioGame)

    audioGame[0].src = './src/music/audiogamedk.mp3'


    for(i = 0; i <=6; i++){
        containers[i].classList.remove("mostrar")
    }
    //
    containers[6].classList.add("mostrar")
    //
    body.classList.add("mostrar")

    for(i = 0; i <= 9; i++){
        discodesc[i].classList.remove("mostrardesc")  
    }
    selectCaracter[0].classList.add('mostrarcaracter')
    gameBoard[0].classList.remove('mostrargame-board')

    const loopReset = setInterval(()=>{

        const obstaculoPosition = obstaculo.offsetLeft;
        const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    
        
    
        if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){

            clearInterval(loopReset)

            audioGame[0].src = './src/music/audiogamefalhou.mp3'
            
            console.log(personagem.src)
            obstaculo.style.animation = 'none'
            obstaculo.style.left = `${obstaculoPosition}px`;
    
            personagem.style.animation = 'none'
            personagem.style.bottom = `${personagemPosition}px`;
    
            personagem.src = '././src/images/jogo/gameover.png'
    
            botaoReset[0].style = 'display: block'

    
        }
    }, 10);
    


})