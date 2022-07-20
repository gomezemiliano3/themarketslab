// Primer módulo Cursos Personalizados

function calculoOpciones() {

    let valorSelect1 = document.getElementById("primerModulo").value;

    let valorSelect2 = document.getElementById("segundoModulo").value;

    let botonCalculo = document.getElementById("btnCalc");

    if (valorSelect1 == '' || valorSelect2 == '') {
        botonCalculo.innerText = "Debes seleccionar una opcion!"

    } else {
        // botonCalculo.innerText = "el valor es de" + valorSelect1 + valorSelect2;

        // console.log(`el valor es de ${valorSelect1} + ${valorSelect2}`);
    }

    document.getElementById("sel1").addEventListener("change", calculoOpciones);
    document.getElementById("sel2").addEventListener("change", calculoOpciones);

}