
import React, { useState } from "react";



const ProductCardApp = () => {

    const [products, setProducts] = useState([]);
    const [nextProductId, setNextProductId] = useState(1);


    const defaultProducts = [
        { name: "Product A", price: 50, brand: "Brand A", size: "Small" },
        { name: "Product B", price: 100, brand: "Brand B", size: "Medium" },
        { name: "Product C", price: 150, brand: "Brand C", size: "Large" },
    ];


    const addProduct = () => {
        let newProduct;
        if (nextProductId <= defaultProducts.length) {

            newProduct = {
                id: nextProductId,
                ...defaultProducts[nextProductId - 1],
            };
        } else {

            newProduct = {
                id: nextProductId,
                name: `Random Product ${nextProductId}`,
                price: Math.floor(Math.random() * 200) + 50,
                brand: `Brand ${nextProductId}`,
                size: ["Small", "Medium", "Large"][
                    Math.floor(Math.random() * 3)
                ],
            };
        }

        setProducts([...products, newProduct]);
        setNextProductId(nextProductId + 1);
    };


    const updateProduct = (id) => {
        const updatedProducts = products.map((product) =>
            product.id === id
                ? { ...product, price: product.price + 10 }
                : product
        );
        setProducts(updatedProducts);
    };


    const deleteProduct = (id) => {
        const filteredProducts = products.filter((product) => product.id !== id);
        setProducts(filteredProducts);
    };

    return (
        <div style={{ padding: "20px" }}>
            <button onClick={addProduct} style={{ marginBottom: "20px" }}>
                Add Product
            </button>

            {products.length > 0 && (
                <div className="bebo" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                padding: "10px",
                                width: "200px",
                                textAlign: "center",
                            }}
                        >
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Brand: {product.brand}</p>
                            <p>Size: {product.size}</p>
                            <button
                                onClick={() => updateProduct(product.id)}
                                style={{ marginRight: "10px" }}
                            >
                                Update
                            </button>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductCardApp;



