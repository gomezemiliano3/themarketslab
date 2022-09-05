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

// PRIMERA  SLIDE

//* CAMBIANDO LOS VALORES (TEXTO) DE LA PRIMERA SLIDE CON LOS VALORES DE LOCAL STORAGE *//

let m1P = document.querySelector(".m1Text").innerText = localStorage.getItem('M1');
let m2P = document.querySelector(".m2Text").innerText = localStorage.getItem('M2');
let m3P = document.querySelector(".m3Text").innerText = localStorage.getItem('M3');
let m4P = document.querySelector(".m4Text").innerText = localStorage.getItem('CH');

// SEGUNDA SLIDE
let nombreUsuario = document.querySelector("#nameCheckout");
let apellidoUsuario = document.querySelector("#surnameCheckout");
let email = document.querySelector("#emailCheckout");
let address = document.querySelector('.addressInput')
let city = document.querySelector('.location');
let postalCode = document.querySelector('.codigoPostal')

let botonEnviar = document.querySelector("#submitButton");

nombrePay ='';

botonEnviar.onclick = () => {
    nombrePay = nombreUsuario.value;

    emailValidation();
    nameValidation();
    surnameValidation();
    addressValidation();
    cityValidation();
    postalCodeValidation();

    if (
        !emailValidation() ||
        !nameValidation() ||
        !surnameValidation() ||
        !addressValidation() ||
        !cityValidation() ||
        !postalCodeValidation()
    ) {
        Toastify({
            text: "Los datos introducidos son incorrectos",
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
            onClick: function () {}
        }).showToast();
    }

    else if ( 
        emailValidation() ||
        nameValidation() ||
        surnameValidation() ||
        addressValidation() ||
        cityValidation() ||
        postalCodeValidation()
    ) {
        let splideMove = document.querySelector('.splide__list');
        splideMove.style.transform = "translateX(-2200px)"
        splideMove.style.transitionDuration = '0.4s'

        let splideBar = document.querySelector('.my-slider-progress-bar')
        splideBar.style.width = '100%'
    }
}

// ERRORES
let nameError = () => {
    nombreUsuario.focus;
    nombreUsuario.style.border = '0';
    nombreUsuario.style.backgroundColor = '#ff000008';
    nombreUsuario.style.outline = '1px solid red'
    nombreUsuario.style.transitionDuration = '0.4s'
};
let surnameError = () => {
    apellidoUsuario.focus;
    apellidoUsuario.style.border = '0';
    apellidoUsuario.style.backgroundColor = '#ff000008';
    apellidoUsuario.style.outline = '1px solid red'
    apellidoUsuario.style.transitionDuration = '0.4s'
};
let emailError = () => {
    email.focus;
    email.style.border = '0';
    email.style.backgroundColor = '#ff000008';
    email.style.outline = '1px solid red'
    email.style.transitionDuration = '0.4s'
};
let addressError = () => {
    address.focus;
    address.style.border = '0';
    address.style.backgroundColor = '#ff000008';
    address.style.outline = '1px solid red'
    address.style.transitionDuration = '0.4s'
};
let cityError = () => {
    city.focus;
    city.style.border = '0';
    city.style.backgroundColor = '#ff000008';
    city.style.outline = '1px solid red'
    city.style.transitionDuration = '0.4s'
};
let postalCodeError = () => {
    postalCode.focus;
    postalCode.style.border = '0';
    postalCode.style.backgroundColor = '#ff000008';
    postalCode.style.outline = '1px solid red'
    postalCode.style.transitionDuration = '0.4s'
};

// VALIDACIONES
let nameValidation = () => {

    if (nombreUsuario.value.length == 0) {
        nameError();
        return false;
    } else if (nombreUsuario.value.length == 1) {
        nameError();
        return false;
    } else {
        nombreUsuario.focus;
        nombreUsuario.style.border = '0';
        nombreUsuario.style.backgroundColor = 'transparent';
        nombreUsuario.style.outline = '1px solid #00ffb1'
        nombreUsuario.style.transitionDuration = '0.4s'
        return true;
    }
};
let surnameValidation = () => {
    if (apellidoUsuario.value.length == 0) {
        surnameError();
        return false;
    }

    else if (apellidoUsuario.value.length == 1) {
        surnameError();
        return false;
    }

    else {
        apellidoUsuario.focus;
        apellidoUsuario.style.border = '0';
        apellidoUsuario.style.backgroundColor = 'transparent';
        apellidoUsuario.style.outline = '1px solid #00ffb1'
        apellidoUsuario.style.transitionDuration = '0.4s'
        return true;
    }
};
let emailValidation = () => {

    // VALIDANDO CORREO ELECTRONICO
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // SI EL USUARIO NO INTRODUCIÓ NADA
    if (email.value.length === 0) {
        emailError();
        return false;

        // SI EL USUARIO INTRODUCIÓ UN CORREO INCORRECTO
    } else if (!filter.test(email.value)) {
        emailError();
        return false;

        // SI EL CORREO ES CORRECTO
    } else {
        email.focus;
        email.style.border = '0';
        email.style.backgroundColor = 'transparent';
        email.style.outline = '1px solid #00ffb1'
        email.style.transitionDuration = '0.4s'
        return true;
    }

};
let addressValidation = () => {
    // SI EL USUARIO NO INTRODUCE NADA //
    if (address.value.length == 0) {
        addressError();
        return false;
    }
    else {
        address.focus;
        address.style.border = '0';
        address.style.backgroundColor = 'transparent';
        address.style.outline = '1px solid #00ffb1'
        address.style.transitionDuration = '0.4s'
        return true;
    }
};
let cityValidation = () => {
    if (city.value.length == 0) {
        cityError();
        return false;
    }

    else {
        city.focus;
        city.style.border = '0';
        city.style.backgroundColor = 'transparent';
        city.style.outline = '1px solid #00ffb1'
        city.style.transitionDuration = '0.4s'
        return true;
    }
};
let postalCodeValidation = () => {
    if ((postalCode.value.length == 0) || (postalCode.value.length <= 4)) {
        postalCodeError();
        return false;
    }

    else {
        postalCode.focus;
        postalCode.style.border = '0';
        postalCode.style.backgroundColor = 'transparent';
        postalCode.style.outline = '1px solid #00ffb1'
        postalCode.style.transitionDuration = '0.4s'
        return true;
    }
};



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


// VALIDANDO EL NOMBRE DE LA TARJETA
let validateCard = () => {

    let inputCardName = document.querySelector('#card-name')
    let filterName = (/[A-Za-z]/g);

    // SI EL USUARIO NO INTRODUCE NADA
    if (inputCardName.value.length == 0) {
        inputCardName.focus;
        inputCardName.style.border = '0';
        inputCardName.style.backgroundColor = '#ff000008';
        inputCardName.style.outline = '1px solid red'
        inputCardName.style.transitionDuration = '0.4s'

        return false;
    }

    // SI EL USUARIO INTRODUCE UN DATO INCORRECTO
    else if (!filterName.test(inputCardName.value)) {
        inputCardName.focus;
        inputCardName.style.border = '0';
        inputCardName.style.backgroundColor = '#ff000008';
        inputCardName.style.outline = '1px solid red'
        inputCardName.style.transitionDuration = '0.4s'
        inputCardName.value = '';

        return false;

    } else {
        inputCardName.focus;
        inputCardName.style.border = '0';
        inputCardName.style.backgroundColor = 'transparent';
        inputCardName.style.outline = '1px solid #00ffb1'
        inputCardName.style.transitionDuration = '0.4s'
        return true;
    }
}



// VALIDANDO EL NUMERO DE LA TARJETA
let validateCardNumber = () => {

    let filterCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/

    let cardNumberInput = document.querySelector('.cardNumberInput');

    if (cardNumberInput.value.length === 0) {

        cardNumberInput.focus;
        cardNumberInput.style.border = '0';
        cardNumberInput.style.backgroundColor = '#ff000008';
        cardNumberInput.style.outline = '1px solid red'
        cardNumberInput.style.transitionDuration = '0.4s';
        return false;

    } else if (cardNumberInput.value.length <= 15) {
        cardNumberInput.focus;
        cardNumberInput.style.border = '0';
        cardNumberInput.style.backgroundColor = '#ff000008';
        cardNumberInput.style.outline = '1px solid red'
        cardNumberInput.style.transitionDuration = '0.4s';
        return false;

    } else if (!filterCard.test(cardNumberInput.value)) {
        cardNumberInput.focus;
        cardNumberInput.style.border = '0';
        cardNumberInput.style.backgroundColor = '#ff000008';
        cardNumberInput.style.outline = '1px solid red'
        cardNumberInput.style.transitionDuration = '0.4s';
        return false;

    } else {
        cardNumberInput.focus;
        cardNumberInput.style.border = '0';
        cardNumberInput.style.backgroundColor = 'transparent';
        cardNumberInput.style.outline = '1px solid #00ffb1'
        cardNumberInput.style.transitionDuration = '0.4s'
        return true;
    }
}

// VALIDANDO EXPIRACION TARJETA
let validateCardDate = () => {
    let expiredDate = document.querySelector('.expiredNumber').value;
    let monthCard = expiredDate.slice(0, 2);
    let cardYear = expiredDate.slice(2, 4);

    // DEFINIENDO LA FECHA ACTUAL
    let today = new Date();
    let mes = (('0') + (today.getMonth() + 1));
    let año = today.getFullYear();
    let year2Digits = año.toString().substr(-2);

    console.log(mes)
    console.log(year2Digits)

    let inputcoso = document.querySelector('.expiredNumber');

    if (inputcoso.value.length === 0) {
        inputcoso.focus;
        inputcoso.style.border = '0';
        inputcoso.style.backgroundColor = '#ff000008';
        inputcoso.style.outline = '1px solid red'
        inputcoso.style.transitionDuration = '0.4s';
        return false;

    } else if ((cardYear < year2Digits) || (monthCard < mes)) {
        inputcoso.focus;
        inputcoso.style.border = '0';
        inputcoso.style.backgroundColor = '#ff000008';
        inputcoso.style.outline = '1px solid red'
        inputcoso.style.transitionDuration = '0.4s';
        inputcoso.value = '';
        return false;

    } else {
        inputcoso.focus;
        inputcoso.style.border = '0';
        inputcoso.style.backgroundColor = 'transparent';
        inputcoso.style.outline = '1px solid #00ffb1'
        inputcoso.style.transitionDuration = '0.4s'
        return true;
    }
}

// VALIDANDO CCV TARJETA
let validateCCV = () => {
    let ccvCard = document.querySelector('#ccvCard');

    if (ccvCard.value.length === 0) {
        ccvCard.focus;
        ccvCard.style.border = '0';
        ccvCard.style.backgroundColor = '#ff000008';
        ccvCard.style.outline = '1px solid red'
        ccvCard.style.transitionDuration = '0.4s';
        return false;

    } else {
        ccvCard.focus;
        ccvCard.style.border = '0';
        ccvCard.style.backgroundColor = 'transparent';
        ccvCard.style.outline = '1px solid #00ffb1'
        ccvCard.style.transitionDuration = '0.4s'
        return true;
    }
}

comprar.onclick = () => {
    validateCard();
    validateCardNumber();
    validateCardDate();
    validateCCV();

    if ((((!validateCard()) || (!validateCardNumber())) || (!validateCardDate())) || (!validateCCV())) {

        Toastify({
            text: "Los datos introducidos son incorrectos",
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
    }


    // //
    // //
    else if (((((validateCard()) && (validateCardNumber())) && (validateCardDate())) && (validateCCV()))) {

        setTimeout(payCheck = () => {
            // PANTALLA DE PROCESO DE PAGO Y CHECK
            let checkOutAnimation = document.querySelector('.datosCrediticios');

            let checkOutText = document.querySelector('#procesandoPago')
    
            let spinner = document.querySelector('.spinner');
            
            let imgSuccess = document.querySelector('#successImg')

            let processPay = document.querySelector('#processPay')

            let linkHome = document.querySelector('#linkHome')

            checkOutAnimation.style.visibility = 'visible';
    
            spinner.style.margin = '0 auto'
            spinner.style.marginTop = '-350px'
            setTimeout(() => {
                checkOutAnimation.style.visibility = "hidden";
            }, 100);
            
            // CONVIRTIENDO LA PRIMERA LETRA DEL NOMBRE EN MAYUSCULA
            nombrePay2 = nombrePay.charAt(0).toUpperCase() + nombrePay.slice(1);
            
            setTimeout(() => {
                spinner.style.visibility = "visible";
                spinner.style.display = 'block'
                checkOutText.innerText = 'Estamos procesando el pago,\n aguarda un segundo.';
                checkOutText.style.width = '100%'
                checkOutText.style.marginTop = '1rem'
                checkOutText.style.visibility = 'visible'
                checkOutText.style.fontSize = '17px'
                checkOutText.style.color = '#000'
            }, 500);

            setTimeout(() => {
                processPay.style.marginTop = '-20rem'
                checkOutAnimation.style.visibility = 'hidden';
                imgSuccess.style.display = 'block'
                imgSuccess.style.visibility = 'visible'
            }, 5000);

            setTimeout(() => {
                checkOutAnimation.style.visibility = "hidden";
                spinner.style.visibility = "hidden";
                spinner.style.display = 'none'
                checkOutText.innerText = '¡El pago ha sido exitoso!\nPuedes encontrar los detalles del curso en tu correo electrónico. ';
                checkOutText.style.visibility = 'visible'
                checkOutText.style.fontSize = '17px'
                linkHome.style.visibility = 'visible'
                linkHome.style.display = 'block'
            }, 5000);
        },1000)
    }
};