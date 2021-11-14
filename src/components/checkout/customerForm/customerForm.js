import React from 'react';
import styles from './customerForm.module.css'

function CustomerForm() {
  function handleSubmitCustomerData() {}

  return(
    <div className={styles['customer-form-container']}>
      <h1>Checkout Information</h1>
      <form onSubmit={handleSubmitCustomerData} className={styles['customer-form']}>
        <div className={styles['form-column']}>
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
        </div>
        <div className={styles['form-column']}>
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
        </div>
      </form>
    </div>
  );
}

export default CustomerForm;