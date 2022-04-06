import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({max, min= 1, count, setCount}) => {
  

  const sumar = (e) => {
    count < max && setCount (count + 1)
  };

  const restar = () => {
    count > min && setCount (count - 1)
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
      
    </>
  );
};

export default ItemCount;
