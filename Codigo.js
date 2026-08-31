var nombres = [];
var apellidos = [];
var telefonos = [];
var contrasenas = [];

function registrar() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var telefono = document.getElementById("telefonoRegistro").value.trim();
    var contraseña = document.getElementById("contraseñaRegistro").value.trim();

    if (nombre == "") {
        alert("Debes ingresar tu nombre.");
    } else if (apellido == "") {
        alert("Debes ingresar tu apellido.");
    } else if (telefono == "") {
        alert("Debes ingresar tu número de teléfono.");
    } else if (telefono.length < 8) {
        alert("Debes ingresar un número de teléfono válido.");
    } else if (contraseña == "") {
        alert("Debes ingresar una contraseña.");
    } else {
        var existe = false;

        for (var i = 0; i < telefonos.length; i++) {
            if (telefonos[i] == telefono) {
                existe = true;
            }
        }

        if (existe == true) {
            alert("Ese teléfono ya está registrado.");
        } else {
            nombres.push(nombre);
            apellidos.push(apellido);
            telefonos.push(telefono);
            contrasenas.push(contraseña);

            alert("Registro exitoso " + nombre);

            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("telefonoRegistro").value = "";
            document.getElementById("contraseñaRegistro").value = "";
        }
    }
}

function iniciarSesion() {
    var telefono = document.getElementById("telefono").value.trim();
    var contraseña = document.getElementById("contraseña").value.trim();

    if (telefono == "") {
        alert("Debes ingresar tu número de teléfono.");
    } else if (contraseña == "") {
        alert("Debes ingresar una contraseña.");
    } else {
        var encontrado = false;
        var i = 0;

        while (i < telefonos.length) {
            if (telefonos[i] == telefono && contrasenas[i] == contraseña) {
                encontrado = true;
                break;
            }
            i++;
        }

        if (encontrado == true) {
            alert("Inicio de sesión correcto");
        } else {
            alert("El número de teléfono o la contraseña son incorrectos.");
        }
    }
}
