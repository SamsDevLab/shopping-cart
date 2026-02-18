import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>
      <h2>Patagonia Jacket</h2>
      <div>
        <h3>Quantity</h3>
        <button>–</button>
        {/* <input type="text" /> */}
        <button>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
