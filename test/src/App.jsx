import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  // Helper function to load products from localStorage safely
  const loadProducts = () => {
    try {
      const storedProducts = JSON.parse(localStorage.getItem('products'));
      return storedProducts || [];
    } catch (error) {
      console.error("Failed to load products from localStorage:", error);
      return [];
    }
  };

  // Initialize products state using loadProducts function
  const [products, setProducts] = useState(loadProducts);

  // Save products to localStorage whenever products state changes
  useEffect(() => {
    console.log("Saving products to localStorage:", products);
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Function to add a new product
  const addProduct = (product) => {
    const newProducts = [...products, { ...product, id: nanoid() }];
    setProducts(newProducts);
  };

  // Function to update an existing product
  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updatedProducts);
  };

  // Function to delete a product by ID
  const deleteProduct = (id) => {
    const remainingProducts = products.filter((p) => p.id !== id);
    setProducts(remainingProducts);
  };

  return (
    <div className="container flex items-center flex-col mx-auto py-8">
      <h1 className="text-3xl font-medi mb-4">Inventory Management System</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default App;
