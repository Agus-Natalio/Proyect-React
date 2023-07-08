import { collection, getDocs, getFirestore } from 'firebase/firestore';

const getCategories = async () => {
  try {
    const db = getFirestore();
    const categoriesSnapshot = await getDocs(collection(db, 'categories'));
    const categoriesData = categoriesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return categoriesData;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export default getCategories;