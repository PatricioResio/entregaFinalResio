
const carrito = [];

function agregarProductosAlCarrito(id){
    
    let producto = productos.find(producto => producto.id === id);

    let productoEnCarrito = carrito.find(producto => producto.id === id);

    if(productoEnCarrito){
        
        productoEnCarrito.cantidad++;

        swal.fire (
            'La cantidad del producto fue modificada',
            'Quieres agregar otro?',
            'warning'
        )
    }else {
        
        producto.cantidad = 1;

        carrito.push(producto);

        swal.fire(
            'El producto fue agregado correctamente',
            'Termina tu compra en el carrito!',
            'success'
        )
    }

    renderizarCarrito();
    calcularTotal();
}


function renderizarCarrito(){

    const d = document;
    let carritoHTML = d.querySelector('#carrito');

    carritoHTML.innerHTML = '';

    carrito.forEach((p, index)=> {
    
        let producto = document.createElement('div');
        producto.classList.add('col-12');
        producto.classList.add('col-md-4');
        producto.classList.add('mb-5');
        producto.classList.add('d-flex');
        producto.classList.add('justify-content-center');

        producto.innerHTML = `
        
        <div class="card text-dark" style="width: 10rem; heigth: 13rem; background:rgba(52,91,99,1); border-radius: 20px;
        border: 4px solid rgba(5,113,135,1);">
            <img class="card-img-top-center" src="${p.img}" alt="Card image cap" style="heigth: 200px; margin: auto;">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p>${p.precio}$</p>
                <p>Cantidad: ${p.cantidad}</p>
                <button class="btn btn-danger">Eliminar</button>
            </div>
        </div>
        `

        producto.querySelector('button').addEventListener('click', ()=>{
        
            eliminarProductoDelCarrito(index)
        })

        carritoHTML.appendChild(producto);
    })
    calcularTotal();
}

function eliminarProductoDelCarrito(indice){

    carrito[indice].cantidad--;
    swal.fire(
        `La cantidad del producto ${carrito[indice].nombre} disminuyo`,
        '',
        'success'
    );

    if(carrito[indice].cantidad === 0){

        carrito.splice(indice,1);
        swal.fire (
            'El producto fue eliminado correctamente',
            '',
            'success'
        )
    }

    renderizarCarrito();
    calcularTotal()
}

function calcularTotal(){

    let total = 0;

    carrito.forEach((p)=>{
    
        total += p.precio * p.cantidad;
    })

    console.log(total);

    const t = document.getElementById('total');

    t.innerHTML = `<h5 style="color:#a0bec3; ">Total ${total}$</h5> `

}
export {agregarProductosAlCarrito};