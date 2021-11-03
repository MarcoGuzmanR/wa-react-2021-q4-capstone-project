import React from 'react';
import styles from './shoppingCart.module.css'
import { Link } from 'react-router-dom';
import CartItem from '../cartItem';

import { useShoppingCart } from '../../hooks/useBestHomeContext';

function ShoppingCart() {
  const { cartList } = useShoppingCart();

  return (
    <div className={styles.container}>
      {cartList.length ?
        <div className={styles['cart-container']}>
          {cartList.map((item) => (
            <CartItem item={item} />
          ))}

          <Link to="/checkout">
            <input className="btn-secondary" type="button" value="Proceed to checkout" />
          </Link>
        </div>:
        <div>
          <h2>Your cart is empty!</h2>
        </div>
      }
    </div>
  );
}

export default ShoppingCart;