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

    // VALIDANDO CORREO ELECTRONICO
    let email = document.querySelector("#emailCheckout");
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    // SI EL USUARIO NO INTRODUCIÓ NADA
    if (email.value.length === 0) {
        email.focus;
        email.style.border = '0';
        email.style.backgroundColor = '#ff000008';
        email.style.outline = '1px solid red'
        email.style.transitionDuration = '0.4s'

        Toastify({
            text: "Introduce un correo electrónico",
            duration: 2500,
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#c94132",
                borderRadius: '4px'
            },
            onClick: function () {} // Callback after click
        }).showToast();

        return false;


        // SI EL USUARIO INTRODUCIÓ UN CORREO INCORRECTO
    } else if (!filter.test(email.value)) {
        email.focus;
        email.style.border = '0';
        email.style.backgroundColor = '#ff000008';
        email.style.outline = '1px solid red'

        Toastify({
            text: "Introduce un correo electrónico válido",
            duration: 2500,
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#c94132",
                borderRadius: '4px'

            },
            onClick: function () {} // Callback after click
        }).showToast();
        return false;

        // SI EL CORREO ES CORRECTO
    } else {
        email.focus;
        email.style.border = '0';
        email.style.backgroundColor = 'transparent';
        email.style.outline = '2px solid #00ffb1'
        email.style.transitionDuration = '0.4s'
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

// //

// //

// //

// DATOS CREDITICIOS

// VALIDANDO DATOS CREDITICIOS

let comprar = document.querySelector('.buyButtonFinal');

comprar.onclick = () => {
    validateCard();
    validateCardNumber();
    validateCardDate()
};

// VALIDANDO EL NOMBRE DE LA TARJETA
let validateCard = () => {

    let inputCardName = document.querySelector('#card-name')
    let filterName = /^[A-Z]+$/i;

    // SI EL USUARIO NO INTRODUCE NADA
    if (inputCardName.value.length == 0) {
        inputCardName.focus;
        inputCardName.style.border = '0';
        inputCardName.style.backgroundColor = '#ff000008';
        inputCardName.style.outline = '1px solid red'
        inputCardName.style.transitionDuration = '0.4s'

        Toastify({
            text: "Ingresa el nombre que figura en tu tarjeta",
            duration: 2500,
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#c94132",
                borderRadius: '4px'

            },
            onClick: function () {} // Callback after click
        }).showToast();
        return false;
    }

    // SI EL USUARIO INTRODUCE UN DATO INCORRECTO
    else if (!filterName.test(inputCardName.value)) {
        inputCardName.focus;
        inputCardName.style.border = '0';
        inputCardName.style.backgroundColor = '#ff000008';
        inputCardName.style.outline = '1px solid red'
        inputCardName.style.transitionDuration = '0.4s'

        Toastify({
            text: "El nombre introducido es incorrecto",
            duration: 2500,
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#c94132",
                borderRadius: '4px'

            },
            onClick: function () {} // Callback after click
        }).showToast();
        return false;

    } else {
        inputCardName.focus;
        inputCardName.style.border = '0';
        inputCardName.style.backgroundColor = 'transparent';
        inputCardName.style.outline = '2px solid #00ffb1'
        inputCardName.style.transitionDuration = '0.4s'
        return true;
    }
}

// VALIDANDO EL NUMERO DE LA TARJETA
let validateCardNumber = () => {
    let filterVisa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/
    let filterMastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/
    let cardNumberInput = document.querySelector('.cardNumberInput');

    if (cardNumberInput.value.length === 0) {
        cardNumberInput.focus;
        cardNumberInput.style.border = '0';
        cardNumberInput.style.backgroundColor = '#ff000008';
        cardNumberInput.style.outline = '1px solid red'
        cardNumberInput.style.transitionDuration = '0.4s';

        Toastify({
            text: "Ingresa el numero que figura en tu tarjeta",
            duration: 2500,
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#c94132",
                borderRadius: '4px'

            },
            onClick: function () {} // Callback after click
        }).showToast();
        return false;
    } else if (filterVisa.test(cardNumberInput.value)) {

    } else if (filterMastercard.test(cardNumberInput.value)) {
        alert('tu tarjeta es mastercard')
    }
}

// VALIDANDO EXPIRACION TARJETA
let validateCardDate = () => {
    let expiredDate = document.querySelector('.expiredNumber').value;
    let monthCard = expiredDate.slice(0,2);
    let cardYear = expiredDate.slice(2,4);

    // DEFINIENDO LA FECHA ACTUAL
    let today = new Date();
    let mes = (('0')+(today.getMonth() + 1));
    let año = today.getFullYear();
    let year2Digits =  año.toString().substr(-2);

    console.log(mes)
    console.log(year2Digits)

    let inputcoso = document.querySelector('.expiredNumber');

    if (inputcoso.value.length === 0) {
        inputcoso.focus;
        inputcoso.style.border = '0';
        inputcoso.style.backgroundColor = '#ff000008';
        inputcoso.style.outline = '1px solid red'
        inputcoso.style.transitionDuration = '0.4s';

        Toastify({
            text: "Ingresa la fecha de expiración que figura en tu tarjeta",
            duration: 2500,
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#c94132",
                borderRadius: '4px'

            },
            onClick: function () {} // Callback after click
        }).showToast();
        return false;
    }
    
    else if ((cardYear < year2Digits) || (monthCard < mes)) {
        inputcoso.focus;
        inputcoso.style.border = '0';
        inputcoso.style.backgroundColor = '#ff000008';
        inputcoso.style.outline = '1px solid red'
        inputcoso.style.transitionDuration = '0.4s';

        Toastify({
            text: "Tu tarjeta ya expiró",
            duration: 2500,
            newWindow: true,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "#c94132",
                borderRadius: '4px'

            },
            onClick: function () {} // Callback after click
        }).showToast();
        return false;
    }
}


// let filterVisa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/
// let filterMastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/