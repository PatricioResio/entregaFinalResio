let listaUsuarios = [
    {
        nombreUsuario : "Javier32",
        nombre : "javi",
        apellido : "Jav",
        contraseniaUsuario : 1234,
        contraseniaUsuario2 : 1234,
        email : "jav@gmail.com",
        idUsuario : 0
    },
    {
        nombreUsuario : "usu123",
        nombre : "Usuario",
        apellido : "User",
        contraseniaUsuario : "usuario",
        contraseniaUsuario2 : "usuario",
        email:"usuario@gmail.com",
        idUsuario : 1
    }
];

const botonSubmit = document.getElementById("btnSubmit");

let idUsuario = 0;

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



export {listaUsuarios}