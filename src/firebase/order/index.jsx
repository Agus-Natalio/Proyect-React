import { collection, addDoc, getFirestore } from 'firebase/firestore';

const createOrder = async (orderData) => {
  try {
    const db = getFirestore();
    const orderRef = await addDoc(collection(db, 'orders'), orderData);
    const orderId = orderRef.id;
    return orderId;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export default createOrder;
