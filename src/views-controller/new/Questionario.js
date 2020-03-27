import Animate from '../Animate';

export default class Questionario {
    constructor(qtdQuestao) {
        this.qtdQuestao = parseInt(qtdQuestao);

        this.btnVoltar = document.getElementById('voltar')
        this.btnAvancar = document.getElementById('avancar');
        this.btnFinalizar = document.getElementById('finalizar');
        this.alert = document.getElementById('alerta');
        this.alertMessage = document.getElementById('alerta-message')

        this.animate = new Animate();
    }

    alertar = (mensagem) => {
        this.alert.removeAttribute('hidden');
        this.alertMessage.innerHTML = mensagem;
    }

    ocultarAlerta = () => {
        this.alert.setAttribute('hidden', '');
    }


    voltar = () => {
        let questaoIndex = (this.btnVoltar.dataset.index * 1);

        if (questaoIndex == 0) {
            this.alertar("Atenção: esta é a primeira questão")
        } else {
            if (this.btnVoltar.dataset.index == this.qtdQuestao * 1) {
                this.btnFinalizar.classList.add('hide');
                this.btnAvancar.classList.remove('hide');
            }

            this.btnAvancar.dataset.index = ((questaoIndex * 1) - 1);
            this.btnVoltar.dataset.index = ((questaoIndex * 1) - 1);
            this.animarVoltar(questaoIndex);
            this.ocultarAlerta();
        }
    }

    avancar = () => {
        let questaoIndex = (this.btnAvancar.dataset.index * 1);
        if (questaoIndex == this.qtdQuestao) {
            if (this.validarQuestao(questaoIndex) == true) {
                this.ocultarAlerta();
                this.btnAvancar.classList.add('hide');
                this.btnFinalizar.classList.remove('hide');
                this.alertar("Atenção, as perguntas acabaram, gostaria de finalizar o questionário?")
            } else {
                this.alertar('Atenção, selecione uma alternativa por favor')
            }
        } else {
            if (this.validarQuestao(questaoIndex) == true) {
                this.animarAvancar(questaoIndex);
                this.ocultarAlerta();
                this.acrescentarIndex(questaoIndex);

            } else {
                this.alertar('Atenção, selecione uma alternativa por favor')
            }
        }

    }

    acrescentarIndex = (questaoIndex) => {
        questaoIndex = ((questaoIndex * 1) + 1);
        this.btnVoltar.dataset.index = questaoIndex;
        this.btnAvancar.dataset.index = questaoIndex;
    }

    animarAvancar = (questaoIndex) => {
        let sectionToHide = "questao-section-" + questaoIndex;
        let sectionToShow = 'questao-section-' + (questaoIndex + 1);
        this.animate.transition(sectionToShow, sectionToHide)
    }

    animarVoltar = (questaoIndex) => {
        let sectionToHide = "questao-section-" + (questaoIndex);
        let sectionToShow = 'questao-section-' + (questaoIndex - 1);
        this.animate.transition(sectionToShow, sectionToHide)
    }


    validarQuestao = (questaoIndex) => {
        let isValid = false;
        let questao = "questao-radio-" + questaoIndex;
        questao = document
            .getElementById(questao)
            .querySelectorAll('input')

        questao
            .forEach((el) => {
                if (el.checked) {
                    isValid = true;
                }
            })
        return isValid;
    }
}