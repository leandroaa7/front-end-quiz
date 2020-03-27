import Container from '../Container';
import AddEvent from '../AddEvent';
import Form from '../Form';

//
class List {

    // recebe o id do elemento <ul> 
    // e os atributos de um li, exemplo <li data-peso="peso3">
    constructor(ulId, liAttributesList) {
        this.ulId = ulId;
        this.ulObject = document.getElementById(ulId);
        this.liList = Array.from(this.ulObject.children);
        this.liAttributesList = liAttributesList;
    }

    //retorna array de objeto de todos os elementos li e atributos desejados, como "data-peso" por exemplo
    getAllData() {
        //liAttributesList = ["id","data-titulo","data-peso"]
        let dataList = [], data = {};

        for (let li of this.liList) {
            for (let attribute of this.liAttributesList) {
                data[attribute] = li.getAttribute(attribute);
            }
            dataList.push(data);
            data = {};
        }

        return dataList;

    }

    getData(event) {
        let dataList = [];
        if (event.target.tagName == "LI") {
            for (let attribute of this.liAttributesList) {
                dataList.push(event.target.getAttribute(attribute));
            }
            return dataList;
        }
    }
}

class AlternativaController {
    constructor(){
        let ulId = 'alternativas';
        let liAttributesList = ["data-id", "data-titulo", "data-peso"];
        this.list = new List(ulId, liAttributesList);
    }

    goToUpdateByList = (event) => {
        let urlAction = "/questionario/atualizar";
        let method = "POST";
        let dataList = this.list.getData(event);
        this.container.goToUpdate(dataList, urlAction, method);
    }
}

class QuestionarioController {
    constructor() {

        let ulId = 'alternativas';
        let liAttributesList = ["data-id", "data-titulo", "data-peso"];
        this.list = new List(ulId, liAttributesList);

        let questaoInputsId = ["id", "titulo", "peso"];
        this.container = new Container("questionario", questaoInputsId);
    }

    //eventos que devem ser adicionados na DOM, verificar na classe AddEvents
    getEvents() {
        return {
            newEvent: true,
            deleteEvent: true,
            deleteCancelEvent: true,
            liClick: true
        }
    }

    //nome do controller
    getName = () => {
        return "questionario";
    }

    goToAdd = () => {
        let urlAction = "/questionario/";
        let method = "POST";
        this.container.goToAdd(urlAction, method);
    }

    goToUpdateByList = (event) => {
        let urlAction = "/questionario/atualizar";
        let method = "POST";
        let dataList = this.list.getData(event);
        this.container.goToUpdate(dataList, urlAction, method);
    }
}


document.addEventListener('DOMContentLoaded', () => {

    Form.configForm();



/*     let buttonToGoUpdate = document.querySelectorAll('.change-questionario');
    buttonToGoUpdate = Array.from(buttonToGoUpdate);

    buttonToGoUpdate.forEach((el) => {
        el.addEventListener('click',(event)=>{
            let target = event.target;

            let questao = target.parentNode.parentNode.getElementsByClassName('questao');
            let questaoIdReference = target.getAttribute('data-id');
            let questaoId = "questao" + questaoIdReference;
            let q = document.getElementById(questaoId);
                       
        })
    }) */
    new AddEvent(new QuestionarioController());

    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
});