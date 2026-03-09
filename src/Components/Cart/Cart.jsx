import CheckoutCard from "../CheckoutCard/CheckoutCard";
import { useOutletContext } from "react-router";

const Cart = () => {
  const [productList, setProductList] = useOutletContext();

  const cartProducts = productList.filter((product) => {
    if (product.addedToCart === true) {
      return product;
    }
  });

  return (
    <>
      <h2>Shopping Cart</h2>
      <div data-testid="cart-container">
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => {
            return <CheckoutCard key={product.id} props={product} />;
          })
        ) : (
          <h2>No items added to your basket</h2>
        )}
      </div>
    </>
  );
};

export default Cart;
