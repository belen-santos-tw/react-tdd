import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Square } from "./Square";

test("it renders correctly when nobody clicked on it", () => {
  const result = render(<Square position={1} onClick={() => {}} />);
  const element = result.getByTestId("square-1");
  expect(element).toHaveTextContent("");
});

test("it renders correctly when player 1 clicked on it", () => {
  const result = render(<Square position={1} player="X" onClick={() => {}} />);
  const element = result.getByTestId("square-1");
  expect(element).toHaveTextContent("X");
});

test("it should call click handler when it does not have value", () => {
  const onClick = jest.fn();
  const result = render(<Square position={1} onClick={onClick} />);
  const element = result.getByTestId("square-1");
  fireEvent.click(element);
  expect(onClick).toBeCalled();
});

test("it should not call click handler when it has value", () => {
  const onClick = jest.fn();
  const result = render(<Square position={1} onClick={onClick} player={"X"} />);
  const element = result.getByTestId("square-1");
  fireEvent.click(element);
  expect(onClick).not.toBeCalled();
});