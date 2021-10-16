var fname = document.getElementById('fname');
var password = document.getElementById('password');
var repetPassword = document.getElementById('rpassword');
var email = document.getElementById('email');
var edad = document.getElementById('edad');
var telefono = document.getElementById('telefono');
var direccion = document.getElementById('direccion');
var ciudad = document.getElementById('ciudad');
var codigoPostal = document.getElementById('cp');
var dni = document.getElementById('dni');

var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario() {
    console.log('enviando formulario')

    var mensajesError = [];

    if (fname.value === null || fname.value === '' ){
        mensajesError.push('Ingresa tu nombre');
    }

    if(password.value === null || password.value === ''){
        mensajesError.push('Ingresa tu password');
    }

    error.innerHTML = mensajesError.join(', ');

    return false
}