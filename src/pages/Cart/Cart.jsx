import { useCartContext } from "../../context";
import './Cart.css';
import {CountP} from "../../components/CountProduct/CountP";
import { NavLink } from "react-router";
import { BtnFinalizar } from "../../components/BtnFinalizar/BtnFinalizar.jsx";
import { vaciarcarrito,borrarproduct } from "../../components/SwetAlert/Swetwats.jsx";




const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCartContext();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  
  return (

    <div>
<h1 className="titulop">Su Compra</h1>
    <div className="cart-container">
      

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((item) => (
  <div className="cart-item" key={item.id}>
  <div className="cart-item-info">
    <h3 className="item-title">{item.nombre}</h3>
    <img className="item-image" src={`/${item.imagen}`} alt={item.nombre} />
    

    <div className="cart-item-controls">
     <CountP
  quantity={item.quantity}
  id={item.id}
  updateQuantity={updateQuantity}
/>

      <div className="cart-item-pricing">
        <span className="item-quantity">
          Cantidad: <strong>{item.quantity}</strong>
        </span>
        <span className="item-price">
          ${(item.precio * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  </div>

  <button
    className="btn-remove"
   
    onClick={() => {borrarproduct(); removeFromCart(item.id);}}
  >
    Eliminar
  </button>
</div>

        ))
      )}
<div className="cart-price">
      <h2 className="total-price">Total: ${totalPrice}</h2>
      <p className="total-art">Total de artículos: {totalItems}</p>
      </div>
      {cart.length > 0 && (
        <button className="btn-clear" onClick={() => {vaciarcarrito(); clearCart();}}>Vaciar carrito</button>
      )}
      <br />
      <br />
  <div className="buttons-container">
  <NavLink to="/products"  className="btn-scomprar">Seguir comprando</NavLink>
  <BtnFinalizar />
 
</div>
    </div>
    </div>
    
  );
};
export { Cart };
