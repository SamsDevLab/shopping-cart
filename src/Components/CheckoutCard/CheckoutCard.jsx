import QuantitySelector from "../QuantitySelector/QuantitySelector";
import styles from "./CheckoutCard.module.css";
import { useOutletContext } from "react-router";

const CheckoutCard = ({ props }) => {
  const [productList, setProductList] = useOutletContext();

  const handleRemoveFromCart = () => {
    const newObjArr = productList.map((product) => {
      if (product.id === props.id) {
        return { ...product, addedToCart: false };
      }

      return product;
    });

    setProductList(newObjArr);
  };

  return (
    <div className={styles.checkoutCard} data-testid="checkout-card">
      <img className={styles.image} src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>${props.price}</h3>
      <QuantitySelector props={props} />
      <button className={styles.button} onClick={() => handleRemoveFromCart()}>
        Trash
      </button>
    </div>
  );
};

export default CheckoutCard;
