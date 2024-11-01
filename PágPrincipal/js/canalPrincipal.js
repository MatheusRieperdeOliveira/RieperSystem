const menu = document.querySelector('#menu')

window.addEventListener('load', function () {
    const nome = localStorage.getItem('nome')
    console.log(nome)
    document.getElementById('nome').textContent = nome
})

menu.addEventListener('click', () => {
    const boxMenu = document.querySelector('.menu-content')
    if (boxMenu.style.display === 'flex') {
        boxMenu.style.display = 'none'
        menu.src = './Imagens/menu_hamburguer.png'
    } else {
        boxMenu.style.display = 'flex'
        menu.src = './Imagens/fechar.png'
    }
})

