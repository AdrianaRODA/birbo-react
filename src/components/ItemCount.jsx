import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({stock, nombre, precio, initial}) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onAdd = () => {
    console.log(
      `Se ha agregado con exito ${count} ${nombre} con un valor de $${precio}`
    );
  };

  return (
    <>
      <div className="contador">
        <Button variant="dark" onClick={restar}>
          <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
        </Button>
        <div className="countNumber">{count}</div>
        <Button variant="dark" onClick={sumar}>
          <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        </Button>
      </div>
      <div className="botonAgregar">
        <button className="btn11" onClick={onAdd}>
          <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Agregar al
          carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
