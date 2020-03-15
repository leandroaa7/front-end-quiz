class Container {
    constructor(name, inputsId) {

        this.name = name;
        this.container = document.getElementById('container-' + name);
        this.form = document.getElementById('form-' + name);
        this.buttons = document.getElementById('btn-' + name).children;
        this.inputsId = inputsId;

        this.btnExcluir = this.buttons["excluir"];
        this.btnAlterar = this.buttons['alterar']
        this.btnCadastrar = this.buttons["cadastrar"];
    }

    //1-adiciona dados da row no form 
    //2- vai para o form
    goToUpdate = (dataList) => {
        this.setValueForm(dataList);
        this.prepareContainerUpdate();
        this.goToForm();
    }
    
    goToAdd = () => {
        this.prepareContainerAdd();
        this.clearForm();
        this.goToForm();
    }

    add = (event) => {
        event.preventDefault();
        return new FormData(event.target)
    }

    prepareContainerUpdate = () => {
        this.btnAlterar.classList.remove('hide');
        this.btnExcluir.classList.remove('hide');
        this.btnCadastrar.classList.add('hide');
    }

    prepareContainerAdd = () => {
        this.btnCadastrar.classList.remove('hide');
        this.btnAlterar.classList.add('hide');
        this.btnExcluir.classList.add('hide');
    }

    goToForm = () => {
        window.scroll(this.container.offsetLeft, this.container.offsetTop);
    };

    //insere valores nos inputs
    //assumindo que os valores das celulas estejam na mesma ordem dos inputs
    setValueForm = (list) => {
        this.inputsId.forEach((el, i) => {
            this.form[el].value = list[i];
        });
    }

    //limpa formulário
    clearForm = () => {
        this.form.reset();
    }

};

//classe intermediário que manipula a classe Table e Container
class ProfessorController {

    constructor() {
        let professorInputsId = ["nome", "email"];
        this.container = new Container("professor", professorInputsId);
        this.table = new Table("table-professor");
    }

    getName = () => {
        return "professor";
    }

    goToUpdate = (event) => {
        let dataRow = this.table.updateRow(event);
        this.container.goToUpdate(dataRow);
    }

    goToAdd = () => {
        this.container.goToAdd();
    }

    add = (event) => {
        this.container.add(event);
    }


}

class Table {

    // recebe instancia da classe para funções de CRUD
    constructor(tableName) {

        let name = tableName;
        this.table = document.getElementById(name);
    }

    //1-adiciona dados da row no form 
    //2- vai para o form
    updateRow = (event) => {
        let dataRow = [];
        let target = event.target;
        if (target.tagName == "TD") {
            dataRow = this.getDataOfRow(target.parentElement.cells);
            return dataRow;
        }
    }

    addRow = (dataList) => {
        let row = this.table.insertRow(0);
        dataList.forEach((el, i) => {
            row.insertCell(i).innerHTML = dataList[i];
        })
    }

    //recebe um objeto td e retorna um array com os dados
    getDataOfRow = (cells) => {
        let dataRow = [];
        for (let cell of cells) {
            dataRow.push(cell.innerHTML)
        }
        return dataRow;
    }

}

class AddEvent {

    constructor(controllerInstance) {
        this.controllerInstance = controllerInstance;
        this.nameInstance = controllerInstance.getName();
        this.setEvents();
    }

    setEvents = () => {
        document.getElementById('new-' + this.nameInstance).addEventListener('click', this.controllerInstance.goToAdd);
        document.getElementById('table-' + this.nameInstance).addEventListener('click', this.controllerInstance.goToUpdate);
        document.getElementById('form-' + this.nameInstance).addEventListener('submit', this.controllerInstance.add);

    }
}

document.addEventListener("DOMContentLoaded", () => {
    let professorController = new ProfessorController();
    new AddEvent(professorController);
})