import {firestore} from '../../src/utils/firebase';
import { collection, getDocs , addDoc, getDoc,doc,orderBy, query, limit,startAfter } from 'firebase/firestore';
const guardarCarrito = async (cartData) => {
  try {
    const docRef = await addDoc(
      collection(firestore, "carrito"),
      {
        productos: cartData,
        fecha: new Date()
      }
    );

    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error };
  }
};

export { guardarCarrito };
