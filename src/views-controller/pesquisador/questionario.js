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
        .addEventListener('click',questaoController.goToUpdate)
    

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
        

});