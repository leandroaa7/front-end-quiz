export default class AddEvent {

    constructor(controllerInstance) {
        this.controllerInstance = controllerInstance;
        this.nameInstance = controllerInstance.getName();
        this.setEvents();
    }

    setEvents = () => {
        document.getElementById('new-' + this.nameInstance).addEventListener('click', this.controllerInstance.goToAdd);
        document.getElementById('table-' + this.nameInstance).addEventListener('click', this.controllerInstance.goToUpdate);
        //document.getElementById('form-' + this.nameInstance).addEventListener('submit', this.controllerInstance.add);
        document.getElementById("excluir").addEventListener('click', this.controllerInstance.goToDelete);
        document.getElementById("form-alert-cancel").addEventListener('click', this.controllerInstance.goToDeleteCancel);

    }
}