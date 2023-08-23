const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const modificadoresDeEstatistica = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const controle = evento.target.dataset.controle;
        const peca = evento.target.dataset.peca;

        atualizaEstatistica(controle, peca);
        atualizaContador(controle, peca);
    });
});

function atualizaContador(controle, peca) {
    const contador = document.querySelector(`[data-contador="${peca}"]`);

    if (controle === "-" && contador.value > 0) {
        contador.value = parseInt(contador.value) - 1;
    } else if (controle === "+" && contador.value < 99) {
        contador.value = parseInt(contador.value) + 1;
    }
}


function atualizaEstatistica(controle, peca) {
    const modificador = modificadoresDeEstatistica[peca];
    const contador = document.querySelector(`[data-contador="${peca}"]`);

    estatisticas.forEach((elemento) => {
        const tipo = elemento.dataset.estatistica;
        const valor = elemento.textContent;

        if (controle === "-" && contador.value > 0) {
            elemento.textContent = parseInt(valor) - modificador[tipo];
        } else if (controle === "+" && contador.value < 99) {
            elemento.textContent = parseInt(valor) + modificador[tipo];
        }
    })
}
