import "./BtnCmp.css";
import {useCartContext} from "../../context";
import "./BtnCmp.css";

const ComprarButton = ({ product, disabled = false }) => {
  const { addToCart } = useCartContext();

  const handleClick = () => {
    addToCart({ ...product, quantity: 1 });
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