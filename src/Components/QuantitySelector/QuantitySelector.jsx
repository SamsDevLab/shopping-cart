import { useOutletContext } from "react-router";
import styles from "./QuantitySelector.module.css";

const QuantitySelector = ({ props }) => {
  const [productList, setProductList] = useOutletContext();

  const handleDecrementChange = () => {
    const newArr = productList.map((product) => {
      if (product.id === props.id && !(props.quantity <= 1)) {
        return { ...product, quantity: props.quantity - 1 };
      }

      return product;
    });

    setProductList(newArr);
  };

  const handleIncrementChange = () => {
    const newArr = productList.map((product) => {
      if (
        product.id === props.id &&
        props.quantity >= 1 &&
        props.quantity <= 99
      ) {
        return { ...product, quantity: props.quantity + 1 };
      }

      return product;
    });

    setProductList(newArr);
  };

  const handleInputChange = (event) => {
    const newNumber = Number(event.target.value);

    const newArr = productList.map((product) => {
      if (product.id === props.id && newNumber >= 1 && newNumber <= 99) {
        return { ...product, quantity: newNumber };
      }

      return product;
    });

    setProductList(newArr);
  };

  return (
    <div>
      <label className={styles.inputLabel} htmlFor="quantity">
        Quantity
      </label>
      <button onClick={() => handleDecrementChange()}>-</button>
      <input
        type="number"
        id="quantity"
        maxLength="2"
        step="1"
        pattern="[1-9][0-9]"
        value={props.quantity}
        className={styles.quantityInput}
        onChange={(event) => handleInputChange(event)}
      />
      <button onClick={handleIncrementChange}>+</button>
    </div>
  );
};

export default QuantitySelector;

/* 
  Edge cases to address: 
  • Can add (multiple) 0s -before- the number
  • Can add a decimal after the first number
  • May be able to handle this with a blur event or adding to the cart - or both
  • Separate edge case: when you backspace in the input it will result in 0 rather than a blank space
  • Will need to write tests for these as well
  */
