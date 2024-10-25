import ProductItem from './ProductItem';

const ProductList = ({ products, updateProduct, deleteProduct }) => {
    return (
        <div>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            updateProduct={updateProduct}
                            deleteProduct={deleteProduct}
                        />
                    ))}
                </ul>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ProductList;