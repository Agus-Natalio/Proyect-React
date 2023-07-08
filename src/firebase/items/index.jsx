import { collection, getDocs, getFirestore } from 'firebase/firestore';

const getItems = async () => {
  try {
    const db = getFirestore();
    const itemsRef = collection(db, 'items');
    const snapshot = await getDocs(itemsRef);
    return snapshot.docs.map((doc) => {
      const itemData = doc.data();
      return { id: doc.id, ...itemData };
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];   //Retorna un array vacio en caso de que no se pueda adquirir la informacion
  }
};

export default getItems;