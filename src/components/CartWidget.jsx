import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
        <div>
            <Button variant="primary" id="botonCarrito" data-bs-toggle="modal" data-bs-target="#modal-carrito">
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                <span id="contadorCarrito">0</span>
            </Button>
        </div>
    )
}

export default CartWidget
