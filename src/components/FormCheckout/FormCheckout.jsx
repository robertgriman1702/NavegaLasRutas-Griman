import React from 'react';
import './formCheckout.css';

const FormCheckout = ({ dataform, sendOrder, handleChange }) => {
  return (
    <div className="form-main-container"> 
      <div className="form-container">
        <h2 className="form-title">Finalizar Pedido</h2>
        <form onSubmit={sendOrder} className="form">
          <div className="form-group">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              name="fullname"
              value={dataform.fullname}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Ej: Juan Pérez"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={dataform.email}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Ej: ejemplo@correo.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Número de teléfono</label>
            <input
              type="tel"
              name="phone"
              value={dataform.phone}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Ej: +58 412 1234567"
            />
          </div>     

          <button type="submit" className="btn">
            Confirmar Orden
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormCheckout;