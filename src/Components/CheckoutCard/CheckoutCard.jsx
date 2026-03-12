import QuantitySelector from "../QuantitySelector/QuantitySelector";
// import styles from "./CheckoutCard.module.css";
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
    <div data-testid="checkout-card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
      <QuantitySelector />
      <button onClick={() => handleRemoveFromCart()}>Trash</button>
    </div>
  );
};

export default CheckoutCard;
