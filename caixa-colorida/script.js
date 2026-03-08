const botao = document.getElementById("butao")
const lista = document.getElementById("caixa")

botao.addEventListener("click", () => {

    const caixa = document.createElement("div")
    caixa.classList.add("box")
    lista.appendChild(caixa)
})