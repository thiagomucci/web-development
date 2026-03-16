const destaque = document.getElementById("destaque")
const botao = document.getElementById("butao")

botao.addEventListener("click", () => {
    destaque.classList.toggle('destaca')
})