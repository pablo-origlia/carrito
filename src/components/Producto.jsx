import React, { Fragment } from 'react';

const Producto = ({ producto, productos, changuito, agregarProducto }) => {
  // Extraer los valores
  const { id, articulo, precio, img } = producto;

  //var cantidad = 0;

  // Funcion para comprar un producto
  const seleccionarProducto = (id) => {
    const producto = productos.find((p) => p.id === id);
    if (changuito.some((p) => p.id === id)) {
      const productoEnChango = changuito.find((p) => p.id === id);
      productoEnChango.cantidad += 1;
      agregarProducto(changuito);
      //cantidad = productoEnChango.cantidad;
    } else {
      producto.cantidad = 1;
      agregarProducto([...changuito, producto]);
      //cantidad = producto.cantidad;
    }
  };

  // Funcion para comprar un producto
  const eliminarProducto = (id) => {
    /*
    const changuitoNuevo = changuito.filter((p) => p.id !== id);
    //Quitar producto de changuito
    agregarProducto(changuitoNuevo);
    /*/
    const producto = changuito.find((p) => p.id === id);
    const changuitoNuevo = changuito.filter((p) => p.id !== id);

    if (producto.cantidad === 1) {
      producto.cantidad = 0;
      agregarProducto(changuitoNuevo);
    } else {
      producto.cantidad -= 1;
      //Quitar producto de changuito
      agregarProducto([...changuitoNuevo, producto]);
    }
    //cantidad = producto.cantidad;
  };

  return (
    <Fragment>
      <p>
        <img
          className='producto'
          src={img}
          alt={articulo}
        />
        <br />
        {id} | {articulo} | {precio} | {productos ? <em> </em> : <em>{producto.cantidad}</em>}
        {productos ? (
          <button
            type='button'
            onClick={() => seleccionarProducto(id)}
          >
            Comprar
          </button>
        ) : (
          <button
            type='button'
            onClick={() => eliminarProducto(id)}
          >
            Eliminar
          </button>
        )}
      </p>
    </Fragment>
  );
};

export default Producto;
