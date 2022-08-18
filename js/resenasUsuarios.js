// RESEÑAS USUARIOS JS 

const reseña = document.querySelectorAll('.quote')

const nombre = document.querySelector('.name3')

let boton = document.getElementById("btnFetch")

const contenedor = document.querySelector('#contenedorFetch');



const obtenerResenas = () =>{
    fetch("../js/resenas.json")
        .then(response => response.json())

        .then(result => {
            result.forEach(persona => {
                contenedor.innerHTML +=
                `
                <div>
                <h3>${persona.nombre}</h3>
                <p>${persona.reseña}anio</p>
                </div>
                `
            })
        })
        .catch(error => console.log(error))
}

boton.onclick = () => {
    obtenerResenas();
}
