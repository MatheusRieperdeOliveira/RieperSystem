const frm = document.querySelector("form");
const mensagem = document.querySelector(".userInvalido")
const h1 = document.querySelector('h1')
frm.inGo.addEventListener("click", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    const email = frm.inEmail.value;
    const senha = frm.inSenha.value;
    validacaoDeUsuarioNovo(nome, email, senha)
    novoUsuario(nome , email , senha)
})

function novoUsuario(nome, email, senha) {
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
}

function validacaoDeUsuarioNovo(nome, email, senha,) {
    if(!nome || !email || !senha){
        frm.style.display = 'none'
        mensagem.style.display = 'flex'
        h1.textContent = `Login Inválido`
    } else {
        window.location.href = '../PágLogin/pageLogin.html'
    }
}
function fechar(){
     mensagem.style.display = 'none'
        frm.style.display = 'flex'
        h1.textContent = `Tente Novamente`
}