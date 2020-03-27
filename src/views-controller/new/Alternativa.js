import Container from "./Container.controller";
import List from './List.controller';
export default class AlternativaController {
    constructor() {
        this.container = new Container("alternativa", ["id", "titulo", "peso"])

        let ulId = "alternativas";
        let liAttributesList = ["data-id", "data-titulo", "data-peso"];
        this.list = new List(ulId, liAttributesList);
    }

    goToAdd = () => {
        let urlAction = "/alternativa/";
        let method = "POST";
        this.container.goToAdd(urlAction, method);
    }

    goToUpdate = (event) => {
        let urlAction = "/questionario/atualizar";
        let method = "POST";
        let dataList = this.list.getDataAttributesOfList(event);
        this.container.goToUpdate(urlAction, method, dataList);
    }
}