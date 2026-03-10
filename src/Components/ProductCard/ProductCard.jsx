import { useState } from "react";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import styles from "./ProductCard.module.css";
import { useOutletContext } from "react-router";

const ProductCard = ({ props }) => {
  const [addToCartStr, setAddToCartStr] = useState("Add to Cart");
  const [productList, setProductList] = useOutletContext();

  // console.log(props);

  const handleAddingToCart = () => {
    setAddToCartStr("Added to Cart");
    // const newObjArr = productList.map((product) => {
    //   if (product.id === props.id) {
    //     return { ...product, addedToCart: true };
    //   }
    //   return { ...product };
    // });
    // console.log(newObjArr);
    // setProductList(newObjArr);
    // Need to update addToCart and quantity.
    // Focus on addToCart first
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
      <button onClick={() => handleAddingToCart()}>{addToCartStr}</button>
    </div>
  );
};

export default ProductCard;
