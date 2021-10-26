var form = document.getElementById('formulario')
form.addEventListener('submit', validarFormulario)

document.getElementById('fname').addEventListener('blur', valNombre)
document.getElementById('email').addEventListener('blur', valEmail)
document.getElementById('edad').addEventListener('blur', valEdad)
document.getElementById('password').addEventListener('blur', valPassword)
document.getElementById('rpassword').addEventListener('blur', valRpassword)
document.getElementById('direccion').addEventListener('blur', valDireccion)
document.getElementById('telefono').addEventListener('blur', valTelefono)
document.getElementById('ciudad').addEventListener('blur', valCiudad)
document.getElementById('ciudad').addEventListener('blur', valCiudad)
document.getElementById('cp').addEventListener('blur', valCp)
document.getElementById('dni').addEventListener('blur', valDni)

var varName = document.getElementById('fname').value;
var varEmail = document.getElementById('email').value;
var varAge = document.getElementById('edad').value;
var varPass = document.getElementById('password').value;
var varRpass = document.getElementById('rpassword').value;
var varAdress = document.getElementById('direccion').value;
var varPhone = document.getElementById('telefono').value;
var varCity = document.getElementById('ciudad').value;
var varZipCode = document.getElementById('cp').value;
var varDocNum = document.getElementById('dni').value;


function valNombre() {
    varName = document.getElementById('fname').value;
    document.getElementById('mfname').style.display = "none";
    if (varName.length < 6 || varName.indexOf(" ") < 1) {
        document.getElementById('mfname').style.display = "block";
        return false;
    }
    return true;

}

function valEmail() {
    varEmail = document.getElementById('email').value;
    document.getElementById('memail').style.display = "none";
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(varEmail) == false) {
        document.getElementById('memail').style.display = "block";
        return false;
    }
    return true;
}

function valEdad() {
    varAge = document.getElementById('edad').value;
    document.getElementById('medad').style.display = "none";

    if (varAge < 18) {
        document.getElementById('medad').style.display = "block";
        return false;
    }
    return true;
}

function valPassword() {
    varPass = document.getElementById('password').value;
    document.getElementById('mpassword').style.display = "none";
    var re = /^[a-zA-Z]+[0-9]+$/;

    if (re.test(varPass) == false || varPass.length < 8) {
        document.getElementById('mpassword').style.display = "block";
        return false;
    }
    return true;
}

function valRpassword() {
    varRpass = document.getElementById('rpassword').value;
    document.getElementById('mrpassword').style.display = "none";
    varPass = document.getElementById('password').value;

    if (varPass != varRpass) {
        document.getElementById('mrpassword').style.display = "block";
        return false;
    }
    return true;
}

function valDireccion() {
    varAdress = document.getElementById('direccion').value;
    document.getElementById('mdireccion').style.display = "none";
    var re = /^[a-zA-ZÀ-ÿ\s0-9]+$/;
    if (re.test(varAdress) == false || varAdress.length < 5 || varAdress.indexOf(" ") < 1) {
        document.getElementById('mdireccion').style.display = "block";
        return false;
    }
    return true;
}

function valTelefono() {
    varPhone = document.getElementById('telefono').value;
    document.getElementById('mtelefono').style.display = "none";
    var re = /^\d{7,14}$/
    if (re.test(varPhone) == false) {
        document.getElementById('mtelefono').style.display = "block";
        return false;
    }
    return true;
}

function valCiudad() {
    varCity = document.getElementById('ciudad').value;
    document.getElementById('mciudad').style.display = "none";
    if (varCity.length < 3) {
        document.getElementById('mciudad').style.display = "block";
        return false;
    }
    return true;
}

function valCp() {
    varZipCode = document.getElementById('cp').value;
    document.getElementById('mcp').style.display = "none";
    if (varZipCode.length < 3) {
        document.getElementById('mcp').style.display = "block";
        return false;
    }
    return true;
}

function valDni() {
    varDocNum = document.getElementById('dni').value;
    document.getElementById('mdni').style.display = "none";
    var re = /^\d{7,8}$/
    if (re.test(varDocNum) == false) {
        document.getElementById('mdni').style.display = "block";
        return false;
    }
    return true;
}


function validarFormulario(e) {
    e.preventDefault();
    var msg = ""

    if (!valNombre()) {
        msg = msg + 'Falta el nombre\n';
    }
    if (!valEmail()) {
        msg = msg + 'Falta el email\n';
    }
    if (!valPassword()) {
        msg = msg + 'Falta el password\n';
    }
    if (!valEdad()) {
        msg = msg + 'Falta la edad\n';
    }
    if (!valRpassword()) {
        msg = msg + 'No coinciden las contraseñas\n';
    }
    if (!valDireccion()) {
        msg = msg + 'Falta la dirección\n';
    }
    if (!valTelefono()) {
        msg = msg + 'Falta el teléfono\n';
    }
    if (!valCiudad()) {
        msg = msg + 'Falta ciudad\n';
    }
    if (!valCp()) {
        msg = msg + 'Falta código postal\n';
    }
    if (!valDni()) {
        msg = msg + 'Falta Dni\n';
    }



    if (msg == "") {
        msg = '\nNombre: ' + document.getElementById('fname').value;
        msg = msg + '\nEmail: ' + document.getElementById('email').value;
        msg = msg + '\nPassword: ' + document.getElementById('password').value;
        msg = msg + '\nPassword Repetida: ' + document.getElementById('rpassword').value;
        msg = msg + '\nEdad: ' + document.getElementById('edad').value;
        msg = msg + '\nDireción: ' + document.getElementById('direccion').value;
        msg = msg + '\nTeléfono: ' + document.getElementById('telefono').value;
        msg = msg + '\nCiudad: ' + document.getElementById('ciudad').value;
        msg = msg + '\nCódigo Postal: ' + document.getElementById('cp').value;
        msg = msg + '\nDNI: ' + document.getElementById('dni').value;



        sendForm();


    } else {
        alert(msg);
    }

}