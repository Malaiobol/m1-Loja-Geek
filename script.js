const secaoListFigure   = document.querySelector('.action-figures');
const listActionFigures = document.querySelector('.list-action-figures');

const listPaintings     = document.querySelector('.list-paintings');
const secaoListPainting = document.querySelector('.paintings');

//LISTA ATUAL ''PINTURA''//

let listPainting = [
{
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/clock.jpg",
        Nome: 'Clock',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/gamepad.jpg",
        Nome: 'GamePad',
        Valor: 'R$50,00',
    },
    {
        Imagem: "./assets/img/painting/personagem.jpg",
        Nome: 'C3-PO',
        Valor: 'R$150,00',
    }
]

//FABRICA ITEM ''PINTURA''//

function createPaitingItem(objeto) {
    for(let i = 0; i < objeto.length; i++){
        const elementoLista = document.createElement('li')

        let img = document.createElement('img')
            img.src = objeto[i].Imagem
            img.alt = objeto[i].Nome
        let nome = document.createElement('p')
        let valor = document.createElement('span')

        elementoLista.classList.add('card')

        nome.innerText = `${objeto[i].Nome}`
        valor.innerText = `${objeto[i].Valor}`

        elementoLista.appendChild(img)
        elementoLista.appendChild(nome)
        elementoLista.appendChild(valor)

        listPaintings.appendChild(elementoLista)

    }
}
createPaitingItem(listPainting)

//LISTA FIGURE ACTION//

let listFigure = [    
    {
        Imagem: "./assets/img/actions/animewoman.jpg",
        Nome: 'Asuka',
        Valor: 'R$125,00',
    },
    {
        Imagem: "./assets/img/actions/dragonballpersonagem.jpg",
        Nome: 'Goku Super Sayajin',
        Valor: 'R$309,00',
    },
    {
        Imagem: "./assets/img/actions/starwarspersonagem.jpg",
        Nome: 'Baby Yoda',
        Valor: 'R$276,00',
    }
    //repeti o mesmo item para ativar o overflow
    
]

//FABRICA ITENS FIGURE ACTION//

function createActionItem(objeto) {
    for(let i = 0; i < objeto.length; i++){
        const elementoLista = document.createElement('li')

        let img = document.createElement('img')
            img.src = objeto[i].Imagem
            img.alt = objeto[i].Nome
        let nome = document.createElement('p')
        let valor = document.createElement('span')

        elementoLista.classList.add('card')

        nome.innerText = `${objeto[i].Nome}`
        valor.innerText = `${objeto[i].Valor}`

        elementoLista.appendChild(img)
        elementoLista.appendChild(nome)
        elementoLista.appendChild(valor)

        listActionFigures.appendChild(elementoLista)
    }
}
createActionItem(listFigure)