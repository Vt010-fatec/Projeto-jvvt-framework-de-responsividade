// MENU RESPONSIVO DO BULMA

const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector("#menuPrincipal");

burger.addEventListener("click", function () {

    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");

});


// MODAL

const modal = document.querySelector("#modal");
const abrirModal = document.querySelector("#abrirModal");
const fecharModal = document.querySelector("#fecharModal");
const fecharModal2 = document.querySelector("#fecharModal2");
const fundoModal = document.querySelector(".modal-background");

function abrir() {
    modal.classList.add("is-active");
}

function fechar() {
    modal.classList.remove("is-active");
}

abrirModal.addEventListener("click", abrir);
fecharModal.addEventListener("click", fechar);
fecharModal2.addEventListener("click", fechar);
fundoModal.addEventListener("click", fechar);


// FORMULÁRIO

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.querySelector("#nome").value;

    alert("Obrigado, " + nome + "! Sua mensagem foi enviada.");

    formulario.reset();

});