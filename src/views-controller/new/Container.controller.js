import Form from "./Form.controller";

//abstract
export default class Container {
    constructor(name, inputIdList) {
        this.name = name;
        this.container = document.getElementById('container-' + name);
        this.form = new Form(document.getElementById('form-' + name), inputIdList);

        //e se houver mais de um form alert? TRATAR
        this.formAlert = document.getElementById("form-alert");

        //buttons form
        this.buttons = document.getElementById('btn-' + name).children;
        this.btnExcluir = this.buttons["excluir"];
        this.btnAlterar = this.buttons['alterar']
        this.btnCadastrar = this.buttons["cadastrar"];
    }

    /**Remove hidden attribute */
    showContainer = () => {
        this.container.removeAttribute('hidden');
    }

    /**Add hidden attribute */
    hideContainer = () => {
        this.container.setAttribute('hidden', '');
    }

    /**Go To container location in html */
    goToContainer = () => {
        window.scroll(this.container.offsetLeft, this.container.offsetTop);
    }

    prepareForm = (action, method) => {
        this.showContainer();
        this.form.setAction(action);
        this.form.setMethod(method);
    }

    /** Prepare container to add new element */
    goToAdd = (action, method) => {
        this.prepareForm(action, method);
        this.form.clearForm();
        this.prepareButtonsToAdd();
        this.goToContainer()
    }


    /** Set buttons to add a new element */
    prepareButtonsToAdd = () => {
        this.btnCadastrar.classList.remove('hide');
        this.btnAlterar.classList.add('hide');
        this.btnExcluir.classList.add('hide');
    }

    /** Prepare container to update an element */
    goToUpdate = (action, method, dataList) => {
        this.prepareForm(action, method);
        this.form.setDataListIntoInputs(dataList)
        this.prepareButtonsToUpdate()
        this.goToContainer()
    }

    /** Set buttons to update an element */
    prepareButtonsToUpdate = () => {
        this.btnAlterar.classList.remove('hide');
        this.btnExcluir.classList.remove('hide');
        this.btnCadastrar.classList.add('hide');
    }


    goToDelete = (action, method) => {
        this.form.setAction(action);
        this.form.setMethod(method);
        this.formAlert.classList.remove('hide');
        window.scroll(0, document.body.scrollHeight);
    }

    goToDeleteCancel = () => {
        this.formAlert.classList.add('hide');
    }


}