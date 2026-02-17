import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
  
});
const updateQuantity = (id, newQuantity) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
};
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

    const addToCart = (item) => {
        
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex(
                (cartItem) => cartItem.id === item.id
                
            );
            
            if (itemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[itemIndex].quantity += item.quantity;
                return updatedCart;
            } else {
                return [...prevCart, item];
                
            }
            
        });
    };

    
    const removeFromCart = (id) => {
        setCart((prevCart) =>prevCart.filter((item) => item.id !== id));
        
    };

    const clearCart = () => {
        setCart([]);
        
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );


};
export { CartProvider, useCartContext }; 