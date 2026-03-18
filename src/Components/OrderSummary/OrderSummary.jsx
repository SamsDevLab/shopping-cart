import styles from "./OrderSummary.module.css";

const OrderSummary = ({ subtotal, shipping, tax, total }) => {
  const subtotalStr = subtotal.toFixed(2);
  const shippingStr = shipping.toFixed(2);
  const taxStr = tax.toFixed(2);
  const totalStr = total.toFixed(2);

  return (
    <section className={styles.orderSummary} data-testid="order-summary">
      <h2>Order Summary</h2>
      <hr />
      <div className={styles.summaryContainer}>
        <h3>Subtotal</h3>
        <p data-testid="subtotal">${subtotalStr}</p>
      </div>
      <div className={styles.summaryContainer}>
        <h3>Shipping</h3>
        <p data-testid="shipping">${shippingStr}</p>
      </div>
      <div className={styles.summaryContainer}>
        <h3>Sales Tax </h3>
        <p data-testid="tax">${taxStr}</p>
      </div>
      <hr />
      <div className={styles.summaryContainer}>
        <h3 className={styles.total}>Total</h3>
        <p className={styles.total} data-testid="total">
          ${totalStr}
        </p>
      </div>
      <button className={styles.checkoutButton}>Checkout </button>
    </section>
  );
};

export default OrderSummary;
