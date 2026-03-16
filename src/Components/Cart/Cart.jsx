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

  const subtotal = cartProducts
    .map((product) => {
      return product.price * product.quantity;
    })
    .reduce((acc, current) => {
      const newTotal = acc + current;

      return newTotal;
    }, 0);

  const getSalesTax = () => {
    const taxRate = 0.06;

    let totalWithTax = subtotal * taxRate;

    return Math.round(totalWithTax * 100) / 100;
  };

  const getShipping = () => {
    if (cartProducts.length > 0) {
      return 10;
    } else return 0;
  };

  const shipping = getShipping();
  const salesTax = getSalesTax();
  const total = subtotal + shipping + salesTax;

  return (
    <>
      <h2>Shopping Cart</h2>
      <section className={styles.checkoutContainer}>
        {cartProducts.length > 0 ? (
          <section
            className={styles.productSection}
            data-testid="cart-container"
          >
            {cartProducts.map((product) => {
              return (
                <CheckoutCard
                  className={styles.checkoutCard}
                  key={product.id}
                  props={product}
                />
              );
            })}
          </section>
        ) : (
          <h2>No items added to your basket</h2>
        )}
        <section className={styles.summaryContainer}>
          <OrderSummary
            className={styles.orderSummary}
            subtotal={subtotal}
            shipping={shipping}
            tax={salesTax}
            total={total}
          />
        </section>
      </section>
    </>
  );
};

export default Cart;
