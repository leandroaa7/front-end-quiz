import Questao from '../new/Questao';

document.addEventListener('DOMContentLoaded', () => {

    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);

    let questaoController = new Questao();

    //questao
    document
        .getElementById('new-questao')
        .addEventListener('click', questaoController.goToAdd);

    document
        .getElementById('questoes')
        .addEventListener('click', questaoController.goToUpdate)

    document
        .querySelector('#btn-questao').children.excluir
        .addEventListener('click', questaoController.goToDelete)

    document
        .querySelector('.questao#form-alert-cancel')
        .addEventListener('click', questaoController.goToDeleteCancel)

    //alternativa
    document
        .getElementById('new-alternativa')
        .addEventListener('click', questaoController.goToAddAlternative);

    document
        .getElementById('alternativas')
        .addEventListener('click', questaoController.goToUpdateAlternative)

    document
        .getElementById('form-questao-alternativa')
        .addEventListener('click', questaoController.administrateAlternative)

    document
        .querySelector('#btn-alternativa').children.excluir
        .addEventListener('click', questaoController.goToDeleteUpdate)

    document
        .querySelector('.alternativa#form-alert-cancel')
        .addEventListener('click', questaoController.goToDeleteCancelUpdate)
});