import React from 'react';
import styles from './checkout.module.css'
import CustomerForm from './customerForm';
import OrderSummary from './orderSummary';
import { Link } from 'react-router-dom';

import { useShoppingCart } from '../../hooks/useBestHomeContext';

function Checkout() {
  const { cartTotal } = useShoppingCart();

  return (
    <div className={styles.container}>
      <div className={styles['main-checkout']}>
        <CustomerForm />
        <hr />
        <OrderSummary />
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