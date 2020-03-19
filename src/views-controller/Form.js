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

    //insere valores nos inputs
    //assumindo que os valores das celulas estejam na mesma ordem dos inputs
    setValueForm = (list) => {
        this.inputsId.forEach((el, i) => {
            this.form[el].classList.add('active')
            this.form[el].value = list[i];
        });
    }


}