import styles from "./Home.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useOutletContext } from "react-router";

const Home = () => {
  const [productList] = useOutletContext();
  const favoriteProducts = productList
    .filter((product) => {
      if (product.rating.rate >= 4.5) {
        return product;
      }
    })
    .map((product) => {
      const truncatedTitle =
        product.title.charAt(0).toUpperCase() +
        product.title.slice(1, 30) +
        "...";
      return { ...product, title: truncatedTitle };
    });

  return (
    <section className={styles.homeContainer}>
      <h2 className={styles.homeHeader}>Shop by Sam's Dev Lab</h2>
      <p>Top Rated Items</p>
      <section
        className={styles.cardContainer}
        data-testid="home-card-container"
      >
        {favoriteProducts.map((product) => {
          return (
            <ProductCard
              data-testid="product-card"
              key={product.id}
              props={product}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Home;
