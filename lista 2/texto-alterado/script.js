const texto = document.getElementsByClassName("texto")
const botao = document.getElementById("butao")

botao.addEventListener("click", () => {
    for(let textos of texto){
        textos.innerText = "texto alterado pelo javascript"
    }
})