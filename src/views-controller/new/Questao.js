import Container from "./Container.controller";
import Alternativa from './Alternativa';
export default class Questao {
    constructor() {
        this.container = new Container("questao", ["id", "titulo"])
        this.alternativaController = new Alternativa();
        this.formAlternativa = document.getElementById('form-questao-alternativa');
        this.alternativeModel = document.getElementById('alternativa-model').children[0];
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


    //alternativa functions 

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
}