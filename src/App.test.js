import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders logo", () => {
  render(<App />);
  const logoElement = screen.getByText("Stunter");
  expect(logoElement).toBeInTheDocument();
});

test("renders card stack", () => {
  render(<App />);
  const cardstack = screen.getByTestId("cardStack");
  expect(cardstack).toBeInTheDocument();
});

test("renders stunter stats bar", () => {
  render(<App />);
  const statsBar = screen.getByTestId("skills");
  expect(statsBar).toBeInTheDocument();
});
