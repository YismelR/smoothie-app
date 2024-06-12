import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "@/routes/home/App";
import HomeFooter from "@/routes/home/HomeFooter";
import HomeDescription from "@/routes/home/HomeDescription";

test("the smoothie card", async () => {
  const wrapper = render(<HomeFooter />);
  expect(wrapper).toBeTruthy();
});

test("smoothie card text", async () => {
  const wrapper = render(<HomeFooter />);
  const p = wrapper.container.querySelector("p");
  expect(p?.textContent?.toLowerCase()).toBe(
    "Blueberry Banana Smoothie".toLowerCase()
  );
});

test("the 'order now' button click", async () => {
  render(<HomeDescription />, { wrapper: BrowserRouter });

  expect(screen.getByText("Order Now")).toBeInTheDocument;

  const user = userEvent.setup();
  const orderNow = vi.spyOn(user, "click");
  const orderNowLink = screen.getByText(/Order Now/i);

  await user.click(orderNowLink);
  expect(orderNow).toHaveBeenCalledTimes(1);
  //expect the order now button to be the order Now page description
  expect(window.location.pathname).toBe("/details");
});

test("Bowls router link receives atleast one click", async () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText("Bowls")).toBeInTheDocument();

  const user = userEvent.setup();
  const bowls = vi.spyOn(user, "click");
  const bowlsLink = screen.getByText(/Bowls/i);

  await user.click(bowlsLink);

  expect(bowls).toHaveBeenCalledTimes(1);
});

test("About router link receives atleast one click", async () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText("About")).toBeInTheDocument();

  const user = userEvent.setup();
  const about = vi.spyOn(user, "click");
  const aboutLink = screen.getByText(/About/i);

  await user.click(aboutLink);
  expect(about).toHaveBeenCalledTimes(1);
});

test("Contact Us router link receives atleast one click", async () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText("Contact Us")).toBeInTheDocument();

  const user = userEvent.setup();
  const contactUs = vi.spyOn(user, "click");
  const contactUsLink = screen.getByText(/Contact Us/i);

  await user.click(contactUsLink);
  expect(contactUs).toHaveBeenCalledTimes(1);
});
