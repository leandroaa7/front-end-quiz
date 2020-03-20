import M from 'materialize-css';
import Container from '../Container';
import AddEvent from '../AddEvent';

class QuestionarioController {
    constructor(){
        let questaoInputsId = ["id","titulo","peso"];
        this.container = new Container("questao",questaoInputsId);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
});