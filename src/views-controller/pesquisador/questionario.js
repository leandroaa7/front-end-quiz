import M from 'materialize-css';
import Container from '../Container';
import AddEvent from '../AddEvent';
import Form from '../Form';

class List {
    constructor(ulId) {
        this.ulId = ulId;
        this.ulObject = document.getElementById(ulId);
        this.liList = this.ulObject.children;
    }

    //retorna array de objeto de todos os elementos li e atributos desejados, como "data-peso" por exemplo
    getData() {

    }
}

class QuestionarioController {
    constructor() {
        let questaoInputsId = ["id", "titulo", "peso"];
        this.container = new Container("questionario", questaoInputsId);
    }

    //eventos que devem ser adicionados na DOM, verificar na classe AddEvents
    getEvents() {
        return {
            newEvent: true,
            deleteEvent: true,
            deleteCancelEvent: true
        }
    }

    //nome do controller
    getName = () => {
        return "questionario";
    }

    goToAdd = () => {
        let action = "/questionario/";
        let method = "POST";
        this.container.goToAdd(action, method);
    }

    goToUpdate = () => {
        let action = "/questionario/atualizar";
        let method = "POST";

    }
}


document.addEventListener('DOMContentLoaded', () => {
    new AddEvent(new QuestionarioController());

    Form.configForm();
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
});