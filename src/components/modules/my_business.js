import React from 'react';

const Mybusiness = () => (
  <div>
    <h1>My business</h1>
    <br />
    <form className="form" noValidate>
      <div className="form-inputs">
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Edita tu correo"
        />
      </div>
      <div className="form-inputs">
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Edita tu contraseña"
        />
      </div>
      <button type="submit">
        Actualizar
      </button>
    </form>
  </div>

);
export default Mybusiness;
