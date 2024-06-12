import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import SmoothieDetails from "@/routes/smoothie-details/SmoothieDetails";

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })),
});

test("Clicking on the plus sign button", async () => {
  render(<SmoothieDetails />, { wrapper: BrowserRouter });

  expect(screen.getByTitle("plus")).toBeInTheDocument();
  const user = userEvent.setup();
  const plusButton = vi.spyOn(user, "click");
  const plusButtonLink = screen.getByTitle(/plus/i);
  const count = screen.getByTestId("count");

  await user.click(plusButtonLink);
  expect(plusButton).toHaveBeenCalledTimes(1);

  expect(count.textContent).toBe("1");
});

test("Clicking on the minus sign button", async () => {
  render(<SmoothieDetails />, { wrapper: BrowserRouter });

  expect(screen.getByTitle("minus")).toBeInTheDocument();
  const user = userEvent.setup();

  const minusButton = vi.spyOn(user, "click");
  const minusButtonLink = screen.getByTitle(/minus/i);
  const count = screen.getByTestId("count");

  await user.click(minusButtonLink);
  expect(minusButton).toHaveBeenCalledTimes(1);
  expect(count.textContent).toBe("0");
});

test("'Add to cart' button, (value count >= 1)", async () => {
  render(<SmoothieDetails />, { wrapper: BrowserRouter });

  expect(screen.getByText("Add To Cart")).toBeInTheDocument();

  //TODO
  //**expect "added to cart successfully" message alert
});

test("'Add to cart' button, (value count < 1)", async () => {
  render(<SmoothieDetails />, { wrapper: BrowserRouter });

  expect(screen.getByText("Add To Cart")).toBeInTheDocument();

  //TODO
  //**expect "The smoothie has not been added, please select amount of smoothies" message alert
});

test("double arrows back button", async () => {
  render(<SmoothieDetails />, { wrapper: BrowserRouter });

  const user = userEvent.setup();
  const backButton = vi.spyOn(user, "click");
  const backButtonLink = screen.getByTestId("back-button");

  await user.click(backButtonLink);
  expect(backButton).toHaveBeenCalledTimes(1);

  //smoothie bowl list page is render
  expect(window.location.pathname).toBe("/smoothie-bowls");
});

test("heart checked or favorite action", async () => {
  render(<SmoothieDetails />, { wrapper: BrowserRouter });

  expect(screen.getByRole("checkbox")).toBeInTheDocument();

  //TODO
  //**expect the smoothie to be added to favorite section
});
