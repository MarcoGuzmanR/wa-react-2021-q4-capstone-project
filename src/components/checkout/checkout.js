import React from 'react';
import styles from './checkout.module.css'
import { Link } from 'react-router-dom';

import { useShoppingCart } from '../../hooks/useBestHomeContext';

function Checkout() {
  const { cartList, cartTotal } = useShoppingCart();

  function handleSubmitCustomerData() {}

  return (
    <div className={styles.container}>
      <div className={styles['main-checkout']}>
        <h1>Checkout Information</h1>
        <div className={styles['customer-form']}>
          <form onSubmit={handleSubmitCustomerData}>
            <p>
              <label htmlFor="name">Name:</label>
              <input id="name" name="name" type="text" />
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input id="email" name="email" type="text" />
            </p>
            <p>
              <label htmlFor="zipcode">Zip Code:</label>
              <input id="zipcode" name="zipcode" type="text" />
            </p>
            <p>
              <label htmlFor="notes">Order Notes:</label>
              <textarea id="notes" name="notes"></textarea>
            </p>
          </form>
        </div>
        <div className={styles['order-summary']}>
          {cartList.map((item) => {
            return (
              <p key={item.id}>
                <label>Product: {item.name}</label>
                <label>Quantity: {item.quantity}</label>
                <label>Price: {item.price}</label>
                <label>Subtotal: {item.subtotal}</label>
              </p>
            );
          })}
        </div>
        <div className={styles['bottom-container']}>
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
          <Link to="/cart">
            <button type="button" className="btn-secondary">Go Back to Cart</button>
          </Link>
          <button type="button" className="btn-cart">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;