import React from 'react'
import Card from './Card'


const ItemListContainer = (props) => {
    return (
        <div>
            <h1>{props.bienvenida}</h1>
            <Card />
        </div>
    )
}

export default ItemListContainer
