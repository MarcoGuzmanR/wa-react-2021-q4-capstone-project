import React from 'react';
import styles from './shoppingCart.module.css'
import { Link } from 'react-router-dom';
import CartItem from '../cartItem';

import { useShoppingCart } from '../../hooks/useBestHomeContext';

function calculateTotal(items) {
  if (!items.length) {
    return 0;
  }

  return items.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.subtotal;
  }, 0);
}

function ShoppingCart() {
  const { cartList, cartTotal, setCartTotal } = useShoppingCart();

  React.useEffect(() => {
    setCartTotal(calculateTotal(cartList));
  }, [cartList,setCartTotal]);

  return (
    <div className={styles.container}>
      <div className={styles['main-shopping-cart']}>
        <h1>Shopping Cart List</h1>
        {cartList.length ?
          <div className={styles['cart-container']}>
            <div className={styles['cart-list']}>
              {cartList.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className={styles['bottom-content']}>
              <h3>Total: ${cartTotal.toFixed(2)}</h3>
              <Link to="/checkout">
                <button
                  className={`btn-cart ${styles['btn-cart--custom']}`}
                  type="button">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>:
          <div>
            <h2>Your cart is empty!</h2>
          </div>
        }
      </div>
    </div>
  );
}

export default ShoppingCart;