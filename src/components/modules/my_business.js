import React from 'react';

const Mybusiness = () => (
  <div>
    <h1>My business</h1>
    <br />
    <form className="form" noValidate>
      <div className="form-inputs">
        <h2 className="input_label">Nombre del Negocio</h2>
        <input
          className="form-input"
          placeholder="Negocio"
        />
      </div>
      <div className="form-inputs">
        <h2 className="input_label">Whatsapp para Pedidos</h2>
        <input
          className="form-input"
          placeholder="Pedidos"
        />
      </div>
      <div className="form-inputs">
        <h2 className="input_label">Teléfono del Local</h2>
        <input
          className="form-input"
          placeholder="Telefono Local"
        />
      </div>
      <div className="form-inputs">
        <h2 className="input_label">Tipo de Negocio</h2>
        <input
          className="form-input"
          placeholder="Tipo de Negocio"
        />
      </div>
      <div className="form-inputs">
        <h2 className="input_label">Dirección del Restaurante</h2>
        <input
          className="form-input"
          placeholder="Dirección"
        />
      </div>
      <button type="submit">
        Actualizar
      </button>
    </form>
  </div>
);
export default Mybusiness;
