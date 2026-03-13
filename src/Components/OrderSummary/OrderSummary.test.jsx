import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import OrderSummary from "./OrderSummary";

const mockObjArr = [
  {
    id: 10,
    title: "Testing",
    price: 50.5,
    description: "Nice test pack",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
    addedToCart: true,
    quantity: 1,
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
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
];

describe("OrderSummary", () => {
  it("should render 5 headers", () => {
    render(<OrderSummary />);

    const orderSummary = screen.getByRole("heading", { name: "Order Summary" });
    const subtotal = screen.getByRole("heading", { name: "Subtotal" });
    const shipping = screen.getByRole("heading", { name: "Shipping" });
    const salesTax = screen.getByRole("heading", { name: "Sales Tax" });
    const total = screen.getByRole("heading", { name: "Total" });

    expect(
      orderSummary,
      subtotal,
      shipping,
      salesTax,
      total,
    ).toBeInTheDocument();
  });
});
