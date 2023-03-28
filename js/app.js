let botnComenz = document.getElementById("botnComenz")
let containJuego = document.getElementById("containJuego")
let adivinarNumero = document.getElementById("adivinarNumero")
let adivinarBoton = document.getElementById("adivinarBoton")
let numeroUsuario

botnComenz.addEventListener("click", Comenzar)

function Comenzar(){
    numeroUsuario = Math.floor(Math.random()* 100) + 1
    containJuego.classList.remove("d-none")
    botnComenz.classList.add("d-none")
}

adivinarBoton.addEventListener("click", Chequear)

function Chequear(){
    let Interaccion = parseInt(adivinarNumero.value)

    if(Interaccion === numeroUsuario){
        alert("Felicidades, ha adivinado el numero magico correctamente")
        location.reload()
    } else if(Interaccion > numeroUsuario){
        alert("El numero ingresado es mayor que el numero magico")
    } else{
        alert("El numero ingresado es menor que el numero magico")
    }
}