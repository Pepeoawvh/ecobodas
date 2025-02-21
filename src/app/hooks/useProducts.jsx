import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestoreDB } from '../firebase/config';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, 'ecoproductos'));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const updateLocalProduct = (productId, updates) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === productId ? { ...product, ...updates } : product
      )
    );
  };

  const removeLocalProduct = (productId) => {
    setProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productId)
    );
  };

  return { 
    products, 
    loading, 
    updateLocalProduct,
    setProducts
  };
}