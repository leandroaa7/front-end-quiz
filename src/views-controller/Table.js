export default class Table {

    // recebe instancia da classe para funções de CRUD
    constructor(idTable) {
        this.table = document.getElementById(idTable);
    }

    //1-adiciona dados da row no form 
    //2- vai para o form
    updateRow = (event) => {
        let dataRow = [];
        let target = event.target;
        if (target.tagName == "TD") {
            dataRow = this.getDataOfRow(target.parentElement.cells);
            dataRow.unshift(target.parentElement.id); // add id
            return dataRow;
        }
    }

    addRow = (dataList) => {
        let row = this.table.insertRow(0);
        dataList.forEach((el, i) => {
            row.insertCell(i).innerText = dataList[i];
        })
    }

    //recebe um objeto td e retorna um array com os dados
    getDataOfRow = (cells) => {
        let dataRow = [];
        for (let cell of cells) {
            dataRow.push(cell.innerText)
        }
        return dataRow;
    }

}