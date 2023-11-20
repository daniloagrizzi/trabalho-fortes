

const button2 = document.querySelector("#open");
const modal2 = document.querySelector("dialog");
button2.onclick = function () {
    modal2.showModal();
};
function closeModal4() {
    modal2.remove();
  };


const tableButton = document.querySelector(".tabela table button");


document.querySelectorAll('.tabela table button').forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        this.classList.toggle('greenButton');
    })
    
})