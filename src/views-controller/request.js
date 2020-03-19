/**
 * @description realiza requisição HTTP e envia os dados para um CallBack
 * @param {*} handlerSuccess 
 * @param {*} url 
 * @param {*} method 
 * @param {*} dataToSend 
 * @param {*} isForm 
 */
function rq(url, method, dataToSend,handlerSuccess, isForm) {
    let nameHeader = '',
        dataHeader, response, async = true;
    let xmlhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
    }



    //afirmar que as conexões exigem credenciamento/autenticação
    xmlhttp.withCredentials = true;

    //Call a function when the state changes.
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = this.response
            handlerSuccess(response)
            this.abort();

        }
    }

    xmlhttp.open(method, url, async);
    if (method == "POST") {
        nameHeader = 'Content-type';
        if (isForm != true) {
            dataHeader = "application/json;charset=UTF-8";
            xmlhttp.setRequestHeader(nameHeader, dataHeader);
        }else{
            dataHeader = "application/x-www-form-urlencoded;charset=UTF-8"
            xmlhttp.setRequestHeader(nameHeader, dataHeader);
        }
    }
    xmlhttp.send(dataToSend);
}

/**
 * @description realiza requisição HTTP e retorna uma promise
 * @param {*} handlerSuccess 
 * @param {*} url 
 * @param {*} method 
 * @param {*} dataToSend 
 * @param {*} isForm 
 */
function rqPromise(url, method, dataToSend, isForm) {
    let nameHeader = '',
        dataHeader, response, async = true;
    let xmlhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
    }

    //afirmar que as conexões exigem credenciamento/autenticação
    xmlhttp.withCredentials = true;

    return new Promise(function (resolve) {
        //Call a function when the state changes.
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                response = this.response
                resolve(response)
                this.abort();
            }
        }
        xmlhttp.open(method, url, async);
        if (method == "POST") {
            nameHeader = 'Content-type';
            if (isForm != true) {
                xmlhttp.setRequestHeader(nameHeader, dataHeader);
                dataHeader = "application/json;charset=UTF-8";
            }
        }
        xmlhttp.send(dataToSend);

    })

}

export { rq, rqPromise };