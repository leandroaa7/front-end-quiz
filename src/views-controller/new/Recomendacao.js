import Container from './Container.controller';
import Table from '../Table';

export default class Recomendacao {
    constructor() {
        let inputIdList = ["id", "titulo", "menor-valor", "maior-valor"];
        this.container = new Container("recomendacao", inputIdList);
        this.table = new Table("table-recomendacao");
    }

    goToAdd = () => {
        let action = "/recomendacao/";
        let method = "POST";
        this.container.goToAdd(action, method);
    }

    goToUpdate = (event) => {
        let action = "/recomendacao/atualizar";
        let method = "POST";
        let dataList = this.table.updateRow(event);
        this.container.goToUpdate(action, method, dataList);
    }

    //quando alguém clicar no botão excluir deve aparecer um alerta caso ela tenha certeza
    goToDelete = () => {
        console.log('eita');
        let action = "/pesquisador/excluir";
        let method = "POST";
        this.container.goToDelete(action, method);
    }

    //ir para o formulário de alerta sobre excluir um elemento
    goToDeleteCancel = () => {
        this.container.goToDeleteCancel();
    }
}