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
    if (event.target.value.includes(".")) return;

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
      <label className={styles.quantityLabel} htmlFor="quantity">
        Quantity
      </label>
      <button
        className={styles.quantityButton}
        onClick={() => handleDecrementChange()}
      >
        -
      </button>
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
      <button className={styles.quantityButton} onClick={handleIncrementChange}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
