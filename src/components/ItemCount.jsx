import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function ItemCount() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Cantidad:</h3>
      <div className="contador">
        <Button variant="dark" onClick={() => setCount(count - 1)}>
          <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
        </Button>
        <div className="countNumber">{count}</div>
        <Button variant="dark" onClick={() => setCount(count + 1)}>
          <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
}
