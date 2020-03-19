import Form from './Form';

export default class Container {
    constructor(name, inputsId) {

        this.name = name;
        this.container = document.getElementById('container-' + name);
        this.form = new Form(document.getElementById('form-' + name), inputsId);
        this.buttons = document.getElementById('btn-' + name).children;
        this.formAlert = document.getElementById("form-alert");
        this.btnExcluir = this.buttons["excluir"];
        this.btnAlterar = this.buttons['alterar']
        this.btnCadastrar = this.buttons["cadastrar"];
    }

    showContainer = () => {
        this.container.removeAttribute('hidden');
    }

    //1-adiciona dados da row no form 
    //2- vai para o form
    //urlAction = 
    goToUpdate = (dataList, urlAction, method) => {
        this.showContainer();
        this.form.setValueForm(dataList);
        this.form.setForm(urlAction, method)
        this.prepareContainerUpdate();
        this.goToForm();
    }

    goToDelete = (urlAction, method) => {
        this.form.setForm(urlAction, method)
        this.formAlert.classList.remove('hide');
        window.scroll(0, document.body.scrollHeight);
    }

    goToDeleteCancel = () => {
        this.formAlert.classList.add('hide');
    }

    goToAdd = (urlAction, method) => {
        this.showContainer()
        this.form.clearForm();
        this.form.setForm(urlAction, method)
        this.prepareContainerAdd();
        this.goToForm();
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



}