import "./BtnCmp.css";
import {useCartContext} from "../../context";

import { notify } from "../ToastyCompra/NotyTosty";

const ComprarButton = ({ product, disabled = false }) => {
  const { addToCart } = useCartContext();

  const handleClick = () => {
    if (product.stock <= 0) {
      notify(`Lo sentimos, ${product.nombre} está agotado.`, "error");
      return;
    }
    addToCart({ ...product, quantity: 1 });
    notify(`${product.nombre} agregado al carrito!`, "success");
  };

  return (
    <button
      className="btn btn-comprar"
      onClick={handleClick}
      disabled={disabled}
    >
      Comprar 🛒
    </button>
  );
};

export { ComprarButton };