const botao = document.getElementById("botao")
const itens = document.getElementsByClassName("item")

botao.addEventListener("click", () => {
    for(let item of itens){
        item.classList.toggle("marcador")
    }

})