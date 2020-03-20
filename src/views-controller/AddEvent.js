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
                eventFunction: this.controllerInstance.goToAdd
            });
        }

        //evento de clicar na linha da tabela
        if (eventsControllerObject.tableEvent) {
            eventsListOfObject.push({
                elementToFind: 'table-' + this.nameInstance,
                eventName: 'click',
                eventFunction: this.controllerInstance.goToUpdate
            })
        }

        //evento de ir para alerta de excluir elemento
        if (eventsControllerObject.deleteEvent) {
            eventsListOfObject.push({
                elementToFind: "excluir",
                eventName: 'click',
                eventFunction: this.controllerInstance.goToDelete
            })
        }

        //evento de botão cancelar no alerta de excluir elemento
        if (eventsControllerObject.deleteCancelEvent) {
            eventsListOfObject.push({
                elementToFind: 'form-alert-cancel',
                eventName: 'click',
                eventFunction: this.controllerInstance.goToDeleteCancel
            })
        }

        return eventsListOfObject;

    }

    setEvent = (elementTofind, eventName, eventFunction) => {
        document.getElementById(elementTofind).addEventListener(eventName, eventFunction);
    }

    setEvents = () => {
        this.eventsList.forEach((obj) => {
            this.setEvent(obj.elementToFind, obj.eventName, obj.eventFunction)
        });
    }
}