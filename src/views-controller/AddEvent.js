/** Eventos disponíveis
 * 
 * newEvent
 * tableEvent
 * deleteEvent
 * deleteCancelEvent
 * 
 */

export default class AddEvent {

    constructor(controllerInstance) {
        this.controllerInstance = controllerInstance;
        this.nameInstance = controllerInstance.getName();
        this.eventsList = this.getEvents();
        this.setEvents();
    }

    getEvents = () => {
        let eventsControllerObject = this.controllerInstance.getEvents();
        let eventsListOfObject = [];

        //evento de adicionar um elemento
        if (eventsControllerObject.newEvent) {

            eventsListOfObject.push({
                elementToFind: 'new-' + this.nameInstance,
                eventName: 'click',
                eventFunction: this.controllerInstance.goToAdd,
                getElementType: "ById"
            });
        }

        //evento de clicar na linha da tabela
        if (eventsControllerObject.tableEvent) {
            eventsListOfObject.push({
                elementToFind: 'table-' + this.nameInstance,
                eventName: 'click',
                eventFunction: this.controllerInstance.goToUpdate,
                getElementType: "ById"
            })
        }

        //evento de ir para alerta de excluir elemento
        if (eventsControllerObject.deleteEvent) {
            eventsListOfObject.push({
                elementToFind: "excluir",
                eventName: 'click',
                eventFunction: this.controllerInstance.goToDelete,
                getElementType: "ById"
            })
        }

        //evento de botão cancelar no alerta de excluir elemento
        if (eventsControllerObject.deleteCancelEvent) {
            eventsListOfObject.push({
                elementToFind: 'form-alert-cancel',
                eventName: 'click',
                eventFunction: this.controllerInstance.goToDeleteCancel,
                getElementType: "ById"
            })
        }
        //evento de clicar em um elemento de uma lista
        if (eventsControllerObject.liClick) {
            eventsListOfObject.push({
                elementToFind: 'alternativa',
                eventName: 'click',
                eventFunction: this.controllerInstance.goToUpdateByList,
                getElementType: "ByClassName"
            })
        }

        return eventsListOfObject;

    }

    setEvent = (elementToFind, eventName, eventFunction, getElementType) => {
        let elements;
        if (getElementType == "ByClassName") {
            elements = document.getElementsByClassName(elementToFind);
            if (elements.length > 1) {
                elements = Array.from(elements);
                elements.forEach((el) => {
                    el.addEventListener(eventName, eventFunction);
                })
            } else {
                elements.addEventListener(eventName, eventFunction);
            }
        } else {
            document.getElementById(elementToFind).addEventListener(eventName, eventFunction);
        }
    }

    setEvents = () => {
        this.eventsList.forEach((obj) => {
            this.setEvent(obj.elementToFind, obj.eventName, obj.eventFunction,obj.getElementType)
        });
    }
}