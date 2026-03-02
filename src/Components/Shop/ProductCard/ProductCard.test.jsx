import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  it("should reduce the input value", async () => {
    render(<ProductCard />);
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: "-" });
    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.type(input, "2");

    const originalInputValue = Number(input.value);

    await user.click(button);

    expect(Number(input.value)).toBeLessThan(originalInputValue);
  });

  it("should increase the input value", async () => {
    render(<ProductCard />);
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: "+" });
    const input = screen.getByRole("spinbutton", { name: "Quantity" });
    const inputValue = Number(input.value);

    await user.click(button);

    expect(Number(input.value)).toBeGreaterThan(inputValue);
  });

  it("should change the input value", async () => {
    render(<ProductCard />);
    const user = userEvent.setup();

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.type(input, "2");

    expect(input).toHaveValue(Number("12"));
  });

  // Start here Monday - figure out how to test for the blur event and parse the numbers
  it("should leave the typed input number after blur event", async () => {
    render(<ProductCard />);
    const user = userEvent.setup();

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.clear(input);

    await user.type(input, "23");

    await user.tab();

    expect(input).not.toHaveFocus();
    expect(input).toHaveValue(Number("23"));
  });
});
