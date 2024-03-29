// Validación formulario 

const formNombre = document.getElementById("nombre");
const formApellido = document.getElementById("apellido");
const formCorreo = document.getElementById("correo");
const formContrasena = document.getElementById("contrasena");
const formRepetirContrasena = document.getElementById("confirmar-contrasena");
const formGenero = document.querySelectorAll('#genero input[type="radio"]');
const formNacimiento = document.getElementById("fecha-nacimiento");
const formPais = document.getElementById("seleccionar-pais");
const formTerminosCondiciones = document.getElementById("boton-submit-registro");

let mensajeErrorNombre = document.createElement("span");
let mensajeErrorApellido = document.createElement("span");
let mensajeErrorCorreo = document.createElement("span");
let mensajeErrorContrasena = document.createElement("span");
let mensajeErrorRepetirContrasena = document.createElement("span");
let mensajeErrorGenero = document.createElement("span");
let mensajeErrorNacimiento = document.createElement("span");
let mensajeErrorPais = document.createElement("span");
let mensajeErrorTerminosCondiciones = document.createElement("span");

let validacionesExitosas = {
    validacionNombreApellido: true,
    validacionCorreo: true,
    validacionContrasena: true,
    validacionRepetirContrasena: true,
    validacionGenero: true,
    validacionNacimiento: true,
    validacionPais: true
}

// Validación Nombre 
const validaNombreApellido = (inputNombreApellido, elementoParaError, error) => {
    let valorNombreApellido = inputNombreApellido.trim();
    // Expresión regular: todas las letras, minúsculas y mayúsculas
    const regexNombre = /^[a-zA-Z\s]+$/;

    if (valorNombreApellido.length < 3) {
        error.innerText = "El nombre o apellido ingresado es muy corto.";
        elementoParaError.insertAdjacentElement("afterend", error);
        elementoParaError.style.backgroundColor = "var(--colorAlertas)"
        validacionesExitosas.validacionNombreApellido = false;
    } else if (!regexNombre.test(valorNombreApellido)) {
        error.innerText = "Inserta un nombre o apellido válido. Se aceptan sólo caracteres de la A a la Z, minúsculas y mayúsculas.";
        elementoParaError.insertAdjacentElement("afterend", error);
        elementoParaError.style.backgroundColor = "var(--colorAlertas)"
        validacionesExitosas.validacionNombreApellido = false;
    } else {
        error.remove();
        elementoParaError.style.backgroundColor = "var(--colorBlanco)"
        validacionesExitosas.validacionNombreApellido = true;
    }
};

formNombre.addEventListener("focusout", () => {
    validaNombreApellido(formNombre.value, formNombre, mensajeErrorNombre);
});

// Validación Apellido
formApellido.addEventListener("focusout", () => {
    validaNombreApellido(formApellido.value, formApellido, mensajeErrorApellido)
})

/* Validación correo electrónico */
const validaCorreo = () => {
    let valorCorreo = formCorreo.value.trim();
    // Expresión regular: estructura básica de un correo (aaa@bbb.ccc)
    const regexCorreoEstructura = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expresión regular: símbolos no permitidos en correo
    const regexCorreoCaracteres = /[(),:;<>[\]\\\!\#\$\%\&\'\*\+\/\=\?\^\`\{\|\}\~]/;

    if (!regexCorreoEstructura.test(valorCorreo)) {
        mensajeErrorCorreo.innerText = "La estructura del correo no es válida. Esta debe ser, por ejemplo, minombre@dominio.com";
        formCorreo.insertAdjacentElement("afterend", mensajeErrorCorreo);
        formCorreo.style.backgroundColor = "var(--colorAlertas)"
        validacionesExitosas.validacionCorreo = false;
    } else if (regexCorreoCaracteres.test(valorCorreo)) {
        mensajeErrorCorreo.innerText = "Los caracteres definidos no son válidos. Sólo se acepta el guión ('-'), guión bajo ('_') y el punto ('.') "
        formCorreo.insertAdjacentElement("afterend", mensajeErrorCorreo);
        formCorreo.style.backgroundColor = "var(--colorAlertas)"
        validacionesExitosas.validacionCorreo = false;
    } else {
        mensajeErrorCorreo.remove();
        formCorreo.style.backgroundColor = "var(--colorBlanco)"
        validacionesExitosas.validacionCorreo = true;
    }
}

formCorreo.addEventListener("focusout", () => {
    validaCorreo();
})

/* Validación Contraseña */
const validaContrasena = () => {

    let valorContrasena = formContrasena.value.trim();
    let valido = true;

    // Existencia de longitud mínima
    if (valorContrasena.length < 8) {
        mensajeErrorContrasena.innerText = "La contraseña debe tener, al menos, 8 caracteres.";
        valido = false;
        validacionesExitosas.validacionContrasena = false;
    } // Existencia de al menos 1 número 
    else if (!/[0-9]/.test(valorContrasena)) {
        mensajeErrorContrasena.innerText = "La contraseña debe contener, al menos, un número.";
        valido = false;
        validacionesExitosas.validacionContrasena = false;
    } // Existencia de una letra mayúscula 
    else if (!/[A-Z]/.test(valorContrasena)) {
        mensajeErrorContrasena.innerText = "La contraseña debe contener, al menos, una letra en mayúsculas.";
        valido = false;
        validacionesExitosas.validacionContrasena = false;
    } // Existencia de un caracter especial 
    else if (!/[!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]/.test(valorContrasena)) {
        mensajeErrorContrasena.innerText = "La contraseña debe contener, al menos, un caracter especial.";
        valido = false;
        validacionesExitosas.validacionContrasena = false;
    } // No deben existir espacios en blanco 
    else if (/\s/.test(valorContrasena)) {
        mensajeErrorContrasena.innerText = "La contraseña no debe contener espacios en blanco.";
        valido = false;
        validacionesExitosas.validacionContrasena = false;
    }

    // Muestra error en caso de cumplir una de las condiciones anteriores
    if (!valido) {
        formContrasena.insertAdjacentElement("afterend", mensajeErrorContrasena);
        formContrasena.style.backgroundColor = "var(--colorAlertas)"
    } else {
        mensajeErrorContrasena.remove();
        formContrasena.style.backgroundColor = "var(--colorBlanco)"
        validacionesExitosas.validacionContrasena = true;
    }
};

formContrasena.addEventListener("focusout", () => {
    validaContrasena();
});

/* Validación repetir contrasena */
const validaRepetirContrasena = () => {
    let valorContrasenaValidacion = formContrasena.value;
    let valorRepetirContrasena = formRepetirContrasena.value;
    if (valorRepetirContrasena !== valorContrasenaValidacion) {
        mensajeErrorRepetirContrasena.innerText = "Las contraseñas deben ser iguales.";
        formRepetirContrasena.insertAdjacentElement("afterend", mensajeErrorRepetirContrasena);
        formRepetirContrasena.style.backgroundColor = "var(--colorAlertas)";
        validacionesExitosas.validacionRepetirContrasena = false;
    } else {
        mensajeErrorRepetirContrasena.remove();
        formRepetirContrasena.style.backgroundColor = "var(--colorBlanco)"
        validacionesExitosas.validacionRepetirContrasena = true;
    }
}

formRepetirContrasena.addEventListener("focusout", () => {
    validaRepetirContrasena();
})

/* Validación género */
const validaGenero = () => {
    let seleccionGenero = false;
    for (let i = 0; i < formGenero.length; i++) {
        if (formGenero[i].checked) {
            seleccionGenero = true;
            break;
        }
    }
    if (!seleccionGenero) {
        mensajeErrorGenero.innerText = 'Selecciona una opción';
        document.getElementById("genero").insertAdjacentElement("afterend", mensajeErrorGenero);
        document.getElementById("genero").style.backgroundColor = "var(--colorAlertas)";
        validacionesExitosas.validacionGenero = false;
    } else {
        mensajeErrorGenero.remove();
        document.getElementById("genero").style.backgroundColor = "var(--colorBlanco)";
        validacionesExitosas.validacionGenero = true;
    }
}

formGenero.forEach(botonRadio => {
    botonRadio.addEventListener("focusout", () => {
        validaGenero();
    })
})

/* Validación nacimiento */
formNacimiento.value = "";
const validaNacimiento = () => {
    const fechaNacimiento = new Date(document.getElementById("fecha-nacimiento").value);
    let seleccionNacimiento = false;

    if (isNaN(fechaNacimiento.getTime())) {
        seleccionNacimiento = true;
    }

    if (!seleccionNacimiento) {
        mensajeErrorNacimiento.innerText = 'Selecciona una fecha';
        formNacimiento.insertAdjacentElement("afterend", mensajeErrorNacimiento);
        formNacimiento.style.backgroundColor = "var(--colorAlertas)";
        validacionesExitosas.validacionNacimiento = false;
    } else {
        mensajeErrorNacimiento.remove();
        formNacimiento.style.backgroundColor = "var(--colorBlanco)";
        validacionesExitosas.validacionNacimiento = true;
    }

    //¿Usuario mayor de 14 años?
    
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    fechaNacimiento.setFullYear(hoy.getFullYear());

    if (hoy < fechaNacimiento) {
        edad--;
    }
    if (edad < 14) {
        mensajeErrorNacimiento.innerText = 'Debes ser mayor de 14 años para continuar';
        formNacimiento.insertAdjacentElement("afterend", mensajeErrorNacimiento);
        formNacimiento.style.backgroundColor = "var(--colorAlertas)";
        validacionesExitosas.validacionNacimiento = false;
    } else {
        mensajeErrorNacimiento.remove();
        formNacimiento.style.backgroundColor = "var(--colorBlanco)";
        validacionesExitosas.validacionNacimiento = true;
    }
}

formNacimiento.addEventListener("focusout", () => {
    validaNacimiento();
}) 

/* Validación país */
const validarPais = () => {
    if (formPais.value === '') {
        mensajeErrorPais.innerText = "Selecciona un país"
        formPais.insertAdjacentElement('afterend', mensajeErrorPais);
        formPais.style.backgroundColor = "var(--colorAlertas)";
        validacionesExitosas.validacionPais = false;
    } else {
        mensajeErrorPais.remove();
        formPais.style.backgroundColor = "var(--colorBlanco)";
        validacionesExitosas.validacionPais = true;
    }
}

formPais.addEventListener("focusout", () => {
    validarPais();
})

console.log(formNombre.value)

/* METODO POST PARA REGISTRO USUARIO */
const formulario = document.querySelector("form");

let mensajeErrorForm = document.createElement("span");
formulario.insertAdjacentElement("afterend", mensajeErrorForm);

formulario.addEventListener("submit", async (submitEvent) => {
    submitEvent.preventDefault();

    /* Validación general */
    validaNombreApellido(formNombre.value, formNombre, mensajeErrorNombre);
    validaNombreApellido(formApellido.value, formApellido, mensajeErrorApellido);
    validaCorreo();
    validaContrasena();
    validaRepetirContrasena();
    validaGenero();
    validaNacimiento();
    validarPais();

    /* Registro usuario */
    if (Object.values(validacionesExitosas).includes(false)) {
        mensajeErrorForm.innerText = "Antes de registrarte, debes validar los datos ingresados.";
    } else {
        mensajeErrorForm.remove();

        const formElement = submitEvent.currentTarget;
        const formData = new FormData(formElement);
        const correo = formData.get("correo");
        const contrasena = formData.get("contrasena");

        const usuario = {
            correo,
            contrasena,
        };

        const baseURL = "https://placid-seen-raven.glitch.me";
        const url = baseURL + "/registro";
        const fetchConfig = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        };

        try {
            const respuesta = await fetch(url, fetchConfig);
            // TODO gestionar errores
            if (!respuesta.ok) {
                console.error("La respuesta no está OK");
                return;
            }

            const objetoJSON = await respuesta.json();
            console.dir(objetoJSON);
            window.location = "/Indice-Diario-Cliente/ingreso.html"
        } catch (error) {
            //gestionar errores
            console.error(error.code);
            console.error(error.message);
        }

        /* Guardar información adicional usuario */

        const nombre = formData.get("nombre");
        const apellido = formData.get("apellido");
        const nombreUsuario = formData.get("nombre-usuario");
        const genero = formData.get("genero");
        const fechaNacimiento = formData.get("fecha-nacimiento");
        const paisResidencia = formData.get("seleccionar-pais");

        const infoUsuario = {
            nombre,
            apellido,
            nombreUsuario,
            correo,
            genero,
            fechaNacimiento,
            paisResidencia,
        }

        const baseUrlInfoUsuario = "https://placid-seen-raven.glitch.me";
        const urlInfoUsuario = baseUrlInfoUsuario + "/infoUsuarioAdicional";
        const fetchConfigInfoUsuario = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(infoUsuario),
        };

        try {
            const respuestaInfoUsuario = await fetch(urlInfoUsuario, fetchConfigInfoUsuario);
            // TODO gestionar errores
            if (!respuestaInfoUsuario.ok) {
                console.error("La respuesta no está OK");
                return;
            }
            const objetoJSONInfoUsuario = await respuestaInfoUsuario.json();
            console.dir(objetoJSONInfoUsuario);
        } catch (error) {
            //gestionar errores
            console.error(error.code);
            console.error(error.message);
        }

    }
});