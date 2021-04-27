import React from "react";
import "./CartItems.scss";

function CartItems(props) {

  const { cartItems, onAdd, onRemove } = props;

  return (
    <div className="CartItems">
      {cartItems.map(item => (
        <div className="CartProduct" key={item.product_id}>
          <div className="CartInfoImage">
            <img src={item.product_image} alt="cart" />
          </div>
          <div className="CartInfoName">
            <p>{item.product_name}</p>
          </div>
          <div className="CartInfoQuantity">
            <p onClick={() => onRemove(item)}>-</p>
            <p>{item.quantity}</p>
            <p onClick={() => onAdd(item)}>+</p>
          </div>
          <div className="CartInfoPrice">
            <p>{item.quantity * item.product_price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
