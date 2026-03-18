import QuantitySelector from "../QuantitySelector/QuantitySelector";
import styles from "./CheckoutCard.module.css";
import { useOutletContext } from "react-router";
import trashIcon from "../../assets/svgs/trash.svg";

const CheckoutCard = ({ props }) => {
  const [productList, setProductList] = useOutletContext();

  const truncatedTitle =
    props.title.charAt(0).toUpperCase() + props.title.slice(1, 40) + "...";

  const adjustedPrice = props.price.toFixed(2);

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
      <h2>{truncatedTitle}</h2>
      <h3>${adjustedPrice}</h3>
      <QuantitySelector props={props} />
      <button className={styles.button} onClick={() => handleRemoveFromCart()}>
        <img src={trashIcon} alt="Trash" />
      </button>
    </div>
  );
};

export default CheckoutCard;
