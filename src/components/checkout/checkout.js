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
        <div className={styles['customer-form']}>
          <h1>Checkout Information</h1>
          <form onSubmit={handleSubmitCustomerData}>
            <p>
              <label htmlFor="name"><b>Name: </b></label>
              <input
                id="name"
                className={styles['customer-form-input']}
                name="name"
                type="text"
                placeholder="Your Name"
              />
            </p>
            <p>
              <label htmlFor="email"><b>Email: </b></label>
              <input
                id="email"
                className={styles['customer-form-input']}
                name="email"
                type="text"
                placeholder="Your Email"
              />
            </p>
            <p>
              <label htmlFor="zipcode"><b>Zip Code: </b></label>
              <input
                id="zipcode"
                className={styles['customer-form-input']}
                name="zipcode"
                type="text"
                placeholder="Your Zip Code"
              />
            </p>
            <p>
              <label htmlFor="notes"><b>Order Notes: </b></label>
              <textarea
                id="notes"
                className={styles['customer-form-input']}
                name="notes"
                placeholder="All your instructions to facilitate the delivery"></textarea>
            </p>
          </form>
        </div>
        <hr />
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
        <hr />
        <div className={styles['bottom-container']}>
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
          <div className={styles['buttons-container']}>
            <Link to="/cart">
              <button
                type="button"
                className={`btn-secondary ${styles['btn-checkout--custom-back']}`}>
                Back to Cart
              </button>
            </Link>
            <Link to="/">
              <button
                type="button"
                className={`btn-cart ${styles['btn-checkout--custom']}`}>
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;