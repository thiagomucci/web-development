const botao = document.getElementById("botao")

botao.addEventListener("click", () => {

    const ultimo = document.querySelector("#lista li:last-child")
    ultimo.remove()

})