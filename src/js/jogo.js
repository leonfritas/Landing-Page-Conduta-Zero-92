const personagem = document.querySelector('.personagem')
const obstaculo = document.querySelector('.obstaculo')
const cardCaracter = document.getElementsByClassName('card-caracter')
//const botaoPular = document.getElementsByClassName('botaoPular')
const gameBoard = document.getElementsByClassName('game-board')
const contadorHtml = document.getElementsByClassName('contador') 
const botaoReset = document.getElementsByClassName('botaoReset')
const trocarPersonagem =document.getElementsByClassName('trocarPersonagem')

let contador = 0  

console.log(contador)

function contadorfunction(){
    contador++
    contadorHtml[0].innerHTML = contador < 10? '0' + contador : contador

    // if (contador - 10){
    //     '0' + contador
    // }
    
}


const jump = ()=>{
    personagem.classList.add('jump')
    
    setTimeout(()=>{
    personagem.classList.remove('jump')
    contadorfunction()
}, 500)
}

// function reduzUmContador(){
//     contadorHtml[0].innerHTML = contador < 10? '0' + contador -1 : contador -1
// }



let urlPersonagem = personagem.src


const loop = setInterval(()=>{

    const obstaculoPosition = obstaculo.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');

    
    


    if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){
        // setTimeout(()=>{
        //     reduzUmContador()
        // }, 501)
        
        
        audioGame[0].src = './src/music/audiogamefalhou.mp3'
   
        obstaculo.style.animation = 'none'
        obstaculo.style.left = `${obstaculoPosition}px`;

                      
        personagem.style.bottom = `${personagemPosition}px`;

        personagem.src = '././src/images/jogo/gameover.png'

        

        botaoReset[0].style = 'display: block'

         clearInterval(loop)

        botaoReset[0].addEventListener('click', ()=>{
            contador = 0;
            contadorHtml[0].innerHTML = contador
            gameBoard[0].removeAttributeNS
            obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'
            personagem.style.animation = ''
            personagem.style.bottom = 0;
            botaoReset[0].style = 'display: none'
            personagem.src = urlPersonagem

            

            setInterval(()=>{

                const obstaculoPosition = obstaculo.offsetLeft;
                const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
            
                
            
                if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){
                    // setTimeout(()=>{
                    //     reduzUmContador()
                    // }, 501)
                    
                    //let urlPersonagem = personagem.src
            
                    console.log(personagem.src)
                    obstaculo.style.animation = 'none'
                    obstaculo.style.left = `${obstaculoPosition}px`;
            
                    personagem.style.animation = 'none'
                    personagem.style.bottom = `${personagemPosition}px`;
            
                    personagem.src = '././src/images/jogo/gameover.png'
            
                    //audioGame[0].src = './src/music/audiogamefalhou.mp3'
            
                    botaoReset[0].style = 'display: block'

            
                }
            }, 10);
            
        
        })

        
        // clearInterval(loop) 
        
    }
}, 10);

console.log(containers)

trocarPersonagem[0].addEventListener('click', ()=>{
    gameBoard[0].classList.remove('mostrargame-board')
    containers[6].classList.add("mostrar")
    selectCaracter[0].classList.add('mostrarcaracter')
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
            
            
})

cardCaracter[0].addEventListener('click',()=>{
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.add('mostrargame-board')
    personagem.src = "./src/images/jogo/personagemlacruz.jpg"
    obstaculo.src = "./src/images/jogo/obstaculolacruz.jpg"
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
    loop
    urlPersonagem = personagem.src

})




cardCaracter[1].addEventListener('click', ()=>{
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.add('mostrargame-board')
    personagem.src = "./src/images/jogo/personagemrafael.jpg"
    obstaculo.src = "./src/images/jogo/obstaculorafael.jpg"
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
    loop
    urlPersonagem = personagem.src
} )

cardCaracter[2].addEventListener('click', ()=>{
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.add('mostrargame-board')
    personagem.src = "./src/images/jogo/personagemleo.jpg"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
    loop
    urlPersonagem = personagem.src
} )

cardCaracter[3].addEventListener('click', ()=>{
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.add('mostrargame-board')
    personagem.src = "./src/images/jogo/personagempedro.jpg"
    obstaculo.src = "./src/images/jogo/obstaculopedro.jpg"
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
    loop
    urlPersonagem = personagem.src
} )

// clearInterval(loop)


document.addEventListener('keydown', jump)

