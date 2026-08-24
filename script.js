const elementos = document.querySelectorAll('.historia');

function mostrarElementos() {
    elementos.forEach(elemento => {

        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            elemento.classList.add('aparecer');
        }

    });
}

window.addEventListener('scroll', mostrarElementos);

mostrarElementos();