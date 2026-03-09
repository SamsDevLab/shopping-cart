import { useState } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import styles from "./ProductCard.module.css";

const ProductCard = ({ props }) => {
  const [addToCartStr, setAddToCartStr] = useState("Add to Cart");

  const handleAddToCartMsg = () => {
    setAddToCartStr("Added to Cart");
  };

  return (
    <div data-testid="product-card" className={styles.cardContainer}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
      <h4>{props.category}</h4>
      <p>{props.description}</p>
      <p>
        {props.rating.rate}/5 from {props.rating.count} reviews
      </p>
      <QuantitySelector />
      <button onClick={handleAddToCartMsg}>{addToCartStr}</button>
    </div>
  );
};

export default ProductCard;
