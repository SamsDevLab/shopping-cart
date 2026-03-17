import ProductCard from "../ProductCard/ProductCard.jsx";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";

const Shop = () => {
  const [productList] = useOutletContext([]);

  return (
    <section className={styles.shopContainer}>
      <h2>All Products</h2>
      <div className={styles.cardContainer} data-testid="card-container">
        {productList.map((product) => {
          return (
            <ProductCard
              data-testid="product-card"
              key={product.id}
              props={product}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
