import { useState } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const [addToCartStr, setAddToCartStr] = useState("Add to Cart");

  const handleAddToCartMsg = () => {
    setAddToCartStr("Added to Cart");
  };

  return (
    <div data-testid="product-card" className={styles.cardContainer}>
      <img src={image.url} alt={image.alt} />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h4>{category}</h4>
      <p>{description}</p>
      <p>
        {rating.rate}/5 from {rating.count} reviews
      </p>
      <QuantitySelector />
      <button onClick={handleAddToCartMsg}>{addToCartStr}</button>
    </div>
  );
};

export default ProductCard;
