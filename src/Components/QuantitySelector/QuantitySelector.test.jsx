import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuantitySelector from "./QuantitySelector";

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

describe("QuantitySelector", () => {
  it("should reduce the input value", async () => {
    render(
      <QuantitySelector
        title={mockObj.title}
        price={mockObj.price}
        description={mockObj.description}
        category={mockObj.category}
        image={mockObj.image}
        rating={mockObj.rating}
      />,
    );
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: "-" });
    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.type(input, "2");

    const originalInputValue = Number(input.value);

    await user.click(button);

    expect(Number(input.value)).toBeLessThan(originalInputValue);
  });

  it("should increase the input value", async () => {
    render(
      <QuantitySelector
        title={mockObj.title}
        price={mockObj.price}
        description={mockObj.description}
        category={mockObj.category}
        image={mockObj.image}
        rating={mockObj.rating}
      />,
    );
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: "+" });
    const input = screen.getByRole("spinbutton", { name: "Quantity" });
    const inputValue = Number(input.value);

    await user.click(button);

    expect(Number(input.value)).toBeGreaterThan(inputValue);
  });

  it("should change the input value", async () => {
    render(
      <QuantitySelector
        title={mockObj.title}
        price={mockObj.price}
        description={mockObj.description}
        category={mockObj.category}
        image={mockObj.image}
        rating={mockObj.rating}
      />,
    );
    const user = userEvent.setup();

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.clear(input);
    await user.type(input, "2");

    expect(input).toHaveValue(Number("2"));
  });

  it("should leave the typed input number after blur event", async () => {
    render(
      <QuantitySelector
        title={mockObj.title}
        price={mockObj.price}
        description={mockObj.description}
        category={mockObj.category}
        image={mockObj.image}
        rating={mockObj.rating}
      />,
    );
    const user = userEvent.setup();

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.clear(input);
    await user.type(input, "23");
    await user.tab();

    expect(input).not.toHaveFocus();
    expect(input).toHaveValue(Number("23"));
  });
});
