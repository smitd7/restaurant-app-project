import Input from "../../components/UI/Input";
import classes from "./MealItemForm.module.css";
import React,{useContext} from "react";
import cartCtx from "../../store/cart-context";

const MealItemForm = (props) => {
    const cartCntx=useContext(cartCtx)

    const addItemToCart=(event)=>{
        event.preventDefault();
        // cartCntx.items.push(props.item)
        const quantity=document.getElementById('amount_'+props.id).value
        cartCntx.addItem({...props.item,quantity:quantity}) //all values are copied by spread
        console.log('after additemtocart',cartCntx);
    }
  return (
    <form className={classes.form}>
        {console.log('inside render',cartCntx.items)}
        {console.log(cartCntx)}
      <Input
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button className={classes.button} onClick={addItemToCart}>+Add</button>
    </form>
  );
};
export default MealItemForm;
