//classe intermediário que manipula a classe Table e Container
import Container from "../Container";
import Table from "../Table";
import AddEvent from "../AddEvent";

class ProfessorController {

    constructor() {
        let professorInputsId = ["id", "nome", "email"];
        this.container = new Container("professor", professorInputsId);
        this.table = new Table("table-professor");

    }

    getName = () => {
        return "professor";
    }

    goToUpdate = (event) => {
        let action = "/pesquisador/atualizar";
        let method = "POST";
        let dataRow = this.table.updateRow(event);
        this.container.goToUpdate(dataRow, action, method);
    }

    goToAdd = () => {
        let action = "/pesquisador/";
        let method = "POST";
        this.container.goToAdd(action, method);
    }

    goToDelete = (event) => {
        let action = "/pesquisador/excluir";
        let method = "POST";
        this.container.goToDelete(action, method);
    }


    goToDeleteCancel = () => {
        this.container.goToDeleteCancel();
    }


}

document.addEventListener("DOMContentLoaded", () => {
    //start modal
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);

    let professorController = new ProfessorController();
    new AddEvent(professorController);
})