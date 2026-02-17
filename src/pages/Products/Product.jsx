import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { obtenerProductos } from '../../../services/mocks/Products';
import { Card } from "../../components/Card";
import './products.css'
import { ComprarButton } from "../../components/BtnCmp/BtnCmp";
import { services } from "../../../services";



const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        services.Firebase.productosFirebase.getProductById(params.id)
            .then((response) => {
                if (response.success) {
                    setProduct(response.data);
                } else {
                    console.error(response.error);
                    setProduct(null);
                }
            });
    }, [params.id]);
    if (!product) return <p>Cargando producto...</p>;
    return (
        <div className="">
            <h1 className="titulop">{product.nombre}</h1>
            <div className="products-container">
                <Card name={product.nombre} key={product.id} >
                    <p className="card-price">Descripcion :<br></br>{product.descripcion}</p>
                    <p className="card-price">Categoria{product.categoria}</p>
                    <img className="card-image" src={`/${product.imagen}`} alt={product.nombre} />
                    <p className="card-price">Precio: ${product.precio}</p>
                    <p className=""><h6>Stock</h6>{product.stock}</p>
                    <ComprarButton product={product} />
                </Card>

            </div>
        </div>

    )
};
export { Product };
