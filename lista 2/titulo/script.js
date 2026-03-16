const title = document.getElementById("titulo")
const butao = document.getElementById("botao")

butao.addEventListener("click", () => {
    title.classList.toggle("azul")
})