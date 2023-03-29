let containJuego = document.getElementById("containJuego")
let adivinarNumero = document.getElementById("adivinarNumero")
let numeroUsuario


function Comenzar(){
    numeroUsuario = Math.floor(Math.random()* 100) + 1
    containJuego.classList.remove("d-none")
    botnComenz.classList.add("d-none")
}

function Chequear(){
    let interaccionUsuario = parseInt(adivinarNumero.value)

    if(interaccionUsuario === numeroUsuario){
        alert("Felicidades, ha adivinado el numero magico correctamente")
        location.reload()
    } else if(interaccionUsuario > numeroUsuario){
        alert("El numero ingresado es mayor que el numero magico")
    } else{
        alert("El numero ingresado es menor que el numero magico")
    }
}