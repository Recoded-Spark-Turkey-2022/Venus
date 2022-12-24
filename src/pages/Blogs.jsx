import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import Bloglist from '../components/blogs/Bloglist';

import Container from '../components/UI/Container';
import { db } from '../firebase/firebase.config';

const Blogs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchListng = async () => {
      try {
        // const listingCollection = collection(db, 'listings');
        // const docRef = doc(listingCollection);
        // const docSnap = await getDoc(docRef);
        const querySnapshot = await getDocs(collection(db, 'listings'));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          setData((prev) => [...prev, doc.data()]);
          console.log(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchListng();
  }, []);
  console.log(data);
  return (
    <Container>
      <section className="min-h-screen">
        <Bloglist />
      </section>
    </Container>
  );
};

export default Blogs;
