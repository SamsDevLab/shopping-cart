import { describe, it, expect, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

describe("App", () => {
  it("should call the fetch request", async () => {
    const mockResponse = {
      id: 1,
      title: "Test",
      price: 99.99,
      description: "Test response, amigo",
      category: "menswear",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };

    globalThis.fetch = vi.fn(() => {
      const response = Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      });

      return response;
    });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });
});
