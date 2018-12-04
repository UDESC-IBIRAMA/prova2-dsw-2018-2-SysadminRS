
function letraA(){
    //const ev = evento.currentTarget;
    const buscaTitulo = document.querySelector('#inputitulo');
    //buscaTitulo.textContent
    console.log(buscaTitulo.innerHTML);

    //ev.removeEventListener('click', letraA);
}
const botao = document.querySelector('.btntitulo');
botao.addEventListener('click',letraA);



function letraB(){
    //const ev = evento.currentTarget;


    //ev.removeEventListener('click', letraB);
}
const btnB = document.querySelector('.btnresultados');
btnB.addEventListener('click',letraB);
