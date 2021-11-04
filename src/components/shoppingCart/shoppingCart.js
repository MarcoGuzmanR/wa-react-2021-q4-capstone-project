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
  const { cartList } = useShoppingCart();
  const [cartTotal, setCartTotal] = React.useState(calculateTotal(cartList));

  React.useEffect(() => {
    setCartTotal(calculateTotal(cartList));
  }, [cartList]);

  return (
    <div className={styles.container}>
      {cartList.length ?
        <div className={styles['cart-container']}>
          {cartList.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <h3>Total: ${cartTotal.toFixed(2)}</h3>
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