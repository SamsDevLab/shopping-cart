import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";

const mockObjArr = [
  {
    id: 1,
  },
  {
    id: 8,
  },
  {
    id: 12,
  },
];

describe("Shop", () => {
  it("should add three ProductCards to the DOM", () => {
    render(<Shop shopObjArr={mockObjArr} />);

    const cardContainer = screen.getByTestId("card-container");

    expect(cardContainer.children).toHaveLength(3);
  });
});
