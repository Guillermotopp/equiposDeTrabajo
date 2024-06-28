import React from 'react';
import './Clientes.css';

const Clientes = ({ clientes }) => {
  return (
    <section className="clientes">
      <h2>Clientes</h2>
      {clientes.length > 0 ? (
        clientes.map((cliente, index) => (
          <div key={index} className="cliente">
            <img src={cliente.foto} alt={cliente.nombre} />
            <div>
              <h3>{cliente.nombre}</h3>
              <p>{cliente.puesto}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No hay clientes registrados</p>
      )}
    </section>
  );
};

export default Clientes;
