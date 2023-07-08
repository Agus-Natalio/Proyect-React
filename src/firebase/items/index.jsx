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
    return []; // Return an empty array or handle the error as needed
  }
};

export default getItems;