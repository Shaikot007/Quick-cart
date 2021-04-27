import React, { useState } from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import CartAndOrder from "../CartAndOrder/CartAndOrder";
import About from "../About/About";
import Footer from "../Footer/Footer";

function Home() {

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (data) => {
    const exits = cartItems.find(item => item.product_id === data.product_id);
    if(exits) {
      setCartItems(
        cartItems.map(item => item.product_id === data.product_id ?
          {...exits, quantity: exits.quantity + 1} : item
        )
      );
    }
    else {
      setCartItems([...cartItems, {...data, quantity: 1}]);
    }
  };

  const onRemove = (data) => {
    const exits = cartItems.find(item => item.product_id === data.product_id);
    if(exits.quantity === 1) {
      setCartItems(cartItems.filter(item => item.product_id !== data.product_id));
    } else {
      setCartItems(
        cartItems.map(item =>
          item.product_id === data.product_id ? { ...exits, quantity: exits.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <div className="Home">
      <Header cartItems={cartItems} />
      <Catalog onAdd={onAdd} />
      <CartAndOrder cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
