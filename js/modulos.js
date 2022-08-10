// MODULOS CURSOS PERSONALIZADOS //

//  //


// CALCULAR EL VALOR DE LOS CURSOS

let calculoTotal = '';


function calculoOpciones() {

    let valorSelect3 = parseInt(document.querySelector(".sel3").value);
    let valorSelect2 = parseInt(document.querySelector(".sel2").value);
    let valorSelect1 = parseInt(document.querySelector(".sel1").value);

    let calculoTotal = (valorSelect1 + valorSelect2 + valorSelect3);

    let precioCurso = localStorage.setItem('precioCurso', calculoTotal);
    
    // TEXTO PARA INDICAR PRECIO
    let textoPrecio = document.querySelector("#texto-valor")

    // BOTON DONDE SE MUESTRA EL PRECIO
    let botonCalculo = document.getElementById("btnCalc");

    botonCalculo.innerText = "$" + calculoTotal + " " + "U$S";

    let continuarCompra = document.querySelector('.continuarCompra')


    //* PARA QUE NO SE MUESTRE EL NaN MIENTRAS NO ESTEN TODOS LOS OPTIONS SELECCIONADOS *//
    isNaN(calculoTotal) && (botonCalculo.innerText = '')

    isNaN(calculoTotal) ? continuarCompra.style.display = 'none' : continuarCompra.style.display = 'block'
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
let moduloTres = document.querySelector(".sel3");
let cargaHoraria = document.querySelector(".sel4");

// BUSCO LOS VALORES DEL MODULO 1
moduloUno = () => {
    // PRECIO
    let value = document.querySelector(".sel1").value;


    // TEXTO
    let combo = document.querySelector(".sel1");
    let selected = combo.options[combo.selectedIndex].text;

    // COMBINANDO DATOS
    let datosTotales1 = (`${selected} $${value}`)
    return datosTotales1;
}

// BUSCO LOS VALORES DEL MODULO 
moduloDos = () => {

    // PRECIO
    let value = document.querySelector(".sel2").value;

    // TEXTO
    let combo = document.querySelector(".sel2");
    let selected = combo.options[combo.selectedIndex].text;

    // COMBINANDO DATOS
    let datosTotales2 = (`${selected} $${value}`)
    return datosTotales2;
}

// BUSCO LOS VALORES DEL MODULO 3
moduloTres = () => {
    // PRECIO
    let value = document.querySelector(".sel3").value;

    // TEXTO
    let combo = document.querySelector(".sel3");
    let selected = combo.options[combo.selectedIndex].text;

    // COMBINANDO DATOS
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
let tituloDatos = document.querySelector("#tituloCursoPersonalizado");
// let datosCurso = document.querySelector("#datosCurso");

let botonDatos = document.querySelector(".continuarCompra");
// //

// //

// //

// * GLOBALIZO LAS VARIABLES DE LOS MODULOS PARA DESPUES CAMBIARLAS EN LA FUNCION "botonDatos.onclick" Y QUE SE SELECCIONE EL VALOR QUE ELIGIÓ EL USUARIO. * //

let modulo1 = '';
let modulo2 = '';
let modulo3 = '';
let modulo4 = '';


botonDatos.onclick = () => {

    // CAMBIANDO LOS VALORES DE LAS VARIABLES "MODULO" //
    modulo1 = localStorage.setItem('M1', (moduloUno()));
    modulo2 = localStorage.setItem('M2', (moduloDos()));
    modulo3 = localStorage.setItem('M3', (moduloTres()));
    modulo4 = localStorage.setItem('CH', (cargaHoraria()));
    
    // datosCurso.innerText = `\n` + (moduloUno() + `\n` + `\n` + (moduloDos()) + `\n` + `\n` + (moduloTres()) + `\n` + `\n` + (cargaHoraria()));
}
