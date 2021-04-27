import React from "react";
import "./CartItems.scss";
import { Button } from "reactstrap";

function CartItems(props) {

  const { cartItems, onAdd, onRemove } = props;

  return (
    <div className="CartItems">
      {cartItems.map(item => (
        <div className="CartProduct" key={item.product_id}>
          <div className="CartInfo">
            <img src={item.product_image} alt="cart" />
          </div>
          <div className="CartInfo">
            <p>{item.product_name}</p>
          </div>
          <div className="CartInfo">
            <Button onClick={() => onRemove(item)}>-</Button>
            <p>{item.quantity}</p>
            <Button onClick={() => onAdd(item)}>+</Button>
          </div>
          <div className="CartInfo">
            <p>{item.quantity * item.product_price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
