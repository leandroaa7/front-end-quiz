import Questionario from '../new/Questionario';

document.addEventListener('DOMContentLoaded', () => {
    let totalQuestao = document.getElementById('questionario-form').dataset.totalQuestao
    const questionario = new Questionario(totalQuestao);

    document
        .getElementById('voltar')
        .addEventListener('click', questionario.voltar);

    document
        .getElementById('avancar')
        .addEventListener('click', questionario.avancar)

})

