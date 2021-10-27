function showModal(modal) {

    vtn = document.getElementById('vtnModal')
    vtn.style.display = 'block';
    vtn = document.getElementById('vtnModal_Data')
    vtn.innerHTML = 'LOS DATOS INGRESADOS SON CORRECTOS<br>' +
        '<br>Nombre Completo: ' + modal.name +
        '<br>Password: ' + modal.password +
        '<br>Email: ' + modal.email +
        '<br>Direccion: ' + modal.address +
        '<br>Ciudad: ' + modal.city +
        '<br>Edad: ' + modal.age +
        '<br>Teléfono: ' + modal.phoneNumber +
        '<br>Codigo Postal: ' + modal.postalCode;
    '<br>DNI: ' + modal.idNumber;


}
function showModalError(err) {

    vtn = document.getElementById('vtnModal')
    vtn.style.display = 'block';
    vtn = document.getElementById('vtnModal_Data')
    vtn.innerHTML = 'HEMOS ENCONTRADO ERRORES, POR FAVOR VERIFIQUE:<br>' + '<br>' + err;


}
