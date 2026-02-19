import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>
      <h2>Patagonia Jacket</h2>
      <div>
        <label class={styles.inputLabel} htmlFor="quantity">
          Quantity
        </label>
        <button>–</button>
        <input
          type="number"
          id="quantity"
          class={styles.quantityInput}
          value="0"
        />
        <button>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
