import styles from "./Home.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useOutletContext } from "react-router";

const Home = () => {
  const [productList, setProductList] = useOutletContext();
  const favoriteItems = productList.filter((product) => {
    if (product.rating.rate >= 4.5) {
      return product;
    }
  });

  return (
    <>
      <h2 className={styles.homeHeader}>Greetings from Sam's Shop</h2>
      <p>Top Rated Items</p>
      {favoriteItems.map((item) => {
        return (
          <ProductCard
            data-testid="product-card"
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating}
          />
        );
      })}
    </>
  );
};

export default Home;
