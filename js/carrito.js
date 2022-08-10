// SLIDER JS / SPLIDE.JS //

let splide = new Splide('.splide');
let bar = splide.root.querySelector('.my-slider-progress-bar');


// (BARRA DE ABAJO)
splide.on('mounted move', () => {
    let end = splide.Components.Controller.getEnd() + 1;
    bar.style.width = String(100 * (splide.index + 1) / end) + '%';
});
splide.mount();

// SLIDER TERMINA //

// //

// //

// //

//* CAMBIANDO LOS VALORES (TEXTO) DE LA PRIMERA SLIDE CON LOS VALORES DE LOCAL STORAGE *//

let m1P = document.querySelector(".m1Text").innerText = localStorage.getItem('M1');
let m2P = document.querySelector(".m2Text").innerText = localStorage.getItem('M2');
let m3P = document.querySelector(".m3Text").innerText = localStorage.getItem('M3');
let m4P = document.querySelector(".m4Text").innerText = localStorage.getItem('CH');



// DEFINIENDO VARIABLES

datosPersonales = () => {
    let nombreUsuario = document.querySelector("#nameCheckout").value;

    let apellidoUsuario = document.querySelector("#surnameCheckout").value;

    // let correoUsuario = document.querySelector("#emailCheckout").value;

    return {
        'nombreUsuario': nombreUsuario,
        'apellidoUsuario': apellidoUsuario
    };
};

// //

let botonEnviar = document.querySelector("#submitButton");
let correoIncorrecto = document.querySelector("#cI");
let codigoPostal = document.querySelector('.codigoPostal')

// VALIDANDO DATOS

let testDatos = botonEnviar.onclick = () => {

    console.log(datosPersonales().nombreUsuario, datosPersonales().apellidoUsuario);

    // VALIDANDO CORREO ELECTRONICO
    let email = document.querySelector("#emailCheckout");
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (email.value.length === 0) {
        correoIncorrecto.innerText = "Ingresa un correo electrónico"
        email.focus;
        email.style.border = '0';
        email.style.backgroundColor = '#ff000008';
        email.style.outline = '2px solid red'
        return false;
    
    } else if (!filter.test(email.value)) {
        correoIncorrecto.innerText = "Ingresa un correo electrónico válido"
        email.focus;
        email.style.border = '0';
        email.style.backgroundColor = '#ff000008';
        email.style.outline = '2px solid red'
        return false;
    
    } else {
        correoIncorrecto.innerText = ""
        email.focus;
        email.style.border = '0';
        email.style.backgroundColor = 'transparent';
        email.style.outline = '2px solid #00ffb1'
        return true;
    }

}

// //

// //

// //


// CALCULANDO EL PRECIO + IVA EN LA SLIDE FINAL //

let totalCurso = document.querySelector('#precioTotal').innerText = ('U$S ') + localStorage.getItem('precioCurso')

let montoCurso = parseInt(localStorage.getItem('precioCurso'));

// CALCULANDO EL IVA //
let calculoIVA = parseInt((montoCurso * 22) / 100);

let IVA = document.querySelector('#calculoIva').innerText = ('U$S ') + calculoIVA;


// CALCULANDO EL SUBTOTAL //
let subtotal = document.querySelector('#subtotal')

let calculoTotal = (Number(montoCurso)) + (Number(calculoIVA))

subtotal.innerText = ('U$S ') + (calculoTotal)