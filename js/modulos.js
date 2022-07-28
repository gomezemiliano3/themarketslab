// MODULOS CURSOS PERSONALIZADOS //

//  //

// PARA CALCULAR EL VALOR DE LOS ELEMENTOS ELEGIDOS

function calculoOpciones() {

    let valorSelect3 = parseInt(document.querySelector(".sel3").value);
    let valorSelect2 = parseInt(document.querySelector(".sel2").value);
    let valorSelect1 = parseInt(document.querySelector(".sel1").value);

    let calculoTotal = (valorSelect1 + valorSelect2 + valorSelect3);

    // TEXTO PARA INDICAR PRECIO
    let textoPrecio = document.querySelector("#texto-valor")

    // BOTON DONDE SE MUESTRA EL PRECIO
    let botonCalculo = document.getElementById("btnCalc");

    botonCalculo.innerText = "$" + calculoTotal + " " + "U$S";


    //* PARA QUE NO SE MUESTRE EL NaN MIENTRAS NO ESTEN TODOS LOS OPTIONS SELECCIONADOS *//

    if (isNaN(calculoTotal)) {
        botonCalculo.innerText = "";
        textoPrecio.innerText = "";
    }
}

document.querySelector(".sel1").addEventListener("change", calculoOpciones);
document.querySelector(".sel2").addEventListener("change", calculoOpciones);
document.querySelector(".sel3").addEventListener("change", calculoOpciones);

// //

// //

// //

// DEFINO LOS VALORES PARA DESPUES MOSTRARLAS EN LA PAGINA //

let moduloUno = document.querySelector(".sel1");
let moduloDos = document.querySelector(".sel2");
let moduloTres = document.querySelector(".sel3")
let cargaHoraria = document.querySelector(".sel4")


// BUSCO LOS VALORES DEL MODULO 1
moduloUno = () => {

    // PRECIO
    let value = document.querySelector(".sel1").value;

    // TEXTO
    let combo = document.querySelector(".sel1");
    let selected = combo.options[combo.selectedIndex].text;

    let datosTotales1 = (`${selected} ${value}`)
    return datosTotales1;
}


// BUSCO LOS VALORES DEL MODULO 
moduloDos = () => {

    // PRECIO
    let value = document.querySelector(".sel2").value;

    // TEXTO
    let combo = document.querySelector(".sel2");
    let selected = combo.options[combo.selectedIndex].text;

    let datosTotales2 = (`${selected} ${value}`)
    return datosTotales2;
}


// BUSCO LOS VALORES DEL MODULO 3
moduloTres = () => {

    // PRECIO
    let value = document.querySelector(".sel3").value;

    // TEXTO
    let combo = document.querySelector(".sel3");
    let selected = combo.options[combo.selectedIndex].text;

    let datosTotales3 = (`${selected}  $${value}`)
    return datosTotales3;
}


// BUSCO LA CARGA HORARIA
cargaHoraria = () => {

    // TEXTO
    let combo = document.querySelector(".sel4");
    let selected = combo.options[combo.selectedIndex].text;

    let cargaHoraria = (`${selected}`)
    return cargaHoraria;
}

// DEFINO LAS VARIABLES DE LOS ELEMENTOS QUE VOY A MOSTRAR
let botonDatos = document.querySelector("#btn");
let tituloDatos = document.querySelector("#tituloCursoPersonalizado");
let datosCurso = document.querySelector("#datosCurso");


// CUANDO LE DOY CLICK AL BOTON, SE MUESTRAN LAS OPCIONES ELEGIDAS
botonDatos.onclick = () => {
    tituloDatos.innerText = "Los datos de tu curso son los siguientes:";

    datosCurso.innerText = `\n` + (moduloUno() +`\n` + `\n` + (moduloDos()) +`\n`+ `\n` +(moduloTres())+`\n`+ `\n` + (cargaHoraria()));
}