const botao = document.getElementById("butao")
const lista = document.getElementById("text")

botao.addEventListener("click", () => {
    const li = document.createElement("li")
    li.innerText = "Novo paragrafo criado"
    lista.appendChild(li)
})
