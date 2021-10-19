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


function valNombre() {
    var nombre = document.getElementById('fname').value;
    document.getElementById('mfname').style.display = "none";
    if (nombre.length < 6 || nombre.indexOf(" ") < 1) {
        document.getElementById('mfname').style.display = "block";
        return false;
    }
    return true;
}

function valEmail() {
    var email = document.getElementById('email').value;
    document.getElementById('memail').style.display = "none";
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email) == false) {
        document.getElementById('memail').style.display = "block";
        return false;
    }
    return true;
}

function valEdad() {
    var edad = document.getElementById('edad').value;
    document.getElementById('medad').style.display = "none";

    if (edad < 18) {
        document.getElementById('medad').style.display = "block";
        return false;
    }
    return true;
}

function valPassword() {
    var password = document.getElementById('password').value;
    document.getElementById('mpassword').style.display = "none";
    var re = /^[a-zA-Z]+[0-9]+$/;

    if (re.test(password) == false || password.length < 8) {
        document.getElementById('mpassword').style.display = "block";
        return false;
    }
    return true;
}

function valRpassword() {
    var rpassword = document.getElementById('rpassword').value;
    document.getElementById('mrpassword').style.display = "none";
    var password = document.getElementById('password').value;

    if (password != rpassword) {
        document.getElementById('mrpassword').style.display = "block";
        return false;
    }
    return true;
}

function valDireccion() {
    var direccion = document.getElementById('direccion').value;
    document.getElementById('mdireccion').style.display = "none";
    var re = /^[a-zA-ZÀ-ÿ\s0-9]+$/;
    if (re.test(direccion) == false || direccion.length < 5 || direccion.indexOf(" ") < 1) {
        document.getElementById('mdireccion').style.display = "block";
        return false;
    }
    return true;
}

function valTelefono() {
    var telefono = document.getElementById('telefono').value;
    document.getElementById('mtelefono').style.display = "none";
    var re = /^\d{7,14}$/
    if (re.test(telefono) == false) {
        document.getElementById('mtelefono').style.display = "block";
        return false;
    }
    return true;
}

function valCiudad() {
    var ciudad = document.getElementById('ciudad').value;
    document.getElementById('mciudad').style.display = "none";
    if (ciudad.length < 3) {
        document.getElementById('mciudad').style.display = "block";
        return false;
    }
    return true;
}

function valCp() {
    var cp = document.getElementById('cp').value;
    document.getElementById('mcp').style.display = "none";
    if (cp.length < 3) {
        document.getElementById('mcp').style.display = "block";
        return false;
    }
    return true;
}

function valDni() {
    var dni = document.getElementById('dni').value;
    document.getElementById('mdni').style.display = "none";
    var re = /^\d{7,8}$/
    if (re.test(dni) == false) {
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
        alert(msg);
    } else {
        alert(msg);
    }

}