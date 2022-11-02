import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import { Fragment, useState } from 'react';
import Changuito from './components/Changuito';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // Creamos nuestra lista de productos
  const [productos, guardarProductos] = useState([
    { id: 0, articulo: 'Guitarra', precio: 40000, img: '/guitarra.jpg' },
    { id: 1, articulo: 'Bateria', precio: 70000, img: '/bateria.jpg' },
    { id: 2, articulo: 'Microfono', precio: 3000, img: '/microfono.jpg' },
    { id: 3, articulo: 'Atril', precio: 1500, img: '/atril.jpg' },
  ]);
  // Creamos nuestro carrito de compra
  const [changuito, agregarProducto] = useState([]);

  return (
    <Fragment>
      <Header titulo='Carrito de compras' />
      <h1>Listado de productos</h1>
      {productos.map((producto) => (
        <Producto
          producto={producto}
          productos={productos}
          key={uuidv4()}
          changuito={changuito}
          agregarProducto={agregarProducto}
        />
      ))}
      <Changuito
        changuito={changuito}
        agregarProducto={agregarProducto}
      />
      <Footer />
      {console.log(changuito)}
    </Fragment>
  );
}

export default App;
