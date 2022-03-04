import React from 'react'


const CartWidget = () => {
    return (
        <div>
            <button variant="primary" id="botonCarrito" data-bs-toggle="modal" data-bs-target="#modal-carrito"><i  class="fas fa-shopping-cart"></i><span id="contadorCarrito">0</span></button>
        </div>
    )
}

export default CartWidget
