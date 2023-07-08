import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../../components/itemDetailContainer';
import Navbar from '../../components/navbar';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; // Import necessary Firestore functions

const Detail = () => {
  const { itemID } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const db = getFirestore();
        const itemRef = doc(db, 'items', itemID); // Use the Firestore ID to reference the specific item document
        const itemSnapshot = await getDoc(itemRef); // Retrieve the item document from Firestore

        if (itemSnapshot.exists()) {
          const itemData = itemSnapshot.data();
          setSelectedItem({ id: itemSnapshot.id, ...itemData }); // Access the ID using itemSnapshot.id
        } else {
          console.log('Item not found');
          setSelectedItem(null);
        }
      } catch (error) {
        console.error('Error fetching item:', error);
        setSelectedItem(null);
      }
    };

    fetchItem();
  }, [itemID]);

  return (
    <div>
      <Navbar />
      <hr className="divider" />
      {selectedItem ? (
        <ItemDetailContainer selectedItem={selectedItem} />
      ) : (
        <p>Loading item...</p>
      )}
    </div>
  );
};

export default Detail;