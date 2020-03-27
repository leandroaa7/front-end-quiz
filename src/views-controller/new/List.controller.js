export default class List {
    // recebe o id do elemento <ul> 
    // e os atributos de um li, exemplo <li data-peso="peso3">
    constructor(ulId, liAttributesList) {
        this.ulId = ulId;
        this.ulObject = document.getElementById(ulId);
        this.liList = Array.from(this.ulObject.children);
        this.liAttributesList = liAttributesList;
    }

    getDataAttributesOfList = (event) => {
        let dataList = [];
        if (event.target.tagName == "LI") {
            for (let attribute of this.liAttributesList) {
                dataList.push(event.target.getAttribute(attribute));
            }
            return dataList;
        }
    }
}