var expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

var form = document.getElementById('formulario')
form.addEventListener('submit', validarFormulario)

document.getElementById('fname').addEventListener('blur', valNombre)
document.getElementById('email').addEventListener('blur', valEmail)
document.getElementById('edad').addEventListener('blur', valEdad)
document.getElementById('password').addEventListener('blur', valPassword)


var fname = document.getElementById('fname').value
var password = document.getElementById('password').value;
var rpassword = document.getElementById('rpassword').value;
var email = document.getElementById('email').value;
var edad = document.getElementById('edad').value;
var telefono = document.getElementById('telefono').value;
var direccion = document.getElementById('direccion').value;
var ciudad = document.getElementById('ciudad').value;
var cp = document.getElementById('cp').value;
var dni = document.getElementById('dni').value;

function valNombre(){
    var nombre = document.getElementById('fname').value;
    document.getElementById('mfname').style.display="none";
    if(nombre.length<6 || nombre.indexOf(" ")<1){
        document.getElementById('mfname').style.display="block";
        return false;
    }
    return true;
}
function valEmail(){
    var email = document.getElementById('email').value;
    document.getElementById('memail').style.display="none";
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)==false){
        document.getElementById('memail').style.display="block";
        return false;
    }
    return true;
}

function valEdad(){
    var edad = document.getElementById('edad').value;
    document.getElementById('medad').style.display="none";
    
    if (edad <17){
        document.getElementById('medad').style.display="block";
        return false;
    }
    return true;
}

function valPassword(){
    var password = document.getElementById('password').value;
    document.getElementById('mpassword').style.display="none";
    var re = /^[a-zA-Z]+[0-9]+$/;

    if (re.test(password)==false || password.length<8){
        document.getElementById('mpassword').style.display="block";
        return false;
    }
    return true;
}

function validarFormulario(e){

    e.preventDefault();
    var msg=""
  
    if (!valNombre()){
        msg=msg+'Falta el nombre\n';
    }
    if (!valEmail()){
        msg=msg+'Falta el email\n';
    }
    if (!valPassword()){
        msg=msg+'Falta el password\n';
    }
    if (!valEdad()){
        msg=msg+'Falta la edad\n';
    }


    if (msg==""){
        msg='\nNombre: '+document.getElementById('fname').value;
        msg=msg+'\nEmail: '+document.getElementById('email').value;
        msg=msg+'\nPassword: '+document.getElementById('password').value;
        msg=msg+'\nEdad: '+document.getElementById('edad').value;
        alert(msg);
    } else {
        alert(msg);
    }




    
   
}