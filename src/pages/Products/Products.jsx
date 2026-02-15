import { useEffect, useState } from "react";
// import { obtenerProductos } from '../../../services/mocks/Products';
import { Card } from "../../components/Card";
import './products.css'
import { ComprarButton } from "../../components/BtnCmp/BtnCmp";
import { Link, useSearchParams } from "react-router";
import { services } from "../../../services/index";
import { CargarButton } from "../../components/BtnCargarMas/BtnCM";
const ListaProductos = () => {
  const [products, setProducts] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const handleLoadMore = async () => {
    if (!hasMore) return;
    const response = await services.Firebase.productosFirebase.getProducts(lastDoc);
    setProducts(prev => [...prev, ...response.data]);
    setLastDoc(response.lastVisible);
    setHasMore(response.hasMore);
  };

  useEffect(() => {
    services.Firebase.productosFirebase.getProducts()
      .then((response) => {
        setProducts(response.data);
        setLastDoc(response.lastVisible);
        setHasMore(response.hasMore);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  return (

    <div className="">
      <h1 className="titulop">Productos</h1>
      <div className="products-container">
        {products.map((product) => {
          return <Card
            name={product.nombre} key={product.id} >
            <p className="card-price">Precio: ${product.precio}</p>
            <img className="card-image" src={product.imagen} />
            <Link className="btn-ver" to={`/Product/${product.id}`}>Detalles</Link>
            <ComprarButton />

          </Card>;



        }
        )}

      </div>
      <div className="load-more-container">
        {hasMore && (
          <CargarButton onClick={handleLoadMore} />
        )}
      </div>
    </div>

  )
};
export { ListaProductos };
