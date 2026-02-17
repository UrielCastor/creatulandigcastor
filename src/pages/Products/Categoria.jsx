import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { obtenerProductos } from '../../../services/mocks/Products';
import { Card } from "../../components/Card";
import './products.css'
import { ComprarButton } from "../../components/BtnCmp/BtnCmp";
import { Link } from "react-router";
import { services } from "../../../services";



const Cat = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    services.Firebase.productosFirebase.getProductsByCategory(cat)
      .then((response) => {

        if (response.success) {
          setProducts(response.data);

        }
      });
  }, [cat]);

  return (
    <div className="">
      <h1 className="titulop">{cat}</h1>
      <div className="products-container">
        {products.map(product => (
          <Card name={product.nombre} key={product.id}>
            <p className="card-price">Descripcion: {product.descripcion}</p>
            <img className="card-image" src={`/${product.imagen}`} alt={product.nombre} />
            <p className="card-price">Precio: ${product.precio}</p>
            <Link to={`/product/${product.id}`} className="btn-ver">Detalles</Link>
            <ComprarButton product={product} />
          </Card>
        ))}
        {products.length === 0 && <p>No hay productos en esta categoría.</p>}
      </div>
    </div>
  );
};
export { Cat };