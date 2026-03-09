import ProductCard from "../ProductCard/ProductCard.jsx";
import { useOutletContext } from "react-router";

const Shop = () => {
  const [productList, setProductList] = useOutletContext([]);

  return (
    <>
      <div data-testid="card-container">
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
    </>
  );
};

export default Shop;
