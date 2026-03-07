const butao = document.getElementById("botao")
const n = document.getElementById("num")
const l = document.getElementById("lista")

butao.addEventListener("click", () => {
    l.innerHTML = ""
    let valor = n.value
    for(let i = 1; i < 10; i++){
        const li = document.createElement("li")
        li.innerText = (valor*i)
        l.appendChild(li)
    }
})