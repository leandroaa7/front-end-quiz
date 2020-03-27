import Container from '../new/Container.controller';
import Table from '../Table';

export default class Pesquisador {
    constructor() {
        let inputIdList = ["id", "nome", "email"];
        this.container = new Container("pesquisador", inputIdList);
        this.table = new Table("table-pesquisador");
    }

    goToAdd = () => {
        let action = "/pesquisador/";
        let method = "POST";
        this.container.goToAdd(action, method);
    }

    goToUpdate = (event) => {
        let action = "/pesquisador/atualizar";
        let method = "POST";
        let dataList = this.table.updateRow(event);
        this.container.goToUpdate(action, method, dataList);
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