const openModalButton = document.querySelector(".solicitacoes, input");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");



const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});


const button = document.querySelector("#allSolicit");
const modal2 = document.querySelector("dialog");
const closeModal2Button = document.querySelector("#voltarButton");

button.onclick = function () {
  modal2.showModal();
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

function closeModal2() {
  modal2.close();
};


/* função de logar */


function logar() {

  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  if (email == "fornecedor@fortes.com.br") {
    location.href = "home.html";
  }
  if (email == "cliente@fortes.com.br") {
  location.href = "funcVerifc.html";
  }
   else {
    alert('Usuario ou senha incorretos');
  };

};






