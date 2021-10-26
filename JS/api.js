function urlDinamic() {

    var url = new URL('https://curso-dev-2021.herokuapp.com/newsletter')
    var params = url.searchParams;

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
    saveOnLocalStorage();
    console.log(data);
    // Show modal;
    // showModal(data);
}

function responseError(err) {
    console.log(err)
    // Show modal error
    // showModalError(err)
}























