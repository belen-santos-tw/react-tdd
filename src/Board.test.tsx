import React from "react";
import {render} from "@testing-library/react";
import Board from "./Board";

test("it should render all 9 squares inside the board", () => {
    const result = render(<Board />);
    const squares = result.getAllByTestId("square-", {exact: false});
    expect(squares.length).toBe(9);
})