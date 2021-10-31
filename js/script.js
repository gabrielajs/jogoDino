const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let estaPulando = false;
let posicao = 0;

function lidarKeyUp(event) {
    if (event.keyCode === 32 || event.keyCode === 38) {
        if (!estaPulando) {
            pular();
        }
    }
}

function pular() {
    estaPulando = true;

    let pularIntervalo = setInterval(() => {

        if (posicao >= 150) {
            clearInterval(pularIntervalo);

            let descer = setInterval(() => {
                if (posicao <= 0) {
                    clearInterval(descer);
                    estaPulando = false;
                } else {
                    posicao -= 20;
                    dino.style.bottom = posicao + 'px';
                }

            }, 20);
        } else {
            posicao += 20;

            dino.style.bottom = posicao + 'px';
        }

    }, 20);
}

function criarCactos() {
    const cactos = document.createElement('div');
    let cactosPosicao = 1000;
    let randomTime = Math.random() * 6000;



    cactos.classList.add('cactos');
    cactos.style.left = 1000 + 'px';
    background.appendChild(cactos);

    let esquerdaInterval = setInterval(() => {
            if (cactosPosicao < -60) {
                clearInternal(esquerdaInterval);
                background.removeChild(cactos);
            } else if (cactosPosicao > 0 && cactosPosicao < 60 && posicao < 60) {
                //clearInternal(esquerdaInterval);

                document.body.innerHTML = '<h1 class = "gameOver" > fim de jogo! </h1>';
            } else {
                cactosPosicao -= 10;
                cactos.style.left = cactosPosicao + 'px';
            }
        },
        20);

    setTimeout(criarCactos, randomTime);
}

criarCactos();
document.addEventListener("keyup", lidarKeyUp);
document.addEventListener("keyup", lidarKeyUp);