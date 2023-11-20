const button2 = document.querySelector("#verificador");
const modal2 = document.querySelector("dialog");
button2.onclick = function () {
    modal2.showModal();
};

     function closeModal3() {
    modal2.remove();
  };

document.querySelectorAll('.tabela table button').forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        this.classList.toggle('greenButton');
    })
    
})