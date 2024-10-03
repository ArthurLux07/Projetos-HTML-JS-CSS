const modal = document.getElementById("meuModal");

function abrirModal() {
    modal.style.display = "block";
}

function fecharModal() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target === modal) {
        fecharModal();
    }
}