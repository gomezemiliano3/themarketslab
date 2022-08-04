// SLIDER JS / SPLIDE.JS //

let splide = new Splide('.splide');
let bar = splide.root.querySelector('.my-slider-progress-bar');

splide.on('mounted move', function () {
    let end = splide.Components.Controller.getEnd() + 1;
    bar.style.width = String(100 * (splide.index + 1) / end) + '%';
});
splide.mount();
// SLIDER TERMINA //

// //

// //

// //

//* CAMBIANDO LOS VALORES DEL HTML CON LOS VALORES DE LOCAL STORAGE *//

let m1P = document.querySelector(".m1Text").innerText = localStorage.getItem('M1');
let m2P = document.querySelector(".m2Text").innerText = localStorage.getItem('M2');
let m3P = document.querySelector(".m3Text").innerText = localStorage.getItem('M3');
let m4P = document.querySelector(".m4Text").innerText = localStorage.getItem('CH');


let botonEnviar = document.querySelector("#submitButton");
// CARRITO / PROCESADOR DE PAGO

// DEFINIENDO VARIABLES

datosPersonales = () => {

    let apellidoUsuario = document.querySelector("#surnameCheckout").value;

    let correoUsuario = document.querySelector("#emailCheckout").value;

    let nombreUsuario = document.querySelector("#nameCheckout").value;

    return {
        'apellidoUsuario': apellidoUsuario,
        'correoUsuario': correoUsuario,
        'nombreUsuario': nombreUsuario
    };
};

// //

// VALIDANDO DATOS
let correoIncorrecto = document.querySelector("#correoIncorrecto");

let testDatos = botonEnviar.onclick = (e) => {

    // console.log(datosPersonales());
    e.prevetDefault();
    console.log(datosPersonales().nombreUsuario, datosPersonales().apellidoUsuario, datosPersonales().correoUsuario);

    // VALIDANDO CORREO ELECTRONICO
    let email = document.querySelector("#emailCheckout");

    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        correoIncorrecto.innerText = "Ingresa un correo electrónico válido"
        email.focus;
        return false;
    } else {}
    // //
}