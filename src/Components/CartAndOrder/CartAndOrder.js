import React from "react";
import "./CartAndOrder.scss";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import VisaCard from "../../Assets/Images/Visa_card.png";
import MasterCard from "../../Assets/Images/Master_card.png";
import Paypal from "../../Assets/Images/Paypal.png";
import CartItems from "../CartItems/CartItems";

function CartAndOrder(props) {

  const { cartItems, onAdd, onRemove } = props;

  const totalPrice = cartItems.reduce((a, c) => a + c.quantity * c.product_price, 0);

  return (
    <div className="CartAndOrder">
      <div className="CartAndOrderHeader">
        <h2>Cart ({cartItems.length})</h2>
      </div>
      <div className="Cart">
        <div className="CartItem">
          <div className="CartItemHeader">
            <p>Product</p>
            <p>Title</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          <div className="CartItemBox">
            {cartItems.length === 0 ? <p>Cart is empty</p> :
            <CartItems cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />}
          </div>
          <div className="CartItemFooter">
            <div className="TotalBox">
              <h6>Total:</h6>
              {cartItems.length === 0 ? <p>$ 0.00</p> : "$ " + totalPrice.toFixed(2)}
            </div>
            <div className="Payment">
              <div className="PaymentOptions">
                <img src={VisaCard} alt="Visa-card" />
              </div>
              <div className="PaymentOptions">
                <img src={MasterCard} alt="Master-card" />
              </div>
              <div className="PaymentOptions">
                <img src={Paypal} alt="Paypal" />
              </div>
            </div>
          </div>
        </div>
        <div className="Checkout">
          <Form>
            <FormGroup>
              <Label>Checkout</Label>
              <Input type="text" name="text" placeholder="John Doe" />
            </FormGroup>
            <FormGroup>
              <Input type="email" name="email" placeholder="quickcart@templete.buy" />
            </FormGroup>
            <FormGroup>
              <Input type="tel" placeholder="01812345678" pattern="[0-9]{11}" />
            </FormGroup>
            <Button>COMPLETE THE ORDER</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CartAndOrder;
