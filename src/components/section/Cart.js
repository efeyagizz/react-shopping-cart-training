import React, { useContext } from 'react'
import { DataContext } from '../DataProvider'
import { Button } from '../Button'
import '../css/Cart.css'

function Cart() {
  const value = useContext(DataContext)
  const [cart, setCart] = value.cart;

// carttan item cikartma
const removeProduct = id => {
        cart.forEach((item, index) => {
            if(item._id === id){
                cart.splice(index, 1)
            }
        })
        setCart([...cart])
    
}
  // cart bos ise
  if(cart.length === 0)
  return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>

    return (
        <>
          {
            cart.map(item => (
              <div className="details" key={item._id}>
                <img src={item.image} alt="" />
                <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                  <p>{item.description}</p>
                  <div className="row">

                    <Button to="/cart" className="buy">
                        Buy
                    </Button>

                    <Button className="delete" onClick={() => removeProduct(item._id)}>X</Button>

                  </div>
                </div>
              </div>
            ))
          }   
        </>
    )
}

export default Cart
