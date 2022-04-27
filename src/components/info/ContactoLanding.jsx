import React from 'react'

const ContactoLanding = () => {
    return (
        <section className="phantom" id="contacto">
      <iframe
        title="Direccion"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.6153669458918!2d-106.07661496358082!3d28.637019173430197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea434d9577646f%3A0x7c01fdcfad0b69e7!2sMetropolitan%20Cathedral%20of%20Chihuahua!5e0!3m2!1sen!2smx!4v1625632645061!5m2!1sen!2smx"
        width="60%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <div>
        <h2>¿Tienes dudas? Contáctanos</h2>
        <h3>Ubicados en la ciudad de Chihuahua</h3>

        <form id="formText">
          <label for="nombre">Nombre:</label>
          <input type="text" name="nombre" id="nombre" />

          <br />

          <label for="mensaje">Mensaje:</label>

          <br />
          <textarea name="mensaje" id="mensaje" cols="6" rows="8"></textarea>

          <br />
          <button type="submit" class="btn11">
            Enviar
          </button>
        </form>
      </div>
    </section>
    )
}

export default ContactoLanding
