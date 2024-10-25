import { useState } from 'react';

const ProductItem = ({ product, updateProduct, deleteProduct }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(product.name);
    const [editedPrice, setEditedPrice] = useState(product.price);

    const updateHandler = () => {
        console.log('updated the product ');
        updateProduct({
            id: product.id,
            name: editedName,
            price: Number(editedPrice),
        });
        setIsEditing(false);
    };

    const deleteHandler = () => {
        console.log('delete the product ');
        deleteProduct(product.id);
    };

    return (
        <li className="mb-4 border-b pb-2">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className="border p-2 rounded mb-2"
                    />
                    <input
                        type="number"
                        value={editedPrice}
                        onChange={(e) => setEditedPrice(e.target.value)}
                        className="border p-2 rounded mb-2"
                    />
                    <button
                        onClick={updateHandler}
                        className="bg-green-500 text-white px-4 py-1 rounded mr-2"
                    >
                        Save
                    </button>
                </div>
            ) : (
                <div className="flex justify-between">
                    <span>{product.name} <i className="fa fa-inr"></i> {product.price.toFixed(2)}</span>
                    <div>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-green-500 text-white mx-4 px-8 py-1 rounded mr-2"
                        >
                            Edit
                        </button>
                        <button
                            onClick={deleteHandler}
                            className="bg-rose-600  text-white px-4 py-1 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default ProductItem;
