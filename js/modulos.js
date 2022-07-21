// MODULOS CURSOS PERSONALIZADOS //

//  //

// PARA CALCULAR EL VALOR DE LOS ELEMENTOS ELEGIDOS

function calculoOpciones() {

    let valorSelect1 = parseInt(document.getElementById("sel1").value);
    let valorSelect2 = parseInt(document.getElementById("sel2").value);
    let valorSelect3 = parseInt(document.getElementById("sel3").value);

    let calculoTotal = (valorSelect1 + valorSelect2 + valorSelect3);

    let botonCalculo = document.getElementById("btnCalc");

    botonCalculo.innerText = "El valor total de tu curso personalizado es " + "$" + calculoTotal;
};

document.getElementById("sel1").addEventListener("change", calculoOpciones);
document.getElementById("sel2").addEventListener("change", calculoOpciones);
document.getElementById("sel3").addEventListener("change", calculoOpciones);


// //


// * PARA QUE TE APAREZCA UN DOCUMENT.WRITE INDICANDOTE TUS ELECCIONES CUANDO LE DES AL BOTON DE CONTINUAR CON LA COMPRA * //

// SIGUE EN PROCESO ESTA PARTE, POR AHORA SOLO TE INDICA SOBRE LA PRIMERA ELECCION :'( //

function contar() {
    n = 0;
    // declarar la variable que guarde los elementos de la lista
    let lista = document.getElementById("sel1");

    for (i = 0; i < lista.options.length; i++) {
        if (lista.options[i].selected) {

            // calculo.innerText = lista;
            alert(`Los datos introducidos de tu curso personalizado son los siguientes: ${ lista.options[i].innerHTML}`)
            n++;
        }
    }
}

// //
