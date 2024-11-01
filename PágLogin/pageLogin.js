const frm = document.getElementsByTagName("form")[0]
const mensagem = document.querySelector('.mensagemDeLoginInvalido')
const botao = document.querySelector(".fechar")

frm.logar.addEventListener("click", (e) => {
    e.preventDefault();
    const email = frm.inEmail.value
    const senha = frm.inPassword.value

    const emailSalvos = localStorage.getItem('email')
    const senhaSalvos = localStorage.getItem('senha')

    if (email == emailSalvos && senha == senhaSalvos) {
        window.location.href = "../PágPrincipal/CanalPrincipal.html"
    } else {
      mensagem.style.display = 'flex'
      frm.style.display = 'none'    
    }
})

function fechar() {
    mensagem.style.display = "none"
    frm.style.display = 'flex'  
}