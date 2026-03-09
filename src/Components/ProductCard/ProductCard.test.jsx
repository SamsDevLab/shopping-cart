import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "./ProductCard";

const mockObj = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: {
    url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    alt: "Foldsack",
  },
  rating: {
    rate: 3.9,
    count: 120,
  },
};

describe("Product Card", () => {
  it("should change text to 'Adding to Cart...'", async () => {
    render(
      <ProductCard
        title={mockObj.title}
        price={mockObj.price}
        description={mockObj.description}
        category={mockObj.category}
        image={mockObj.image}
        rating={mockObj.rating}
      />,
    );
    const user = userEvent.setup();

    const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(addToCartBtn);

    expect(addToCartBtn).toHaveTextContent("Added to Cart");
  });

  it("should render all product information e.g. title, price, etc.", () => {
    render(
      <ProductCard
        title={mockObj.title}
        price={mockObj.price}
        description={mockObj.description}
        category={mockObj.category}
        image={mockObj.image}
        rating={mockObj.rating}
      />,
    );

    const title = screen.getByRole("heading", {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    });
    expect(title).toHaveTextContent(
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    );

    const price = screen.getByRole("heading", { name: "109.95" });
    expect(price).toHaveTextContent("109.95");

    const description = screen.getByText(
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    );
    expect(description).toHaveTextContent(
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    );

    const category = screen.getByRole("heading", { name: "men's clothing" });
    expect(category).toHaveTextContent("men's clothing");

    const image = screen.getByRole("img", { name: "Foldsack" });
    expect(image).toBeInTheDocument();

    const rating = screen.getByText("3.9/5 from 120 reviews");
    expect(rating).toHaveTextContent("3.9/5 from 120 reviews");
    expect(rating).toBeInTheDocument();
  });
});
