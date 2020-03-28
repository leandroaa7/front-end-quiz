import Questionario from '../new/Questionario';

document.addEventListener('DOMContentLoaded', () => {
    let totalQuestao = document.getElementById('questionario-form').dataset.totalQuestao
    const questionario = new Questionario(totalQuestao);

    let questaoRadioList = document.querySelectorAll('.questao-radio');
    for (let questao of questaoRadioList) {
        //buscar todos os radio buttons para adicionar o número da questao
        let index = questao.dataset.index;
        questao.querySelectorAll('input').forEach((el) => {
            el.name = el.name + index;
        })
    }

    document
        .getElementById('voltar')
        .addEventListener('click', questionario.voltar);

    document
        .getElementById('avancar')
        .addEventListener('click', questionario.avancar)

    document
        .getElementById("finalizar")
        .addEventListener('click',questionario.gerarFeedBack)

})

