const botao = document.getElementById("butao")
const lista = document.getElementById("lista")

botao.addEventListener("click", () => {
    for(let i = 1; i <= 5; i++){
        const li = document.createElement("li")
        li.innerText = (i)
        lista.appendChild(li)
    }
})