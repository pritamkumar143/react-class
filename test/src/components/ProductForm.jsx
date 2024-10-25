import { useState } from 'react';
import { nanoid } from 'nanoid'
const ProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setimage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit button clicked');

        if (name && price) {
            console.log('Name and price are valid');
            const newProduct = {
                id: nanoid(5),
                name,
                price: parseFloat(price),
            };
            console.log(`New product: ${JSON.stringify(newProduct)}`);
            
            addProduct(newProduct);
            setName('');
            setPrice('');
        } else {
            console.log('Name and price are not valid');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4  pt-10">
            <div className="mb-2">
                <label className="block text-sm font-medium">Product Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-pink-300 p-2 rounded-full w-full "
                />
            </div>
            <div className="mb-2">
                <label className=" text-sm  font-medium">Product Price</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border-pink-300 border-2  p-2 rounded-full w-full mb-4"
                />
            </div>
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded mb-6">Add Product</button>
        </form>
    );
};

export default ProductForm;