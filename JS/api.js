

function urlDinamic() {

    var url = new URL('https://curso-dev-2021.herokuapp.com/newsletter')
    var params = url.searchParams; // busca parametros

    params.append('name', varName);
    params.append('email', varEmail);
    params.append('password', varPass);
    params.append('age', varAge);
    params.append('address', varAdress);
    params.append('phoneNumber', varPhone);
    params.append('city', varCity);
    params.append('postalCode', varZipCode);
    params.append('idNumber', varDocNum);

    console.log(url.href)
    return url;

}

var sendForm = function () {
    fetch(urlDinamic())
        .then(responseForm)

        .then(dataForm)

        .catch(responseError)


}


function responseForm(res) {
    console.log(res)
    return res.json();

}

function dataForm(data) {
    //mostrar modal;

    saveOnLocalStorage();
    console.log(data);
    showModal(data);
}

function responseError(err) {
    console.log(err)
    // showModalError(err)
}


function showModal(data) {
    for (const key of data) {
        var li = document.createElement('li')
        li.textContent = `${key} : ${data[key]}`
        document.getElementById('ul_modal').appendChild(li)

    }

}
























