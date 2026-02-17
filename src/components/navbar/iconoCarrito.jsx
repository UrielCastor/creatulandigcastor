import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from "react-router";

function IconoCarrito() {
  return (
    
      <NavLink className="nav-link" to="/cart" end>
        🛒
      </NavLink>
    
  )
}
export default IconoCarrito;
