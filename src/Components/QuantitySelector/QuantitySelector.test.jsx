import { describe, it, expect } from "vitest";
import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";
import Home from "../Home/Home";

const mockObjArr = [
  {
    id: 1,
    title: "Test Obj 1",
    price: 126.54,
    description: "Test Obj 1 is the perfect daypack",
    category: "outdoors",
    image: {
      url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    rating: {
      rate: 4.5,
      count: 120,
    },
    addedToCart: false,
    quantity: 2,
  },
];

const Wrapper = () => {
  const [mockProductList, setMockProductList] = useState(mockObjArr);
  return <Outlet context={[mockProductList, setMockProductList]} />;
};

describe("QuantitySelector", () => {
  it("should reduce the input value", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();
    const decrementButton = screen.getByRole("button", { name: "-" });

    expect(decrementButton).toBeInTheDocument();

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.click(decrementButton);
    expect(Number(input.value)).toEqual(1);
  });

  it("should increase the input value", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();
    const incrementButton = screen.getByRole("button", { name: "+" });

    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.click(incrementButton);

    expect(Number(input.value)).toEqual(3);
  });

  it("should change the input value", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();
    const input = screen.getByRole("spinbutton", { name: "Quantity" });

    await user.type(input, "3");
    expect(Number(input.value)).toEqual(23);
  });
});
