var nombreOk = false;
var apellidoOk = false;
var edadOk = false;
var emailOk = false;

//Funcion para saludar al usuario
window.onload = function () {
    saludarUsuario(); 
    var everyInputs = document.getElementsByTagName('input');
    for (var i = 0; i < (everyInputs.length); i++) {
        everyInputs[i].addEventListener('focus', estilo);
        everyInputs[i].addEventListener('blur', estilo2);
        var nodoname = everyInputs[i].name;

        switch (nodoname) {
            case "nombre":
                everyInputs[i].addEventListener('blur', validarNombre);
                break;
            case "apellido":
                everyInputs[i].addEventListener('blur', validarApellido);
                break;
            case "edad":
                everyInputs[i].addEventListener('blur', validarEdad);
                break;
            case "email":
                everyInputs[i].addEventListener('blur', validarEmail);
                break;
            default: break;
        }
    }
}

function saludarUsuario() {
    var nombre = prompt('¿Cómo te llamas?');
    if (nombre) {
        document.getElementById("saludo").innerHTML = "¡Hola, cómo estás! " + nombre + "<br><br>";
        alert("Saludando al Usuario " + nombre);
    }
}

function estilo() {
    this.style.backgroundColor = "white";
}

function estilo2(inputElement) {
    this.style.background = 'transparent';
    this.nextSibling.src = "imagenes/ok.png";
}

function estiloRojo(inElement) {
    inElement.style.backgroundColor = "red";
    inElement.nextSibling.src = "imagenes/ok.jpg";
}

function validarNombre() {
    var nombre = document.getElementById("nombre");
    var expresionRegular = /^\w{3,}$/;
    if (expresionRegular.test(nombre.value)) {
        nombreOk = true;
        estilo2(nombre);
    } else {
        nombreOk = false;
        estiloRojo(nombre);
    }
}

function validarApellido() {
    var apellido = document.getElementById("apellido");
    var expresionRegular = /^\w{3,}$/;
    if (expresionRegular.test(apellido.value)) {
        apellidoOk = true;
        estilo2(apellido);
    } else {
        apellidoOk = false;
        estiloRojo(apellido);
    }
}

function validarEdad() {
    var edad = document.getElementById("edad");
    if (edad.value > 10 && edad.value < 200) {
        edadOk = true;
        estilo2(edad);
    } else {
        edadOk = false;
        estiloRojo(edad);
    }
}

function validarEmail() {
    var valorEmail = document.getElementById("email");
    var expresionRegular = /^([\w-\.]{3,}\@.+\..+)$/;
    var email = convertirMinusculas(valorEmail.value);
    email = comprobarAtEmail(email);
    if (expresionRegular.test(email)) {
        emailOk = true;
        estilo2(valorEmail);
    } else {
        emailOk = false;
        estiloRojo(valorEmail);
    }
}

function convertirMinusculas(email) {
    return email.toLowerCase();
}

function comprobarAtEmail(email) {
    var expresion = /\sat\s/g;
    return email.replace(expresion, '@');
}

function validarDatos() {
    var msg = 'Los datos que debe rectificar son:';
    if (nombreOk && apellidoOk && edadOk && emailOk) {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var edad = document.getElementById("edad").value;
        var email = document.getElementById("email").value;

        // Muestro los datos en el contenedor
        document.getElementById("resultado").innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Edad:</strong> ${edad}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
        return false; // Evito que se envíe el formulario
    } else {
        if (!nombreOk) {
            msg += ' nombre ';
        }
        if (!apellidoOk) {
            msg += ' apellido ';
        }
        if (!edadOk) {
            msg += ' edad ';
        }
        if (!emailOk) {
            msg += ' email ';
        }
        alert(msg);
        return false;
    }
}

function capturarNuevosDatos() {
    // Limpia los campos del formulario y el resultado
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("edad").value = '';
    document.getElementById("email").value = '';
    document.getElementById("resultado").innerHTML = '';
    nombreOk = false;
    apellidoOk = false;
    edadOk = false;
    emailOk = false;
}

function nuevoUsuario() {
    capturarNuevosDatos();
    saludarUsuario(); // Llamo nuevamente al saludo
}
