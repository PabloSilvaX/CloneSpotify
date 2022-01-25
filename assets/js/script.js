const modal = document.getElementById('modal-sobre');
const btnFechar = document.getElementById('modal-fechar');
const timeModal = document.getElementById('time-modal');

var cont = 20;

btnFechar.addEventListener('click', ()=>{
  fecharModal();
});

function fecharModal(){
  modal.style.display = 'none';
}

var intervalo = setInterval((e)=>{
    cont--;
    timeModal.innerHTML = cont;
    if(cont <= 0){
      fecharModal();
      clearInterval(intervalo);
    }
},1000)

intervalo;