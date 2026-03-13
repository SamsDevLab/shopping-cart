import styles from "./OrderSummary.module.css";

const OrderSummary = () => {
  return (
    <section data-testid="order-summary">
      <h2>Order Summary</h2>
      <h3>Subtotal</h3>
      <h3>Shipping</h3>
      <h3>Sales Tax</h3>
      <h3>Total</h3>
    </section>
  );
};

export default OrderSummary;
