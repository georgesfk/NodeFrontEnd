
// import React, { useEffect, useState } from 'react';
// import { getAllProducts, createProduct, updateProduct, deleteProduct } from './ProductService';

// function App() {
//     const [products, setProducts] = useState([]);
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     useEffect(() => {
//         loadProducts();
//     }, []);

//     const loadProducts = async () => {
//         try {
//             const response = await getAllProducts();
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     const handleCreateOrUpdate = async () => {
//         try {
//             if (selectedProduct) {
//                 await updateProduct(selectedProduct.id, { name, price });
//             } else {
//                 await createProduct({ name, price });
//             }
//             setName('');
//             setPrice('');
//             setSelectedProduct(null);
//             loadProducts();
//         } catch (error) {
//             console.error('Error creating/updating product:', error);
//         }
//     };

//     const handleEdit = (product) => {
//         setSelectedProduct(product);
//         setName(product.name);
//         setPrice(product.price);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await deleteProduct(id);
//             loadProducts();
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Products</h1>
//             <input 
//                 type="text" 
//                 placeholder="Name" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//             />
//             <input 
//                 type="number" 
//                 placeholder="Price" 
//                 value={price} 
//                 onChange={(e) => setPrice(e.target.value)} 
//             />
//             <button onClick={handleCreateOrUpdate}>
//                 {selectedProduct ? 'Update' : 'Create'}
//             </button>
            
//             <ul>
//                 {products.map(product => (
//                     <li key={product.id}>
//                         {product.name} - ${product.price}
//                         <button onClick={() => handleEdit(product)}>Edit</button>
//                         <button onClick={() => handleDelete(product.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import { getAllProducts, createProduct, updateProduct, deleteProduct } from './ProductService';
// import './App.css'; // Import CSS for styling

// // ProductForm Component - Handles Create/Update operations
// function ProductForm({ selectedProduct, setSelectedProduct, loadProducts }) {
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');

//     // Populate form fields if a product is selected for editing
//     useEffect(() => {
//         if (selectedProduct) {
//             setName(selectedProduct.name);
//             setPrice(selectedProduct.price);
//         } else {
//             resetForm();
//         }
//     }, [selectedProduct]);

//     const resetForm = () => {
//         setName('');
//         setPrice('');
//         setSelectedProduct(null);
//     };

//     const handleSubmit = async () => {
//         if (!name || !price) {
//             alert('Please provide both name and price!');
//             return;
//         }

//         try {
//             if (selectedProduct) {
//                 await updateProduct(selectedProduct.id, { name, price });
//             } else {
//                 await createProduct({ name, price });
//             }
//             resetForm();
//             loadProducts();
//         } catch (error) {
//             console.error('Error creating/updating product:', error);
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>{selectedProduct ? 'Edit Product' : 'Add Product'}</h2>
//             <input
//                 type="text"
//                 placeholder="Product Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <input
//                 type="number"
//                 placeholder="Product Price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//             />
//             <button className="submit-btn" onClick={handleSubmit}>
//                 {selectedProduct ? 'Update Product' : 'Create Product'}
//             </button>
//             {selectedProduct && (
//                 <button className="cancel-btn" onClick={resetForm}>
//                     Cancel
//                 </button>
//             )}
//         </div>
//     );
// }

// // ProductList Component - Displays the list of products
// function ProductList({ products, handleEdit, handleDelete }) {
//     return (
//         <div className="product-list">
//             <h2>Product List</h2>
//             {products.length === 0 ? (
//                 <p>No products available.</p>
//             ) : (
//                 <ul>
//                     {products.map((product) => (
//                         <li key={product.id}>
//                             {product.name} - ${product.price}
//                             <div className="product-actions">
//                                 <button onClick={() => handleEdit(product)}>Edit</button>
//                                 <button onClick={() => handleDelete(product.id)}>Delete</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// function App() {
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     useEffect(() => {
//         loadProducts();
//     }, []);

//     const loadProducts = async () => {
//         try {
//             const response = await getAllProducts();
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     const handleEdit = (product) => {
//         setSelectedProduct(product);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await deleteProduct(id);
//             loadProducts();
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };

//     return (
//         <div className="app-container">
//             <header>
//                 <h1>Product Management</h1>
//             </header>
//             <main>
//                 <ProductForm
//                     selectedProduct={selectedProduct}
//                     setSelectedProduct={setSelectedProduct}
//                     loadProducts={loadProducts}
//                 />
//                 <ProductList
//                     products={products}
//                     handleEdit={handleEdit}
//                     handleDelete={handleDelete}
//                 />
//             </main>
//         </div>
//     );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { getAllProducts, createProduct, updateProduct, deleteProduct } from './ProductService';
import './App.css'; // Import CSS for styling

// ProductForm Component - Handles Create/Update operations
function ProductForm({ selectedProduct, setSelectedProduct, loadProducts }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    // Populate form fields if a product is selected for editing
    useEffect(() => {
        if (selectedProduct) {
            setName(selectedProduct.name);
            setPrice(selectedProduct.price);
        } else {
            resetForm();
        }
    }, [selectedProduct]);

    const resetForm = () => {
        setName('');
        setPrice('');
        setSelectedProduct(null);
    };

    const handleSubmit = async () => {
        if (!name || !price) {
            alert('Please provide both name and price!');
            return;
        }

        try {
            if (selectedProduct) {
                await updateProduct(selectedProduct.id, { name, price });
            } else {
                await createProduct({ name, price });
            }
            resetForm();
            loadProducts();
        } catch (error) {
            console.error('Error creating/updating product:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>{selectedProduct ? 'Edit Product' : 'Add Product'}</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button className="submit-btn" onClick={handleSubmit}>
                {selectedProduct ? 'Update Product' : 'Create Product'}
            </button>
            {selectedProduct && (
                <button className="cancel-btn" onClick={resetForm}>
                    Cancel
                </button>
            )}
        </div>
    );
}

// ProductList Component - Displays the list of products
function ProductList({ products, handleEdit, handleDelete }) {
    return (
        <div className="product-list">
            <h2>Available Casual Items</h2>
            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                            <div className="product-actions">
                                <button onClick={() => handleEdit(product)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Add</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function App() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Preload some casual product data (to simulate loading from API)
    const casualProducts = [
        { id: 1, name: 'Blue Jeans', price: 45 },
        { id: 2, name: 'White T-Shirt', price: 15 },
        { id: 3, name: 'Leather Jacket', price: 120 },
        { id: 4, name: 'Sneakers', price: 60 },
        { id: 5, name: 'Baseball Cap', price: 20 },
    ];

    useEffect(() => {
        // Simulate API load by using casualProducts
        setProducts(casualProducts);
    }, []);

    const loadProducts = async () => {
        try {
            const response = await getAllProducts();
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            loadProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="app-container">
            <header>
                <h1>Casual Clothing Store</h1>
            </header>
            <main>
                <ProductForm
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    loadProducts={loadProducts}
                />
                <ProductList
                    products={products}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </main>
        </div>
    );
}

export default App;
// import React, { useEffect, useState } from 'react';
// import { getAllProducts, createProduct, updateProduct, deleteProduct } from './ProductService';
// import './App.css'; // Import CSS for styling

// // ProductForm Component - Handles Create/Update operations
// function ProductForm({ selectedProduct, setSelectedProduct, loadProducts }) {
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');

//     useEffect(() => {
//         if (selectedProduct) {
//             setName(selectedProduct.name);
//             setPrice(selectedProduct.price);
//         } else {
//             resetForm();
//         }
//     }, [selectedProduct]);

//     const resetForm = () => {
//         setName('');
//         setPrice('');
//         setSelectedProduct(null);
//     };

//     const handleSubmit = async () => {
//         if (!name || !price) {
//             alert('Please provide both name and price!');
//             return;
//         }

//         try {
//             if (selectedProduct) {
//                 await updateProduct(selectedProduct.id, { name, price });
//             } else {
//                 await createProduct({ name, price });
//             }
//             resetForm();
//             loadProducts();
//         } catch (error) {
//             console.error('Error creating/updating product:', error);
//         }
//     };

//     return (
//         <div className="form-container">
//             <h2>{selectedProduct ? 'Edit Product' : 'Add Product'}</h2>
//             <input
//                 type="text"
//                 placeholder="Product Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <input
//                 type="number"
//                 placeholder="Product Price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//             />
//             <button className="submit-btn" onClick={handleSubmit}>
//                 {selectedProduct ? 'Update Product' : 'Create Product'}
//             </button>
//             {selectedProduct && (
//                 <button className="cancel-btn" onClick={resetForm}>
//                     Cancel
//                 </button>
//             )}
//         </div>
//     );
// }

// // ProductList Component - Displays the list of products
// function ProductList({ products, handleEdit, handleDelete }) {
//     return (
//         <div className="product-list">
//             <h2>Available Casual Items</h2>
//             {products.length === 0 ? (
//                 <p>No products available.</p>
//             ) : (
//                 <ul>
//                     {products.map((product) => (
//                         <li key={product.id}>
//                             {product.name} - ${product.price}
//                             <div className="product-actions">
//                                 <button onClick={() => handleEdit(product)}>Edit</button>
//                                 <button onClick={() => handleDelete(product.id)}>Delete</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             {/* Adding some casual clothing images here */}
//             <div className="product-images">
//                 <img src="https://via.placeholder.com/150x150?text=Jeans" alt="Jeans" />
//                 <img src="https://via.placeholder.com/150x150?text=T-Shirt" alt="T-Shirt" />
//                 <img src="https://via.placeholder.com/150x150?text=Jacket" alt="Jacket" />
//             </div>
//         </div>
//     );
// }

// function App() {
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const casualProducts = [
//         { id: 1, name: 'Blue Jeans', price: 45 },
//         { id: 2, name: 'White T-Shirt', price: 15 },
//         { id: 3, name: 'Leather Jacket', price: 120 },
//         { id: 4, name: 'Sneakers', price: 60 },
//         { id: 5, name: 'Baseball Cap', price: 20 },
//     ];

//     useEffect(() => {
//         // Simulate API load by using casualProducts
//         setProducts(casualProducts);
//     }, []);

//     const loadProducts = async () => {
//         try {
//             const response = await getAllProducts();
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     const handleEdit = (product) => {
//         setSelectedProduct(product);
//     };

//     const handleDelete = async (id) => {
//         try {
//             await deleteProduct(id);
//             loadProducts();
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };

//     return (
//         <div className="app-container">
//             <header>
//                 <h1>Casual Clothing Store</h1>
//             </header>
//             <main>
//                 <ProductForm
//                     selectedProduct={selectedProduct}
//                     setSelectedProduct={setSelectedProduct}
//                     loadProducts={loadProducts}
//                 />
//                 <ProductList
//                     products={products}
//                     handleEdit={handleEdit}
//                     handleDelete={handleDelete}
//                 />
//             </main>
//         </div>
//     );
// }

// export default App;
