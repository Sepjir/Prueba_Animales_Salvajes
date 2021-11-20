//Importacion de Clases al main
import Leon from "./leon.js";
import Lobo from "./lobo.js";
import Oso from "./oso.js";
import Serpiente from "./serpiente.js";
import Aguila from "./aguila.js";


//elementos del DOM
const select = document.querySelector("#animal")
const edad = document.querySelector("#edad")
let comentarios = document.getElementById("comentarios")
const btn = document.querySelector("#btnRegistrar")
let imagenAnimal = document.querySelector("#preview")
const animales = document.getElementById("Animales")

//funcion con async-await
 const funcionAnimalImg = async (nombre) => {

//fetch al json de animales con sus datos     
let animalesJson = await fetch('/animales.json')
let format = await animalesJson.json()
let arr = format.animales

// Elemento seleccionado en el Select de Animal
let selectElement = nombre.target
let value = selectElement.value

// Enviando la imagen del animal al preview
    if (value == arr[0].name) {
        imagenAnimal.innerHTML = `<img src="assets/imgs/${arr[0].imagen}" alt="${arr[0].name}" class="rounded mx-auto d-block" height = "200">`
    }
    if (value == arr[1].name) {
        imagenAnimal.innerHTML = `<img src="assets/imgs/${arr[1].imagen}" alt="${arr[1].name}" class="rounded mx-auto d-block" height = "200">`
    }
    if (value == arr[2].name) {
        imagenAnimal.innerHTML = `<img src="assets/imgs/${arr[2].imagen}" alt="${arr[2].name}" class="rounded mx-auto d-block" height ="200">`
    }
    if (value == arr[3].name) {
        imagenAnimal.innerHTML = `<img src="assets/imgs/${arr[3].imagen}" alt="${arr[3].name}" class="rounded mx-auto d-block" height = "200">`
    }
    if (value == arr[4].name) {
        imagenAnimal.innerHTML = `<img src="assets/imgs/${arr[4].imagen}" alt="${arr[4].name}" class="col-12 rounded mx-auto d-block" height = "200">`
    }
}

//Funcion que valida datos de formulario, instancia, imprime los datos en el DOM y limpia datos de formulario a través de un evento Click
const agregaDatos = (e) => {
    e.preventDefault()
    
//Datos seleccionados del formulario
    let animal = select.options[select.selectedIndex].value
    let edadA = edad.options[edad.selectedIndex].value

// Validando datos del formulario
    if (animal == "Seleccione un animal" || edadA == "Seleccione un rango de años" || comentarios.value == "") {
        return alert("Ingrese todos los datos del formulario")
    }

    let imgForm = document.querySelector("#preview img").getAttribute("src")
    
// Instanciando y agregando datos a la función que imprime la tarjeta y el Modal
    if (animal == "Leon") {
        let l1 = new Leon (animal,edadA,imgForm,comentarios.value,"Rugido.mp3")
        imprimirModal(0, edadA, comentarios.value,l1.sonido)
    }
    if (animal == "Lobo") {
        let lo1 = new Lobo (animal,edadA,imgForm,comentarios.value,"Aullido.mp3")
        imprimirModal(1, edadA, comentarios.value,lo1.sonido)
    }
    if (animal == "Oso") {
        let o1 = new Oso (animal,edadA,imgForm,comentarios.value,"Gruñido.mp3")
        imprimirModal(2, edadA, comentarios.value,o1.sonido)
    }
    if (animal == "Serpiente") {
        let s1 = new Serpiente (animal,edadA,imgForm,comentarios.value,"Siseo.mp3")
        imprimirModal(3, edadA, comentarios.value,s1.sonido)
    }
    if (animal == "Aguila") {
        let a1 = new Aguila (animal,edadA,imgForm,comentarios.value,"Chillido.mp3")
        imprimirModal(4, edadA, comentarios.value,a1.sonido)
    }

// Ejecutando función que limpia los parametros del formulario
    funcionReset()

    

}

//función que deja en blanco y reselecciona a su forma original los parametros del formulario
const funcionReset = () => {
    document.getElementById("comentarios").value = " "
    imagenAnimal.innerHTML = ` `
    select.getElementsByTagName('option')[0].selected = 'selected'
    edad.getElementsByTagName('option')[0].selected = 'selected'
}

//Función que imprime en el HTML la tarjeta del animal, el modal y la reproducción del audio de dicho animal a través de un evento click
async function imprimirModal (index, edad, comentarios, sonido) {

//Tomando datos con fetch de animales.json
    let animalesJson = await fetch('/animales.json')
    let format = await animalesJson.json()
    let arr = format.animales

//Formato de la tarjeta y el modal juntos para enviar al DOM
    let tarjetaAnimal = `<div class=" mt-2 mx-2 card text-light bg-secondary" style="width: 18rem;">
                            <img data-toggle="modal" data-target="#exampleModal${edad}${comentarios}${arr[index].name}" id="imagenAnimal" src="assets/imgs/${arr[index].imagen}" class="card-img-top" alt="${arr[index].name}">
                                <div class="card-body">
                                    <input class = "audioAnimal${arr[index].name}" type="image" src="assets/imgs/audio.svg" width="30px" height="30px" alt="icono">
                                    <audio type ="audio/mp3" id="${arr[index].name}" src="assets/sounds/${sonido}"></audio>
                                </div>
                        </div>
                                <div class="modal fade" id="exampleModal${edad}${comentarios}${arr[index].name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog w-25">
                            <div class="modal-content text-light bg-dark">
                                <div class="modal-header text-center">
                                <img src="assets/imgs/${arr[index].imagen}" class="img-fluid rounded mx-auto d-block" alt="${arr[index].name}">
                                </div>
                                <div class="modal-body">
                                <div class="h5 font-weight-bold">${edad}</div>
                                <div class="font-weight-bold">Comentarios:</div>
                                <div class="modal-body">${comentarios}</div>
                                </div>
                            </div>
                            </div>`

//Creando el div que dibujará la tarjeta y el modal en el DOM                            
let divi = document.createElement("div")
divi.innerHTML = tarjetaAnimal
animales.appendChild(divi)

//Capturando el botón de audio de los animales
let btnAudioAnimal = document.querySelector(".audioAnimal" + arr[index].name)

//Funcion que permite escuchar el sonido de los animales mediante un evento de Click
function reproducirSonido(e) {
    e.preventDefault()


    if (arr[index].name == "Leon") {
        document.getElementById("Leon").play()
    }
    if (arr[index].name == "Lobo") {
        document.getElementById("Lobo").play()
    }
    if (arr[index].name == "Oso") {
        document.getElementById("Oso").play()
    }
    if (arr[index].name == "Serpiente") {
        document.getElementById("Serpiente").play()
    }
    if (arr[index].name == "Aguila") {
        document.getElementById("Aguila").play()
    }
}

btnAudioAnimal.addEventListener("click", reproducirSonido)
                            
}


//Eventos de formulario, change y click
select.addEventListener("change", funcionAnimalImg)
btn.addEventListener("click", agregaDatos)



