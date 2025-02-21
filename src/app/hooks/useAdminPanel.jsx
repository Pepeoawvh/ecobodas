import { useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { firestoreDB, auth } from '../firebase/config';
import useProducts from './useProducts';

export default function useAdminPanel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { products, loading, updateLocalProduct, setProducts } = useProducts();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Error al cerrar sesión');
    }
  };

  const handleAddProduct = async (productData) => {
    try {
      const docRef = await addDoc(collection(firestoreDB, 'ecoproductos'), productData);
      const newProduct = { id: docRef.id, ...productData };
      setProducts(prev => [...prev, newProduct]);
      setShowForm(false);
    } catch (error) {
      console.error('Error:', error);
      alert('Error al agregar el producto');
    }
  };

  const handleEditProduct = async (productData) => {
    try {
      await updateDoc(doc(firestoreDB, 'ecoproductos', editingProduct.id), productData);
      updateLocalProduct(editingProduct.id, productData);
      setEditingProduct(null);
    } catch (error) {
      console.error('Error:', error);
      alert('Error al editar el producto');
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        await deleteDoc(doc(firestoreDB, 'ecoproductos', productId));
        setProducts(prev => prev.filter(p => p.id !== productId));
      } catch (error) {
        console.error('Error:', error);
        alert('Error al eliminar el producto');
      }
    }
  };

  const handleToggleFeatured = async (product) => {
    try {
      const newFeaturedState = !product.featured;
      await updateDoc(doc(firestoreDB, 'ecoproductos', product.id), {
        featured: newFeaturedState
      });
      updateLocalProduct(product.id, { featured: newFeaturedState });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al actualizar el estado destacado');
    }
  };

  return {
    // Estado
    email,
    setEmail,
    password,
    setPassword,
    isLoggedIn,
    showForm,
    setShowForm,
    editingProduct,
    setEditingProduct,
    products,
    loading,
    // Handlers
    handleLogin,
    handleLogout,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    handleToggleFeatured
  };
}