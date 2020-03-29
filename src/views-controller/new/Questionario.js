import Animate from '../Animate';

export default class Questionario {
    constructor(qtdQuestao) {
        this.qtdQuestao = parseInt(qtdQuestao) - 1;
        this.btnVoltar = document.getElementById('voltar')
        this.btnAvancar = document.getElementById('avancar');
        this.btnFinalizar = document.getElementById('finalizar');
        this.alert = document.getElementById('alerta');
        this.alertMessage = document.getElementById('alerta-message')
        this.recomendacaoList = document.querySelectorAll('.feedback');

        this.animate = new Animate();
    }

    alertar = (mensagem) => {
        this.alert.removeAttribute('hidden');
        this.alertMessage.innerHTML = mensagem;
        window.scroll(this.alertMessage.offsetLeft, this.alertMessage.offsetWidth);

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
                window.scroll(this.btnFinalizar.offsetLeft, this.btnFinalizar.offsetTop);

            } else {
                this.alertar('Atenção, selecione uma alternativa por favor')
            }
        } else {
            if (this.validarQuestao(questaoIndex) == true) {
                this.animarAvancar(questaoIndex);
                this.ocultarAlerta();
                this.acrescentarIndex(questaoIndex);

            } else {
                this.alertar('Atenção, prencha todos os campos ou selecione uma alternativa por favor')
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
        if (questaoIndex == 0) {
            isValid = true;
            questao
                .forEach((el) => {
                    if (el.value.length < 1) {
                        isValid = false;
                    }
                })
        } else {

            questao
                .forEach((el) => {
                    if (el.checked) {
                        isValid = true;
                    }
                })
        }
        return isValid;
    }

    gerarFeedBack = () => {

        let respostaPorCategoria = {};
        let categoriaList = [];
        let respostaList = [];
        let questao = []
        //identificar categorias e extrair respostas
        for (let i = 0; i <= this.qtdQuestao; i++) {

            questao = document.querySelector(`#questao-radio-${i}`)

            if (categoriaList.includes(questao.dataset.categoria) == false) {
                categoriaList.push(questao.dataset.categoria);
            }

            questao.querySelectorAll('input').forEach((el) => {

                if (el.checked == true) {
                    respostaList.push({
                        categoria: questao.dataset.categoria,
                        resposta: el.value
                    })
                }
            })

        }

        // agrupar respostas por categorias
        for (let categoria of categoriaList) {
            respostaPorCategoria[categoria] = []
            for (let resposta of respostaList) {
                if (resposta.categoria == categoria) {
                    respostaPorCategoria[categoria].push(resposta)
                }
            }
        }





        let qtdRespostaCategoria = 0, somaResposta = 0, media = 0,
            mediaCategoriaList = [];

        //calcular média
        for (let categoria of categoriaList) {
            for (let resposta of respostaList) {
                if (resposta.categoria == categoria) {
                    qtdRespostaCategoria = qtdRespostaCategoria + 1;
                    somaResposta = somaResposta + parseInt(resposta.resposta)
                }
            }
            media = somaResposta / qtdRespostaCategoria;
            mediaCategoriaList.push({
                categoria: categoria,
                media: media
            })
            media = 0;
            somaResposta = 0;
            qtdRespostaCategoria = 0;
        }

        console.log(mediaCategoriaList)




        //gerar feedback
        for (let recomendacao of this.recomendacaoList) {
            for (let media of mediaCategoriaList) {
                if (recomendacao.dataset.categoria == media.categoria) {
                    if (media.media >= recomendacao.dataset.menorIntervalo && media.media <= recomendacao.dataset.maiorIntervalo) {
                        recomendacao.removeAttribute('hidden');
                    }
                }
            }
        }


        let containerFeedback = document.getElementById('feedback')
        containerFeedback.removeAttribute('hidden');
        window.scroll(containerFeedback.offsetLeft, containerFeedback.offsetTop);


    }
}