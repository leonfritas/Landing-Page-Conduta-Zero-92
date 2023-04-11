const personagem = document.querySelector('.personagem')
const obstaculo = document.querySelector('.obstaculo')
const cardCaracter = document.getElementsByClassName('card-caracter')
const gameBoard = document.getElementsByClassName('game-board')
const contadorHtml = document.getElementsByClassName('contador') 
const botaoReset = document.getElementsByClassName('botaoReset')
const trocarPersonagem =document.getElementsByClassName('trocarPersonagem')

let contador = 0 

let velocidade = 1.5

console.log(contador)

function contadorfunction(){
    contador++
    contadorHtml[0].innerHTML = contador < 10? '0' + contador : contador

    
    

    console.log(velocidade)

    console.log(obstaculo.style.animation)

    }   

    function aumentaVelocidade(){
        const obstaculoPosition = obstaculo.offsetLeft;
        console.log(obstaculoPosition)


        // if (obstaculoPosition < 500){
        //     velocidade = velocidade + 0.5
        //     obstaculo.style = `animation: obstaculo-animation ${velocidade}s infinite linear;`
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

    aumentaVelocidade()
    if(obstaculoPosition > 200   &&  personagemPositionRight < obstaculoPosition){

        contadorfunction()
        
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
            botaoReset[0].style = 'display: none'
            personagem.src = urlPersonagem

            

            const loopReset = setInterval(()=>{

                const obstaculoPosition = obstaculo.offsetLeft;
                const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
            
                
            
                if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){
                    clearInterval(loopReset)
 
            
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

    const loopReset = setInterval(()=>{

        const obstaculoPosition = obstaculo.offsetLeft;
        const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    
        
    
        if (obstaculoPosition < 200 && obstaculoPosition > 0 && personagemPosition < 80){

            clearInterval(loopReset)

    
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
    console.log(loop)

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




document.addEventListener('keydown', jump)

