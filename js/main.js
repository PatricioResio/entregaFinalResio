let listaUsuarios = []
let usuario = document.getElementById("inputUsuario");
let contrasenia = document.getElementById("inputContrasenia");
const botonIngreso = document.getElementById("btn0");
const botonSubmit = document.getElementById("btnSubmit");
let validacionDatos = false;
let idUsuario = 0;

const fetchUsuarios = async () => {
    await fetch("../JSON/usuarios.json")
    .then((Response) => Response.json())
    .then((data)=>{ listaUsuarios.push(data);      
    })
    .catch((error) =>
    swal.fire (
        'error al cargar los productos',
        '',
        'error'
    )
    )
};
fetchUsuarios(listaUsuarios);
console.log(listaUsuarios)

const form = document.getElementById('formulario');
form.addEventListener('submit', (e) => {

    e.preventDefault();

    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const contraseniaUsuario = document.getElementById("contraseniaForm").value;
    const contraseniaUsuario2 = document.getElementById("contraseniaForm2").value;

    const datos = {
        nombreUsuario,
        nombre,
        apellido,
        contraseniaUsuario,
        contraseniaUsuario2,
        email,
        idUsuario
    }
    const guardarUsuario = (datos) => {
        listaUsuarios.push( datos);
        idUsuario++
    }
guardarUsuario(datos)
    
    form.reset();

});


botonIngreso.onclick = (usuario, contrasenia) =>{
  validarUsuario(usuario, contrasenia);
};
const validarUsuario = () => {
    if(listaUsuarios.nombreUsuario.includes(usuario) && (listaUsuarios.contraseniaUsuario.includes(contrasenia))){
        swal.fire (
            'bienvenido',
            '',
            'succes'
        )
}else{
        swal.fire (
            'error',
            'usuario u contraseña incorrecta',
            'intentelo de nuevo'
        )
}}