import React from "react";
import "./CartAndOrder.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import VisaCard from "../../Assets/Images/Visa_card.png";
import MasterCard from "../../Assets/Images/Master_card.png";
import Paypal from "../../Assets/Images/Paypal.png";

function CartAndOrder() {
  return (
    <div className="CartAndOrder">
      <div className="CartAndOrderHeader">
        <h2>Cart (0)</h2>
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
            <p>Cart is empty</p>
          </div>
          <div className="CartItemFooter">
            <div className="TotalBox">
              <h6>Total:</h6>
              <p>$ 0.00</p>
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
