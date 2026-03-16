import { useState } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import styles from "./ProductCard.module.css";
import { useOutletContext } from "react-router";

const ProductCard = ({ props }) => {
  const [addToCartStr, setAddToCartStr] = useState("Add to Cart");
  const [productList, setProductList] = useOutletContext();

  const truncatedTitle =
    props.title.charAt(0).toUpperCase() + props.title.slice(1, 30) + "...";

  const adjustedPrice = props.price.toFixed(2);

  const handleAddingToCart = () => {
    setAddToCartStr("Added to Cart");
    const newObjArr = productList.map((product) => {
      if (product.id === props.id) {
        return { ...product, addedToCart: true };
      }
      return { ...product };
    });

    setProductList(newObjArr);
  };

  return (
    <div data-testid="product-card" className={styles.cardContainer}>
      <img className={styles.image} src={props.image} alt={props.title} />
      <h2>{truncatedTitle}</h2>
      <h3>${adjustedPrice}</h3>
      <h4>{props.category}</h4>

      <p>
        {props.rating.rate}/5 ({props.rating.count} Reviews)
      </p>
      <QuantitySelector props={props} />
      <button onClick={() => handleAddingToCart()}>{addToCartStr}</button>
    </div>
  );
};

export default ProductCard;
