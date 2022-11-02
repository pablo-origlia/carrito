import React, { Fragment } from 'react';
import './changuito.css';
import Producto from './Producto';
import { v4 as uuidv4 } from 'uuid';

const Changuito = ({ changuito, agregarProducto }) => {
  return (
    <Fragment>
      <div className='changuito'>
        <h4>Changuito de compras</h4>
        {changuito.map((producto) => (
          <Producto
            producto={producto}
            key={uuidv4()}
            changuito={changuito}
            agregarProducto={agregarProducto}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Changuito;
