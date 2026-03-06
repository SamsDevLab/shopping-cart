import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import Home from "./Home";

const mockObjArrHome = [
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
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
  ],
];

function Wrapper() {
  return <Outlet context={mockObjArrHome} />;
}

describe("Home", () => {
  it("should render 1 highly-rated item", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const cardContainer = screen.getByTestId("home-card-container");

    expect(cardContainer.children).toHaveLength(1);
  });
});
