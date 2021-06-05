import { Link, useParams } from "react-router-dom";
import "../css/Details.css";
import React, { useContext, 
  //useEffect, 
  //useState 
} from "react";
import { DataContext } from "../DataProvider";
//import axios from "axios";

function Details() {
  const { id } = useParams();

  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart

  /*
  axios ile veri cekimi
  
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://60b7a00017d1dc0017b8a893.mockapi.io/api/products`
      );
      setValue(res.data);
    };
    fetchData();
  }, []);
   */

  const details = products.filter((product) => {
    return product._id === id;
  });
  return (
    <>
      {details.map((item) => (
        <div className="details" key={item._id}>
          <img src={item.image} alt="" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <p>{item.description}</p>
            <Link
            onClick={() => addCart(item._id)}
            to="/cart" className="cart">
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Details;
