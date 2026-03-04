import ProductCard from "./ProductCard/ProductCard.jsx";

const Shop = ({ shopObjArr }) => {
  return (
    <div data-testid="card-container">
      {shopObjArr.map((shopItem) => {
        return (
          <ProductCard
            data-testid="product-card"
            key={shopItem.id}
            title={shopItem.title}
            price={shopItem.price}
            description={shopItem.description}
            category={shopItem.category}
            rating={shopItem.rating}
          />
        );
      })}
    </div>
  );
};

export default Shop;
