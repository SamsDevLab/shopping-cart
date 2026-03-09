import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import Cart from "./Cart";

const mockObjArrCart = [
  [
    {
      id: 1,
      title: "Test Object 1",
      price: 999.99,
      description: "Good test object",
      category: "men's clothing",
      image: {
        url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        alt: "Foldsack",
      },
      rating: {
        rate: 3.9,
        count: 120,
      },
      addedToCart: true,
    },
    {
      id: 11,
      title: "Test Object 2",
      price: 111.11,
      description: "Good test object 2",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
      rating: {
        rate: 4.8,
        count: 319,
      },
      addedToCart: false,
    },
    {
      id: 15,
      title: "Test Object 3",
      price: 0.99,
      description: "Good test object 2",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
      rating: {
        rate: 2.6,
        count: 200,
      },
      addedToCart: true,
    },
  ],
];

const Wrapper = () => {
  return <Outlet context={mockObjArrCart} />;
};

describe("Cart", () => {
  it("should render cards only if 'addedToCart' equals true", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Cart />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const cartContainer = screen.getByTestId("cart-container");

    expect(cartContainer.children).toHaveLength(2);
  });
});
