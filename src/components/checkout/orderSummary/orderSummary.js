import React from 'react';
import styles from './orderSummary.module.css'
import { useShoppingCart } from '../../../hooks/useBestHomeContext';

function OrderSummary() {
  const { cartList } = useShoppingCart();

  return(
    <div className={styles['order-summary']}>
      <h1>Order Summary</h1>
      {cartList.map((item) => {
        return (
          <div className={styles['order-item-row']} key={item.id}>
            <p><label><b>Product: </b>{item.name}</label></p>
            <p><label><b>Quantity: </b>{item.quantity}</label></p>
            <p><label><b>Unit Price: </b>${item.price}</label></p>
            <p><label><b>Subtotal: </b>${item.subtotal}</label></p>
          </div>
        );
      })}
    </div>
  );
}

export default OrderSummary;