const notLenght = document.querySelector('#list-notificacoes').lenght
const numeroDeNotificacao = document.querySelector('#notificationNumber').textContent = notLenght
function openBoxNotification() {
    const boxNotification = document.querySelector('.corpo-notificacoes')
    boxNotification.style.display = (boxNotification.style.display === 'flex') ? 'none' : 'flex';
}
/**
    ELE PEGA O PRIMEIRO <LI> 
    BOLAR UM JEITO DE PEGAR OS OUTROS ELEMENTOS!
    NAO TERMINADO, VAI TOMAR NO CU
 */
console.log(document.querySelector('#list-notificacoes').lenght);
