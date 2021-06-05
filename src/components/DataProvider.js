import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
          "_id": "1",
          "title": "T-Shirt",
          "subTitle": "model: A74D_42S",
          "image": "https://cdn.shopify.com/s/files/1/0020/8355/3361/products/17new_1400x1400_crop_center@2x.jpg?v=1606414592",
          "description": "This waterproof, breathable technology utilizes a polyurethane (PU) coating that consists of a tri-component, multi-layer formula for waterproof protection, moisture permeability and durability",
          "price": 30,
          "count": 1
        },
        {
          "_id": "2",
          "title": "Sweatshirt",
          "subTitle": "model: A74D_42S",
          "image": "https://productimages.hepsiburada.net/l/32/600-800/10359186194482.jpg",
          "description": "This waterproof, breathable technology utilizes a polyurethane (PU) coating that consists of a tri-component, multi-layer formula for waterproof protection, moisture permeability and durability",
          "price": 37,
          "count": 1
        },
        {
          "_id": "3",
          "title": "Track Suit",
          "subTitle": "model: A74D_42S",
          "image": "https://www.pns.com.tr/UserFiles/ProductImages/0/58257102/orj/classic-sweat-suit-cl-tr-puma-white-00-49384.jpg",
          "description": "This waterproof, breathable technology utilizes a polyurethane (PU) coating that consists of a tri-component, multi-layer formula for waterproof protection, moisture permeability and durability",
          "price": 50,
          "count": 1
        },
        {
          "_id": "4",
          "title": "Sport Bag",
          "subTitle": "model: A74D_42S",
          "image": "https://cdn1.static-tgdp.com/ui/productimages/approved/std.lang.all/45/23/684523_sized_1800x1200_rev_1.jpg",
          "description": "This waterproof, breathable technology utilizes a polyurethane (PU) coating that consists of a tri-component, multi-layer formula for waterproof protection, moisture permeability and durability",
          "price": 37,
          "count": 1
        },
        {
          "_id": "5",
          "title": "Jacket",
          "subTitle": "model: A74D_42S",
          "image": "https://dainese-cdn.thron.com/delivery/public/image/dainese/944d1c03-c3d8-4a9e-b026-4c27436e9715/ramfdh/std/615x615/mike-2-leather-jacket.jpg",
          "description": "This waterproof, breathable technology utilizes a polyurethane (PU) coating that consists of a tri-component, multi-layer formula for waterproof protection, moisture permeability and durability",
          "price": 70,
          "count": 1
        },
        {
          "_id": "6",
          "title": "Boots",
          "subTitle": "model: A74D_42S",
          "image": "https://milworld.com/eng_pl_Mil-Tec-Jungle-Panama-Boots-Black-8396_1.jpg",
          "description": "This waterproof, breathable technology utilizes a polyurethane (PU) coating that consists of a tri-component, multi-layer formula for waterproof protection, moisture permeability and durability",
          "price": 61,
          "count": 1
        },
        {
          "_id": "7",
          "title": "Walking Shoes",
          "subTitle": "model: A74D_42S",
          "image": "https://images-na.ssl-images-amazon.com/images/I/71yIfGCjcVL._AC_UY625_.jpg",
          "description": "This waterproof, breathable technology utilizes a polyurethane (PU) coating that consists of a tri-component, multi-layer formula for waterproof protection, moisture permeability and durability",
          "price": 34,
          "count": 1
        },
        {
          "_id": "8",
          "title": "Camp Tent",
          "subTitle": "model: A74D_42S",
          "image": "https://ae01.alicdn.com/kf/Ha225bc922fda4dbab8ea78e4d9c546efE/2019-Tents-Outdoor-Camping-Tent-1-4-People-Tourist-4-Seasons-Family-Travel-Beach-Camp-Tent.jpg",
          "description": "This waterproof, breathable technology utilizes a polyurethane (PU) coating that consists of a tri-component, multi-layer formula for waterproof protection, moisture permeability and durability",
          "price": 50,
          "count": 1
        },
        {
          "_id": "9",
          "title": "Bicycle",
          "subTitle": "model: A74D_42S",
          "image": "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/gb2xifofwl7ntokggojx/SiemReapBicycleRental.webp",
          "description": "This waterproof, breathable technology utilizes a polyurethane (PU) coating that consists of a tri-component, multi-layer formula for waterproof protection, moisture permeability and durability",
          "price": 39,
          "count": 1
        }
      ])

      const [cart, setCart] = useState([]);

      const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("Already added to cart.")
        }
    }

      useEffect(() => {
          const dataCart = JSON.parse(localStorage.getItem('dataCart'))
          if(dataCart) setCart(dataCart)
      }, [])

      useEffect(() => {
          localStorage.setItem('dataCart', JSON.stringify(cart))
      }, [cart])

      const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
      }

      return (
          <DataContext.Provider value={value}>
              {props.children}
          </DataContext.Provider>
      )
}