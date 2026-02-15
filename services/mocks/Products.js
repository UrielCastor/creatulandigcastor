import { Products } from '../../data/Productos';


  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      const conexion = true; 
      if(conexion) {
        setTimeout(() => {
          resolve({success: true, data: Products});
        }, 0);
      } else {
        reject("Error al obtener los productos");
      }

    });
  };


export { obtenerProductos };
