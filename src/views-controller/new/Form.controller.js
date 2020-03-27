export default class FormController {
    constructor(form, inputIdList) {
        this.form = form;
        this.inputIdList = inputIdList;
    }

    /** clear all inputs*/
    clearForm = () => {
        this.form.reset();
    }

    /** set action in current form*/
    setAction = (action) => {
        this.form.action = action;
    }

    /** set method in current form*/
    setMethod = (method) => {
        this.form.method = method;
    }

    /** inject inputs HTML into form
     *  idInputInject - div that contains all the inputs
     * */
    injectInputs = (idInputInject, idForm) => {
        let inject = document.getElementById(idInputInject);
        inject.removeAttribute('id');
        let form = document.getElementById(idForm);
        form.insertBefore(inject, form.childNodes[0]);
    }

    /** set data into inputs  */
    setDataListIntoInputs = (dataList) => {        
        this.inputIdList.forEach((el, i) => {
            this.form[el].classList.add('active');
            this.form[el].value = dataList[i];
        });
    }

    /** Add new form
     * idFormInject - div to inject a form
     * form - if set add this form, if not add this.form
      */
    addForm = (idFormInject, form) => {
        let formToInject = document.getElementById(idFormInject);
        form.insertBefore(formToInject, form.childNodes[0]);
    }
}