//seleciona o elemento
const dino = document.querySelector('.dino');

const background = document.querySelector('.background');

let isJumping = false;

let isGameOver = false;

let position = 0; //posicao inicial dino

//console.log(dino);

//Criar uma função para identificar quando o usuário pressionou a tecla espaço (32)
//www.keycode.info
function handleKeyUp(event){
    if(event.keyCode === 32){
        //console.log('pressionou tecla');
        if(!isJumping){
            jump();
        }
    }
}



//função para fazer o dino pular
function jump(){
    isJumping = true;

    //animacao - a cada 20sec add 20 na posicao
    let upInterval = setInterval(()=>{
        if(position>=150){
            clearInterval(upInterval);

            //para descer
            let downInterval = setInterval(()=>{
                //condicao descida
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }
                else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }
        else {
            //para subir
            position += 20;

            dino.style.bottom = position + 'px';
        }
    }, 20);
}

//Criando o cactus
function createCactus(){

    //cria o elemento html div a partir do js
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    
    //variável para fazer o cactus aparecer de forma aleatória
    let randomTime = Math.random()*6000; //gera numero aleatorio

    if(isGameOver) return;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus);

    //Fazer o movimento
    let leftInterval = setInterval(()=> {
       
        //Para remover o cactus anterior quando sair da tela
        if(cactusPosition<-60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        //detectar colisao dos elementos
        else if(cactusPosition>0 && cactusPosition<60 && position<40) {
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }
        else {
            //velocidade que se move para a esquerda
            cactusPosition -= 5;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    //usa recursão para chamar a própria função e criar novo cactus
    setTimeout(createCactus, randomTime);
    //a cada período de tempo aleatório, cria um novo cactus

    

}

createCactus();

//Para fazer o dino pular ao pressionar espaço
//Para isso, criar um event listener
document.addEventListener('keyup', handleKeyUp);

