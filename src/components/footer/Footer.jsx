import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  //ENVIOS
  const [showUno, setShowUno] = useState(false);

  const handleClose = () => setShowUno(false);
  const handleShow = () => setShowUno(true);

  //DEVOLUCIONES
  const [showDos, setShowDos] = useState(false);

  const hanClose = () => setShowDos(false);
  const hanShow = () => setShowDos(true);

  return (
    <div className="phantom">
      <div className="footer">
        <div>
          <button className="btn11" onClick={handleShow}>
            ENVÍOS
          </button>

          <Modal show={showUno} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Envíos a la República Mexicana.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Todos los pedidos se envían a través de Fedex y se envían dentro
              de las 48 horas posteriores a la recepción del pedido, a menos que
              se especifique lo contrario. Se le enviará una confirmación de
              envío y un número de seguimiento tan pronto como se lo enviemos.
              Cualquier pedido realizado el fin de semana se enviará el lunes.
              Si su pedido incluye libretas personalizadas, agendas u otros
              productos que requieras personalización el tiempo de producción es
              de 3 a 5 días hábiles (sin contar fines de semana) y se enviará
              todo el pedido junto.
              <br />
              <strong>Envíos en Chihuahua</strong>
              <br />
              Todos los pedidos se envían a través de un proveedor local y se
              envían 48 horas posteriores a la recepción, a menos que se
              especifique lo contrario. Se le enviará una confirmación de envío
              tan pronto como se lo enviemos. Cualquier pedido realizado el fin
              de semana se enviará el lunes. Si su pedido incluye libretas
              personalizadas, agendas u otros productos que requieras
              personalización el tiempo de producción es de 3 a 5 días hábiles
              (sin contar fines de semana) y se enviará todo el pedido junto.
            </Modal.Body>
            <Modal.Footer>
              <button className="botonBanner" onClick={handleClose}>
                Entendido
              </button>
            </Modal.Footer>
          </Modal>

          <button className="btn11" onClick={hanShow}>
            DEVOLUCIONES
          </button>

          <Modal show={showDos} onHide={hanClose}>
            <Modal.Header closeButton>
              <Modal.Title>Devoluciones.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Todos los artículos son de venta final, aunque ocasionalmente se
              pueden hacer excepciones. Envíe un correo electrónico a
              hola@birbo.mx si tiene un problema con su pedido o través de
              nuestras redes sociales. Para hacer una devolución del pedido y el
              reintegro del costo es necesario que los productos estén sin haber
              sido usados.
            </Modal.Body>
            <Modal.Footer>
              <button className="botonBanner" onClick={hanClose}>
                Entendido
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Link to="/">
            <FaFacebook />
          </Link>

          <Link to="/">
            <FaInstagram />
          </Link>

          <Link to="/">
            <FaPinterest />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
