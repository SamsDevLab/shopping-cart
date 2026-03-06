import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import Shop from "./Shop";

const mockObjArr = [
  [
    {
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
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image:
        "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
  ],
];

function Wrapper() {
  return <Outlet context={mockObjArr} />;
}

describe("Shop", () => {
  it("should add three ProductCards to the DOM", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const cardContainer = screen.getByTestId("card-container");

    expect(cardContainer.children).toHaveLength(3);
  });
});
