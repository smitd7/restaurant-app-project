import classes from "./Cart.module.css";
import Modal from "../components/UI/Modal";
import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartList from "./CartList";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx.items.map((item) => (
        <CartList
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          Quantity={item.quantity}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCntx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};
export default Cart;
