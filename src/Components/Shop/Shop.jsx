import ProductCard from "../ProductCard/ProductCard.jsx";
import { useOutletContext } from "react-router";

const Shop = () => {
  const [productList, setProductList] = useOutletContext([]);

  return (
    <>
      <div data-testid="card-container">
        {productList.map((item) => {
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
      </div>
    </>
  );
};

export default Shop;
