export default class Form {
    constructor(form, inputsId) {
        this.form = form;
        this.inputsId = inputsId;
    }

    setForm = (urlAction, method) => {
        this.form.action = urlAction
        this.form.method = method
    }

    //limpa formulário
    clearForm = () => {
        this.form.reset();
    }

    //apenas por estética, deixa os inputs sem o placehover
    setActiveClass = () => {
        this.inputsId.forEach((el) => {
            this.form[el].classList.add('active')
        });
    }

    //insere valores nos inputs
    //assumindo que os valores das celulas estejam na mesma ordem dos inputs
    setValueForm = (list) => {
        this.inputsId.forEach((el, i) => {
            this.form[el].classList.add('active')
            this.form[el].value = list[i];
        });
    }

    static configForm = () => {
        let inject = document.getElementById("input-inject");
        inject.removeAttribute('id');
        let form = document.getElementsByTagName('form');
        form[0].insertBefore(inject, form[0].childNodes[0]);
    }


}