import Container from "./Container.controller";
import Alternativa from './Alternativa';
export default class Questao {
    constructor() {
        this.container = new Container("questao", ["id", "titulo"])
        this.alternativaController = new Alternativa();
        this.formAlternativa = document.getElementById('form-questao-alternativa');
        this.alternativeModel = document.getElementById('alternativa-model').children[0];

        this.container.formAlert = document.querySelector('.questao#form-alert ');
        this.alternativaController.container.formAlert = document.querySelector('.alternativa#form-alert ');

    }

    goToAdd = () => {
        this.hideContainerAlternative()
        let urlAction = "/questionario/";
        let method = "POST";
        this.showFormAlternativa()
        this.container.goToAdd(urlAction, method);
    }

    goToUpdate = (event) => {
        let target = event.target;
        if (target.attributes["data-questao"]) {
            this.hideContainerAlternative()
            let urlAction = "/questionario/atualizar";
            let method = "POST";
            let dataList = this.getDataList(target);
            this.hideFormAlternativa();
            this.container.goToUpdate(urlAction, method, dataList);
        }
    }

    getDataList = (target) => {
        let dataList = []
        let idQuestao = target.dataset['id'];
        dataList.push(idQuestao);
        let elementWithTittle = "titulo" + idQuestao;
        let titulo = document.getElementById(elementWithTittle).innerText;
        dataList.push(titulo);
        return dataList;
    }

    hideContainerAlternative = () => {
        this.alternativaController.container.hideContainer()
    }

    hideContainerQuestao = () => {
        this.container.hideContainer();
    }

    //quando alguém clicar no botão excluir deve aparecer um alerta caso ela tenha certeza
    goToDelete = () => {
        let action = "/pesquisador/excluir";
        let method = "POST";
        this.container.goToDelete(action, method);
    }

    //ir para o formulário de alerta sobre excluir um elemento
    goToDeleteCancel = () => {
        this.container.goToDeleteCancel();
    }


    //alternativa functions 

    //quando alguém clicar no botão excluir deve aparecer um alerta caso ela tenha certeza
    goToDeleteUpdate = () => {
        let action = "/pesquisador/excluir";
        let method = "POST";
        this.alternativaController.container.goToDelete(action, method);
    }

    //ir para o formulário de alerta sobre excluir um elemento
    goToDeleteCancelUpdate = () => {
        this.alternativaController.container.goToDeleteCancel();
    }

    showFormAlternativa = () => {
        this.formAlternativa.removeAttribute('hidden');

        //set required
        this.formAlternativa
            .querySelectorAll('input')
            .forEach((el) => {
                el.setAttribute('required', '')
            })
    }

    hideFormAlternativa = () => {
        this.formAlternativa.setAttribute('hidden', '');

        //set required
        this.formAlternativa
            .querySelectorAll('input')
            .forEach((el) => {
                el.removeAttribute('required')
            })
    }

    goToAddAlternative = () => {
        this.hideContainerQuestao()
        this.alternativaController.goToAdd();
    }

    goToUpdateAlternative = (event) => {
        this.hideContainerQuestao()
        this.alternativaController.goToUpdate(event);
    }

    administrateAlternative = (event) => {
        let target = event.target;
        if (target.tagName == "BUTTON") {
            if (target.dataset.action == "excluir" || target.dataset.actionAlternativa == "excluir") {
                this.excludeAlternative(target)
            } else if (target.dataset.actionAlternativa == "cadastrar") {
                this.addAlternative(target);
            }
            this.validateAlternative();

        }
    }

    excludeAlternative = (target) => {
        let alternative = target.parentNode;
        let alternativeList = alternative.parentNode;
        alternativeList.removeChild(alternative);
    }

    addAlternative = (target) => {
        let buttonAdd = target.parentNode;
        let model = this.alternativeModel.cloneNode(true);
        this.formAlternativa.removeChild(buttonAdd);
        this.formAlternativa.append(model);
        this.formAlternativa.appendChild(buttonAdd);
    }

    validateAlternative = () => {
        let alternatives = document.querySelectorAll('.new-alternativa');
        let alert = document.getElementById('alert-alternativa');

        //é necessário ter 2 alternátivas fora a model localizada pelo querySelectorAll
        if (alternatives.length > 2) {
            alert.setAttribute('hidden', '');
            this.container.btnCadastrar.classList.remove('disabled')
        } else {
            alert.removeAttribute('hidden');
            this.container.btnCadastrar.classList.add('disabled')
        }
    }
}