// import {firestore} from '../../src/utils/firebase';
// import { collection , addDoc, Timestamp } from 'firebase/firestore';

// const Compras = async () => {
//   try {
//     const docRef = await addDoc(collection(firestore, "compras"), {
//       productos: [
//         {
//           id: "demo1",
//           nombre: "Producto Demo",
//           precio: 1000,
//           cantidad: 1
//         }
//       ],
//       total: 1000,
//       fecha: Timestamp.now(),
//       estado: "generada"
//     });

//     console.log("Colección creada. ID:", docRef.id);
//   } catch (error) {
//     console.error("Error creando colección:", error);
//   }
// };
// export { Compras };