// import App from "@/routes/App";
import HomeFooter from "@/routes/home/HomeFooter";
import { render } from "@testing-library/react";
// import { createMemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
// import userEvent from "@testing-library/user-event";

// Create In memory router

// describe("A truthy statement", () => {
//   const router = createMemoryRouter([
//     {
//       path: "/",
//       element: <App />,
//     },
//   ]);
// });

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
// test("smoothie card clicked", async () => {
//   const wrapper = render(<HomeFooter />);
//   const user = userEvent.setup();
// });
