const butao = document.getElementById("botao")
const apagar = document.getElementById("apaga")
const texto = document.getElementById("text")
const l = document.getElementById("lista")

apagar.addEventListener("click", () => {
    l.innerHTML = ""
})
butao.addEventListener("click", () => {
    const li = document.createElement("li")
    li.innerText = "conteudo"
    l.appendChild(li)
})