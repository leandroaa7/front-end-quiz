import RecomendacaoController from '../new/Recomendacao';

document.addEventListener('DOMContentLoaded', () => {

    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);

    let recomendacaoController = new RecomendacaoController();

    document
        .getElementById('new-recomendacao')
        .addEventListener('click', recomendacaoController.goToAdd)

    document.getElementById('table-recomendacao')
        .addEventListener('click', recomendacaoController.goToUpdate);

    document
        .getElementById('excluir')
        .addEventListener('click', recomendacaoController.goToDelete)

    document
        .getElementById('form-alert-cancel')
        .addEventListener('click', recomendacaoController.goToDeleteCancel)
});