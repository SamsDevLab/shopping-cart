import styles from "./OrderSummary.module.css";

const OrderSummary = ({ subtotal, shipping, tax, total }) => {
  const subtotalStr = subtotal.toFixed(2);
  const shippingStr = shipping.toFixed(2);
  const taxStr = tax.toFixed(2);
  const totalStr = total.toFixed(2);

  return (
    <section className={styles.orderSummary} data-testid="order-summary">
      <h2>Order Summary</h2>
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
      <div className={styles.summaryContainer}>
        <h3>Total</h3>
        <p data-testid="total">${totalStr}</p>
      </div>
    </section>
  );
};

export default OrderSummary;
