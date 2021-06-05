import { Link } from "react-router-dom";
import { Button } from "../Button";
import "../css/Products.css";
import {DataContext} from '../DataProvider'
import React, { useContext, 
  //useState 
  //useEffect, 
} from "react";
//import axios from "axios";

function Products() {

  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart

/*
  axios ile yapmak istersek / veri cekimi, cart'a ekleme  

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every(item => {
      return item._id !== id
    })
    if(check) {
      const data = products.filter(product => {
        return product._id === id
      })
      console.log(data)
      setCart([...cart, ...data])
    }else {
      alert("Error")
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://60b7a00017d1dc0017b8a893.mockapi.io/api/products"
      );
      setProducts(res.data);
    };

    fetchData();
  }, []);
*/
  return (
    <div id="product">
      {
        products.map(product => (
        <div className="card" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt="" />
          </Link>
          <div className="content">
            <h3>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h3>
            <span>${product.price}</span>
            <p>{product.description}</p>
            <Button onClick={() => addCart(product._id)}>Add to cart</Button>
          </div>
        </div>
      ))
      }
    </div>
  );
}

export default Products;
