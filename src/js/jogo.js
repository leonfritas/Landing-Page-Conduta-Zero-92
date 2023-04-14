const personagem = document.querySelector('.personagem')
const obstaculo = document.querySelector('.obstaculo')
const cardCaracter = document.getElementsByClassName('card-caracter')
const gameBoard = document.getElementsByClassName('game-board')
const contadorHtml = document.getElementsByClassName('contador') 
const botaoReset = document.getElementsByClassName('botaoReset')
const trocarPersonagem = document.getElementsByClassName('trocarPersonagem')
const botaoStart = document.getElementsByClassName('start')

let contador = 0 

let velocidade = 1.5

function startGame(){
    botaoStart[0].style = 'display: none'
    obstaculo.style = 'animation: obstaculo-animation 1.5s infinite linear;'

}





function contadorfunction(){
    contador++
    contadorHtml[0].innerHTML = contador < 10? '0' + contador : contador

    }   

    function aumentaVelocidade(){
        // const obstaculoPosition = obstaculo.offsetLeft;
        
        // const personagemPositionRight = +window.getComputedStyle(personagem).right.replace('px', '')
        // console.log(obstaculoPosition)


        // if(obstaculoPosition > 200   &&  personagemPositionRight < obstaculoPosition){

        //     if (contador > 5){
        //         const obstaculoPosition = obstaculo.offsetLeft;
        //         // obstaculo.style = 'animation: none;'
        //         obstaculo.style = `animation: obstaculo-animation ${velocidade - 0.1}s infinite linear;`
        //     }

        //     if (contador > 10){
        //         // obstaculo.style = 'animation: none;'
        //         obstaculo.style = `animation: obstaculo-animation ${velocidade - 0.2}s infinite linear;`
        //     }

        //     if (contador > 15){
        //         // obstaculo.style = 'animation: none;'
        //         obstaculo.style = `animation: obstaculo-animation ${velocidade - 0.3}s infinite linear;`
        //     }
        //     console.log(contador)
        //     console.log(velocidade)
        //     console.log(obstaculo.style.animation)       
        // }
  
    }

const jump = ()=>{
    personagem.classList.add('jump')
    

    
    //
    
    setTimeout(()=>{
    personagem.classList.remove('jump')
    const obstaculoPosition = obstaculo.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    const personagemPositionRight = +window.getComputedStyle(personagem).right.replace('px', '')

    
    if(obstaculoPosition > 200   &&  personagemPositionRight < obstaculoPosition){

        contadorfunction()
        aumentaVelocidade()
    }

    
}, 500)}

let urlPersonagem = personagem.src


const loop = setInterval(()=>{

    const obstaculoPosition = obstaculo.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');

    
    


    if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){
        
        clearInterval(loop)
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
            setTimeout(()=>{
                botaoReset[0].style = 'display: none'
            }, 100)
            
            personagem.src = urlPersonagem

            audioGame[0].src = './src/music/audiogamedk.mp3'
        
            const loopReset = setInterval(()=>{

                const obstaculoPosition = obstaculo.offsetLeft;
                const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
            
           
            
                if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){
                    clearInterval(loopReset)
 
                    audioGame[0].src = './src/music/audiogamefalhou.mp3'
                    
                    obstaculo.style.animation = 'none'
                    obstaculo.style.left = `${obstaculoPosition}px`;
            
                    personagem.style.animation = 'none'
                    personagem.style.bottom = `${personagemPosition}px`;
            
                    personagem.src = '././src/images/jogo/gameover.png'
            
                    botaoReset[0].style = 'display: block'

            
                }
            }, 10);
            
        
        })
        
    }
    
}, 10);



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

    const loopReset = setInterval(()=>{

        const obstaculoPosition = obstaculo.offsetLeft;
        const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    
        
    
        if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){

            clearInterval(loopReset)

            obstaculo.style.animation = 'none'
            obstaculo.style.left = `${obstaculoPosition}px`;
    
            personagem.style.animation = 'none'
            personagem.style.bottom = `${personagemPosition}px`;
    
            personagem.src = '././src/images/jogo/gameover.png'
    
            botaoReset[0].style = 'display: block'

    
        }
    }, 10);
         
            
})

cardCaracter[0].addEventListener('click',()=>{
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.add('mostrargame-board')
    personagem.src = "./src/images/jogo/personagemlacruz.gif"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: none'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
    loop
    urlPersonagem = personagem.src
    botaoStart[0].style = 'display: block'
    obstaculo.style = 'display: none'

})


cardCaracter[1].addEventListener('click', ()=>{
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.add('mostrargame-board')
    personagem.src = "./src/images/jogo/personagemrafael.gif"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: none'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
    loop
    urlPersonagem = personagem.src
    botaoStart[0].style = 'display: block'
    obstaculo.style = 'display: none'
} )

cardCaracter[2].addEventListener('click', ()=>{
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.add('mostrargame-board')
    personagem.src = "./src/images/jogo/personagemleo.gif"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: none'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
    loop
    urlPersonagem = personagem.src
    botaoStart[0].style = 'display: block'
    obstaculo.style = 'display: none'
} )

cardCaracter[3].addEventListener('click', ()=>{
    selectCaracter[0].classList.remove('mostrarcaracter')
    gameBoard[0].classList.add('mostrargame-board')
    personagem.src = "./src/images/jogo/personagempedro.gif"
    obstaculo.src = "./src/images/jogo/obstaculoleo.png"
    contador = 0;
    contadorHtml[0].innerHTML = contador
    gameBoard[0].removeAttributeNS
    obstaculo.style = 'animation: none'
    personagem.style.animation = ''
    personagem.style.bottom = 0;
    botaoReset[0].style = 'display: none'
    loop
    urlPersonagem = personagem.src
    botaoStart[0].style = 'display: block'
    obstaculo.style = 'display: none'
} )




document.addEventListener('keydown', jump)

