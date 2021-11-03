import React from 'react';
import styles from './cartItem.module.css'
import propTypes from 'prop-types';

import { useCategories, useShoppingCart } from '../../hooks/useBestHomeContext';

function CartItem({ item }) {
  const { categoriesMap } = useCategories();
  const { setCartList } = useShoppingCart();

  const [numberItems, setNumberItems] = React.useState(item.quantity);

  function handleQuantityChange(event) {
    setNumberItems(parseInt(event.target.value));

    setCartList(prevCartList => {
      const findItem = prevCartList.filter((cartItem) => cartItem.id === item.id);

      const itemToUpdate = {
        ...findItem,
        quantity: parseInt(event.target.value)
      };

      return [
        ...prevCartList,
        itemToUpdate
      ];
    });
  }

  return (
    <div className={styles['item-container']}>
      <div className={styles['item-row']}>
        <div className={styles['image-container']}>
          <img
            src={item.mainimage.url}
            alt={item.mainimage.alt}
            height={item.mainimage.dimensions.height / 4}
            width={item.mainimage.dimensions.width / 4}
          />
        </div>
        <div className={styles['details-container']}>
          <h3>{item.name}</h3>
          <p><b>Category: </b>{categoriesMap?.get(item.category.id)}</p>
          <p><b>Unit Price: </b>${item.price.toFixed(2)}</p>
          <p><b>Description: </b>{item.short_description}</p>
          <p>
              <input
                className={styles['number-items--input']}
                name="numberItems"
                type="number"
                max={item.stock}
                disabled={item.stock === 0}
                onChange={(event) => handleQuantityChange(event)}
                value={numberItems}
              />
          </p>
          <input className={`btn-cart ${styles['btn-cart--custom']}`} type="button" value="Remove From Cart" />
        </div>
      </div>
      <hr />
    </div>
  );
}

CartItem.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    href: propTypes.string,
    price: propTypes.number,
    short_description: propTypes.string,
    main_image: propTypes.shape({
      alt: propTypes.string,
      dimensions: propTypes.shape({
        height: propTypes.number,
        width: propTypes.number
      }),
      url: propTypes.string.isRequired,
    })
  })
};

export default CartItem;