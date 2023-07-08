import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../../components/itemDetailContainer';
import Spinner from 'react-bootstrap/Spinner';
import Navbar from '../../components/navbar';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Detail = () => {
  const { itemID } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const db = getFirestore();
        const itemRef = doc(db, 'items', itemID);
        const itemSnapshot = await getDoc(itemRef);

        itemSnapshot.exists()
        ? (() => {
            const itemData = itemSnapshot.data();
            setSelectedItem({ id: itemSnapshot.id, ...itemData });
          })()
        : (() => {
            console.log('Item not found');
            setSelectedItem(null);
        })();
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
      <div className="infoContainer">
        <Spinner className="detSpinner" animation="grow" variant="warning" />
      </div>
      )}
    </div>
  );
};

export default Detail;