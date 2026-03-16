const submit = document.getElementById('submit')
const nome = document.getElementById('name')
const password = document.getElementById('password')
const email = document.getElementById('email')


submit.addEventListener('click', () => {
    const inputs = [nome, password, email]
    for(const input of inputs){
        if(input.value == ""){
            input.classList.add('vazio')
        }
        else{
            input.classList.remove('vazio')
        }
    }})