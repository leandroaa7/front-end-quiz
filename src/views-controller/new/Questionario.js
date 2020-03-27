import Animate from '../Animate';

export default class Questionario {
    constructor(qtdQuestao) {
        this.qtdQuestao = qtdQuestao;

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

        if (questaoIndex == 1) {
            this.alertar("Atenção: esta é a primeira questão")
        } else {
            if (this.btnVoltar.dataset.index == this.qtdQuestao) {
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
                this.alertar("Atenção, tem certeza que quer finalizar o questionário?")
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
/*
document.addEventListener('DOMContentLoaded', () => {
    let qtdQuestao = 2;

    let btnVoltar = document.getElementById('voltar')
    let btnAvancar = document.getElementById('avancar');
    let btnFinalizar = document.getElementById('finalizar');

    let alert = document.getElementById('alerta');
    let alertMessage = document.getElementById('alerta-message')

    btnVoltar.addEventListener('click', () => {
        if (btnVoltar.dataset.index == 1) {
            alert.removeAttribute('hidden')
            alertMessage.innerHTML = "Atenção: esta é a primeira questão"
        } else {
            if (btnVoltar.dataset.index == qtdQuestao) {
                btnFinalizar.classList.add('hide');
                btnAvancar.classList.remove('hide');
            }
            btnAvancar.dataset.index = ((btnAvancar.dataset.index * 1) - 1);
            btnVoltar.dataset.index = ((btnVoltar.dataset.index * 1) - 1);
        }
    });

    btnAvancar.addEventListener('click', () => {
        if (btnAvancar.dataset.index == qtdQuestao) {
            btnAvancar.classList.add('hide');
            btnFinalizar.classList.remove('hide');
        } else {
            btnAvancar.dataset.index = ((btnAvancar.dataset.index * 1) + 1);
            btnVoltar.dataset.index = ((btnVoltar.dataset.index * 1) + 1);

        }
    })



}) */