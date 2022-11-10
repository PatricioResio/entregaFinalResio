import {listaUsuarios} from "../js/main.js"
let validacionDatos = false;
const botonIngreso = document.getElementById("btn0");

const formIngreso = document.getElementById("formIngreso")
formIngreso.addEventListener('submit', (e) => {

    e.preventDefault();

    
    let usuario = document.getElementById("inputUsuario");
    let contrasenia = document.getElementById("inputContrasenia");


const validacionIngreso = listaUsuarios.forEach((nombreUsuario) => {
    if (nombreUsuario.value.includes(usuario.value) && (nombreUsuario.includes(contrasenia.value))){
        validacionDatos = true;

    } else{
        swal.fire(
            'error',
            '',
            ''
        )
    }
    
})

validacionIngreso(usuario, contrasenia);

const retornoIngreso = () => {
    if (validacionDatos){
        swal.fire(
            'succes',
            '',
            ''
        )
    } else{
        swal.fire(
            'error',
            '',
            ''
        )
    }
}
retornoIngreso(validacionDatos);

usuario.reset();
contrasenia.reset();
});