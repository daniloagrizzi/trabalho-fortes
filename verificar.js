

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

 // Obter o valor armazenado em localStorage
 const idValue = localStorage.getItem("idValue");

 // Exibir o valor no elemento com id "idText"
 document.getElementById("idText").innerHTML = idValue;

 // Limpar o valor de localStorage (opcional, dependendo dos requisitos do seu aplicativo)
 localStorage.removeItem("idValue");
   

