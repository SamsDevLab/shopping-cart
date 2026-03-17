import styles from "./Home.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useOutletContext } from "react-router";
import spaceLandscapeExtraCropped from "./space-landscape-extra-cropped.jpg";

const Home = () => {
  const [productList] = useOutletContext();
  const favoriteProducts = productList.filter((product) => {
    if (product.rating.rate >= 4.5) {
      return product;
    }
  });

  return (
    <section className={styles.homeContainer}>
      <section className={styles.heroImageContainer}>
        <img
          className={styles.spaceImage}
          src={spaceLandscapeExtraCropped}
          alt="space landscape"
        />
        <h2>Quality Goods. No Nonsense.</h2>
        <button>Shop All Products</button>
      </section>
      <h3 className={styles.favoritesHeader}>Customer Favorites</h3>
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
