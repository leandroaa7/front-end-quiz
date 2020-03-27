import PesquisadorController from './Pesquisador';

document.addEventListener("DOMContentLoaded", () => {
    //start modal
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    let pesquisadorController = new PesquisadorController();

    document
        .getElementById('new-pesquisador')
        .addEventListener('click', pesquisadorController.goToAdd)

    document.getElementById('table-pesquisador')
        .addEventListener('click', pesquisadorController.goToUpdate);

    document
        .getElementById('excluir')
        .addEventListener('click', pesquisadorController.goToDelete)

    document
        .getElementById('form-alert-cancel')
        .addEventListener('click', pesquisadorController.goToDeleteCancel)
})