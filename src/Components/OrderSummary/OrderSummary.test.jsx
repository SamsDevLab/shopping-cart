import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import OrderSummary from "./OrderSummary";

const subtotal = 175.55;
const shipping = 10;
const tax = 10.53;
const total = 196.08;

describe("OrderSummary", () => {
  it("should render Subtotal, Shipping, Tax, and Total", () => {
    render(
      <OrderSummary
        subtotal={subtotal}
        shipping={shipping}
        tax={tax}
        total={total}
      />,
    );

    const subtotalElement = screen.getByRole("heading", {
      name: "Subtotal",
    });
    const shippingElement = screen.getByRole("heading", {
      name: "Shipping",
    });
    const salesTaxElement = screen.getByRole("heading", {
      name: "Sales Tax",
    });
    const totalPriceElement = screen.getByRole("heading", { name: "Total" });

    expect(subtotalElement).toBeInTheDocument();
    expect(shippingElement).toBeInTheDocument();
    expect(salesTaxElement).toBeInTheDocument();
    expect(totalPriceElement).toBeInTheDocument();
  });

  it("should render the dollar values of subtotal, shippingTotal,tax, and  total", () => {
    render(
      <OrderSummary
        subtotal={subtotal}
        shipping={shipping}
        tax={tax}
        total={total}
      />,
    );

    const subtotalPrice = screen.getByTestId("subtotal");
    const shippingPrice = screen.getByTestId("shipping");
    const taxPrice = screen.getByTestId("tax");
    const totalPrice = screen.getByTestId("total");

    expect(subtotalPrice.textContent).toBe("$175.55");
    expect(shippingPrice.textContent).toBe("$10");
    expect(taxPrice.textContent).toBe("$10.53");
    expect(totalPrice.textContent).toBe("$196.08");
  });
});
