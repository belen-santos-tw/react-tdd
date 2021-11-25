import React from "react";
import { render, screen } from "@testing-library/react";
import { Square } from "./Square";

test("it renders correctly when nobody clicked on it", () => {
  const result = render(<Square />);
  const element = result.getByTestId("square");
  expect(element).toHaveTextContent("");
});

test("it renders correctly when player 1 clicked on it", () => {
  const result = render(<Square player="X" />);
  const element = result.getByTestId("square");
  expect(element).toHaveTextContent("X");
});
