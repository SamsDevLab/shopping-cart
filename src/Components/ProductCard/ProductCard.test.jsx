import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import userEvent from "@testing-library/user-event";
import Shop from "../Shop/Shop";

const mockSetterFn = () => {
  return "Set Obj";
};

const mockObjArr = [
  [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      rating: {
        rate: 3.9,
        count: 120,
      },
      addedToCart: false,
    },
  ],
  mockSetterFn,
];

const Wrapper = () => {
  return <Outlet context={mockObjArr} />;
};

describe("ProductCard", () => {
  it("should change text to 'Added to Cart...'", async () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });

    await user.click(addToCartBtn);

    expect(addToCartBtn).toHaveTextContent("Added to Cart");
  });

  it("should render all product information e.g. title, price, etc.", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const title = screen.getByRole("heading", {
      name: "Fjallraven - Foldsack No. 1 Ba...",
    });
    expect(title).toHaveTextContent("Fjallraven - Foldsack No. 1 Ba...");

    const price = screen.getByRole("heading", { name: "$109.95" });
    expect(price).toHaveTextContent("109.95");

    const category = screen.getByRole("heading", { name: "men's clothing" });
    expect(category).toHaveTextContent("men's clothing");

    const image = screen.getByRole("img", {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    });
    expect(image).toBeInTheDocument();

    const rating = screen.getByText("3.9/5 (120 Reviews)");
    expect(rating).toHaveTextContent("3.9/5 (120 Reviews)");
    expect(rating).toBeInTheDocument();
  });
});
