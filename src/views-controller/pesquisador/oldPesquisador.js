//classe intermediário que manipula a classe Table e Container
import Container from "../Container";
import Table from "../Table";

export default class PesquisadorController {

    constructor() {
        let pesquisadorInputsId = ["id", "nome", "email"];
        this.container = new Container("pesquisador", pesquisadorInputsId);
        this.table = new Table("table-pesquisador");

    }

    //eventos que devem ser adicionados na DOM, verificar na classe AddEvents
    getEvents() {
        return {
            newEvent: true,
            tableEvent: true,
            deleteEvent: true,
            deleteCancelEvent: true
        }
    }

    //nome do controller
    getName = () => {
        return "pesquisador";
    }

    //quando alguém clicar na tabela ir para o formulário com os dados da linha clicada
    goToUpdate = (event) => {
        let action = "/pesquisador/atualizar";
        let method = "POST";
        let dataRow = this.table.updateRow(event);
        this.container.goToUpdate(dataRow, action, method);
    }

    //quando alguém clicar em adicionar um novo elemento ir para o formulário
    goToAdd = () => {
        let action = "/pesquisador/";
        let method = "POST";
        this.container.goToAdd(action, method);
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
}