import styles from "./Home.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useOutletContext } from "react-router";

const Home = () => {
  const [productList, setProductList] = useOutletContext();
  const favoriteProducts = productList.filter((product) => {
    if (product.rating.rate >= 4.5) {
      return product;
    }
  });

  return (
    <>
      <h2 className={styles.homeHeader}>Greetings from Sam's Shop</h2>
      <p>Top Rated Items</p>
      <div data-testid="home-card-container">
        {favoriteProducts.map((product) => {
          return (
            <ProductCard
              data-testid="product-card"
              key={product.id}
              props={product}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
