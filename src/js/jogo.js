const leo = document.querySelector('.leo')
const pipe = document.querySelector('.pipe')


//const botaoPular = document.getElementsByClassName('botaoPular')


console.log(pipe)
const jump = ()=>{
leo.classList.add('jump')
setTimeout(()=>{
    leo.classList.remove('jump')

}, 500)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const leoPosition = +window.getComputedStyle(leo).bottom.replace('px', '');

    console.log(leoPosition)

    if (pipePosition < 200 && pipePosition > 0 && leoPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`;

        leo.style.animation = 'none'
        leo.style.bottom = `${leoPosition}px`;

        leo.src = '././src/images/jogo/gameover.png'

        clearInterval(loop)
        
    }


}, 10);


console.log(pipe)

document.addEventListener('keydown', jump)

