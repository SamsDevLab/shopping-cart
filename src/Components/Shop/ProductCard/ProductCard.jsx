import { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  const [inputValue, setInputValue] = useState(1);
  const [addToCartStr, setAddToCartStr] = useState("Add to Cart");

  const handleDecrementChange = () => {
    if (!(inputValue <= 1)) setInputValue(inputValue - 1);
  };

  const handleIncrementChange = () => {
    if (inputValue >= 1 && inputValue < 99) setInputValue(inputValue + 1);
  };

  const handleInputChange = (event) => {
    const newNum = Number(event.target.value);

    if (newNum >= 0 && newNum <= 99) setInputValue(newNum);
  };

  const handleBlurEvent = (event) => {
    const newNumber = Number(event.target.value);

    setInputValue(newNumber);
  };

  const handleAddToCartMsg = () => {
    setAddToCartStr("Added to Cart");
  };

  return (
    <div className={styles.cardContainer}>
      <h2>Patagonia Jacket</h2>
      <div>
        <label className={styles.inputLabel} htmlFor="quantity">
          Quantity
        </label>
        <button onClick={handleDecrementChange}>-</button>
        <input
          type="number"
          id="quantity"
          maxLength="2"
          step="1"
          pattern="[1-9][0-9]"
          value={inputValue}
          className={styles.quantityInput}
          onChange={(event) => handleInputChange(event)}
          onBlur={(event) => handleBlurEvent(event)}
        />
        <button onClick={handleIncrementChange}>+</button>
      </div>
      <button onClick={handleAddToCartMsg}>{addToCartStr}</button>
    </div>
  );
};

export default ProductCard;
/* 
  Edge cases to address: 
  • Can add (multiple) 0s -before- the number
  • Can add a decimal after the first number
  • May be able to handle this with a blur event or adding to the cart - or both
  • Separate edge case: when you backspace in the input it will result in 0 rather than a blank space

  */
