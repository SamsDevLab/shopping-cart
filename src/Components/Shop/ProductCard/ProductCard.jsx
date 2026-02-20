import { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  const [inputValue, setInputValue] = useState(1);

  const handleDecrementChange = () => {
    if (!(inputValue <= 1)) setInputValue(inputValue - 1);
  };

  const handleInputChange = (event) => {
    if (event.target.value >= 1 && event.target.value <= 99)
      setInputValue(event.target.value);
  };

  const handleIncrementChange = () => {
    if (inputValue >= 0) setInputValue(inputValue + 1);
  };

  return (
    <div className={styles.cardContainer}>
      <h2>Patagonia Jacket</h2>
      <div>
        <label className={styles.inputLabel} htmlFor="quantity">
          Quantity
        </label>
        <button onClick={handleDecrementChange}>–</button>
        <input
          type="number"
          id="quantity"
          value={inputValue}
          onChange={(event) => handleInputChange(event)}
          className={styles.quantityInput}
        />
        <button onClick={handleIncrementChange}>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
