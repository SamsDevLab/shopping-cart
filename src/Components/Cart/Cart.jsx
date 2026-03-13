import CheckoutCard from "../CheckoutCard/CheckoutCard";
import OrderSummary from "../OrderSummary/OrderSummary";
import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";

const Cart = () => {
  const [productList] = useOutletContext();

  const cartProducts = productList.filter((product) => {
    if (product.addedToCart === true) {
      return product;
    }
  });

  return (
    <>
      <h2>Shopping Cart</h2>
      <section className={styles.checkoutContainer}>
        {cartProducts.length > 0 ? (
          <section className={styles.productSection}>
            {cartProducts.map((product) => {
              return (
                <CheckoutCard
                  className={styles.checkoutCard}
                  keys={product.id}
                  props={product}
                />
              );
            })}
          </section>
        ) : (
          <h2>No items added to your basket</h2>
        )}
        <section
          className={styles.summaryContainer}
          data-testid="cart-container"
        >
          <OrderSummary className={styles.orderSummary} />
        </section>
      </section>
    </>
  );
};

export default Cart;
