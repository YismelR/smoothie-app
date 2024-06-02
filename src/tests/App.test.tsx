// import App from "@/routes/App";
import App from "@/routes/home/App";
import HomeFooter from "@/routes/home/HomeFooter";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import HomeDescription from "@/routes/home/HomeDescription";
import HomeImageMore from "@/routes/home/HomeImageMore";

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
  const wrapper = render(<HomeDescription />);
  const button = wrapper.container.querySelector("button") as HTMLButtonElement;

  expect(button.textContent).toBe("Order Now");

  fireEvent(
    getByText(button, "Order Now"),
    new MouseEvent("click", {
      bubbles: true,
    })
  );

  //expect the order now button to be the order Now page description
});

test("the 'more' button click", async () => {
  const wrapper = render(<HomeImageMore />);
  const button = wrapper.container.querySelector("button") as HTMLButtonElement;

  expect(button.textContent).toBe("More");

  fireEvent(
    getByText(button, "More"),
    new MouseEvent("click", {
      bubbles: true,
    })
  );

  //expect the More button to be the More details page
});

test("Home router link receives atleast one click", async () => {
  render(<App />, { wrapper: BrowserRouter });

  expect(screen.getByText("Home")).toBeInTheDocument();

  const user = userEvent.setup();
  const home = vi.spyOn(user, "click");

  const homeLink = screen.getByText(/Home/i);

  await user.click(homeLink);
  expect(home).toHaveBeenCalledTimes(1);
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
