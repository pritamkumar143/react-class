import { useState } from "react";
import axios  from "../utils/axios";


const Item = () => {

  const [products, setproducts] = useState(null)

  const getproducts = async () => {
    try {
      const { data } = await axios.get('/products')
      console.log(data);
      setproducts(data);


    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div>
      <h1>pro</h1>
      <button onClick={getproducts}>Get products</button>

    </div>
  )
}

export default Item
