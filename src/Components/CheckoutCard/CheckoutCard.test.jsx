import { describe, it, expect } from "vitest";
import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../Cart/Cart";
import { MemoryRouter, Routes, Route, Outlet } from "react-router";

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
];

const Wrapper = () => {
  const [mockProductList, setMockProductList] = useState(mockObjArr);
  return <Outlet context={[mockProductList, setMockProductList]} />;
};

describe("CheckoutCard", () => {
  it("should render the elements of a CheckoutCard", () => {
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const image = screen.getByRole("img", { name: "Testing" });
    expect(image).toBeInTheDocument();

    const title = screen.getByRole("heading", { name: "Testing..." });
    expect(title).toBeInTheDocument();

    const trashButton = screen.getByTestId("trash-button");
    expect(trashButton).toBeInTheDocument();
  });

  it("should remove an item from Cart if 'Trash' button is clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const user = userEvent.setup();

    const trashButton = screen.getByTestId("trash-button");
    expect(trashButton).toBeInTheDocument();

    await user.click(trashButton);

    const deletedTrashButton = screen.queryByTestId("trash-button");
    expect(deletedTrashButton).not.toBeInTheDocument();
  });
});
