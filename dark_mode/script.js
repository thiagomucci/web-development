const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('click', () => {
    document.body.classList.toggle('discheck');
    document.body.classList.toggle('check');
})