import styles from "./OrderSummary.module.css";

const OrderSummary = ({ subtotal, shipping, tax, total }) => {
  return (
    <section className={styles.orderSummary} data-testid="order-summary">
      <h2>Order Summary</h2>
      <div className={styles.summaryContainer}>
        <h3>Subtotal</h3>
        <p data-testid="subtotal">${subtotal}</p>
      </div>
      <div className={styles.summaryContainer}>
        <h3>Shipping</h3>
        <p data-testid="shipping">${shipping}</p>
      </div>
      <div className={styles.summaryContainer}>
        <h3>Sales Tax </h3>
        <p data-testid="tax">${tax}</p>
      </div>
      <div className={styles.summaryContainer}>
        <h3>Total</h3>
        <p data-testid="total">${total}</p>
      </div>
    </section>
  );
};

export default OrderSummary;
