
import React, { useState } from "react";
import CartContext from "./cart-context";


const CartProvider=(props)=>{
    const [items,updateItems]=useState([]);

    const addItemToCartHandler=item=>{
        let itemsCopy = [...items];
        let itemIndex = itemsCopy.findIndex((i) => i.id === item.id);
        if (itemIndex === -1) {

            updateItems([...items,item]);
        } else {
            itemsCopy[itemIndex].quantity = parseInt(itemsCopy[itemIndex].quantity) + parseInt(item.quantity);
            itemsCopy[itemIndex].totalPrice =
              itemsCopy[itemIndex].quantity * itemsCopy[itemIndex].price;
            updateItems(itemsCopy);
        // cartContext.items.push(item)
        console.log('inside addItemToCartHandler',cartContext);
    }
}

    const removeItemFromCartHandler=id=>{}

    let totalPrice = 0;
    items.forEach((item) => {
        totalPrice = totalPrice + Number(item.price * item.quantity);
    });
    const incrementHandler = (item) => {
        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.id === item.id);
        itemsCopy[idx].quantity++;
        updateItems(itemsCopy);
      };
    
      const decrementHandler = (item) => {
        const itemsCopy = [...items];
        const idx = itemsCopy.findIndex((i) => i.id === item.id);
    
        if (idx !== -1 && itemsCopy[idx].quantity < 2 ) {
          itemsCopy.splice(idx, 1);
          updateItems(itemsCopy);
        } else {
          itemsCopy[idx].quantity--;
          updateItems(itemsCopy);
        }
      }; 



    const cartContext={
        items:items,
        totalAmount: totalPrice.toFixed(2),
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        quantityplus: incrementHandler,
        quantityminus: decrementHandler
    }
    return( <CartContext.Provider value={cartContext}>
        {console.log('inside CartContext.Provider',cartContext)}
        {props.children}

    </CartContext.Provider>
    )
}
export default CartProvider