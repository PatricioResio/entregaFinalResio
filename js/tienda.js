import {agregarProductosAlCarrito} from "../js/apps.js";
let productosGeneral = [];
const fetchProductos = async () => {
    await fetch("../JSON/productos.json")
    .then((Response) => Response.json())
    .then((data)=>{ productosGeneral = [...data]; renderizarProductos(productosGeneral);      
    })
    .catch((error) =>
    swal.fire (
        'error al cargar los productos',
        '',
        'error'
    )
    )
};
fetchProductos();
const renderizarProductos = () => {
    const tienda = document.getElementById('tienda');
    tienda.innerHTML = '';
    productosGeneral.forEach((e) => {

        const div = document.createElement('div');

        div.classList.add('col-12');
        div.classList.add('col-md-4');
        div.classList.add('mb-5');
        div.classList.add('d-flex');
        div.classList.add('justify-content-center');

        div.innerHTML = `
            <div class="card" style="width: 15rem; heigth: 18rem; background:rgba(52,91,99,1); border-radius: 20px;
            border: 4px solid rgba(5,113,135,1);">
            <img class="card-img-top" src="${e.img}" alt="Card image cap"  style="height: 200px; width:100%;">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text"></p>
                <p>${e.precio}$</p>
                <button id="${e.id}" style="height:2em ;width:9em; outline:none;border:solid; background:rgba(5,113,135,1); color: #a0bec3; border-radius: 80px; border-color:#071a4b; font-weight: 600; margin-left: 1px; margin-right:1px;">Añadir al carrito</button>
            </div>
            </div>
        `;
        div.querySelector('button').addEventListener('click', () => {
            agregarProductosAlCarrito(e.id);

        });

        tienda.appendChild(div);
    })

};

renderizarProductos(fetchProductos());

export {productosGeneral};
