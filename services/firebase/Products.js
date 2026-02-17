import {firestore} from '../../src/utils/firebase';
import { collection, getDocs , addDoc, getDoc,doc,orderBy, query, limit,startAfter } from 'firebase/firestore';





const getProducts = async (lastDoc = null) => {
let productsQuery;
if (lastDoc) {
  productsQuery = query(collection(firestore, "Productos"), orderBy("categoria"), startAfter(lastDoc), limit(10));
} else {
  productsQuery = query(collection(firestore, "Productos"), orderBy("categoria"), limit(10));
}
const querySnapshot = await getDocs(productsQuery);
try {
const productos = querySnapshot.docs.map(doc => ({ 
  id: doc.id, ...doc.data() }));

const docs = querySnapshot.docs;

const lastVisible = docs.length > 0
  ? docs[docs.length - 1]
  : null;

const hasMore = docs.length === 10;


  return { success: true, data: productos, lastVisible, hasMore };
} catch (error) {
  return { success: false, error };
}
}
const getProductsByCategory = async (category) => {
  try {
    const productsQuery = query(collection(firestore, "Productos"), orderBy("categoria"), limit(10));
    const querySnapshot = await getDocs(productsQuery);
    const productos = querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(product => product.categoria === category);
    return { success: true, data: productos };
  } catch (error) {
    return { success: false, error };
  } 
};
const getProductById = async (id) => {
  try {
    const docRef = await getDoc(doc(firestore, "Productos", id));
    if (docRef.exists()) {
      return { success: true, data: { id: docRef.id, ...docRef.data() } };
    } else {
      return { success: false, error: "Producto no encontrado" };
    }
  } catch (error) {
    return { success: false, error };
  }
};


//funcion carga masiva de productos
// import  {ProductosFirebasejs}  from '../../data/ProductosFire';
// ProductosFirebasejs.forEach(Productos => addProduct(Productos));


const addProduct = async (data) => {
  try {
    const docRef = await addDoc(collection(firestore, "Productos"), data); 
    return { success:true};
  }  catch (error) {
    return { success: false, error };
  }
}


// const getUser = async (id) => {

//   return { success: true, data: user };
// };

export const productosFirebase = { getProducts,addProduct,getProductById,getProductsByCategory};