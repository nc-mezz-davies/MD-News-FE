import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    screen.debug();
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("should have desription paragraph", () => {
    render(<App />);
    screen.getByText(
      "This is a description paragraph and it explains some things"
    );
  });
  test("should render a main section", () => {
    render(<App />);
    screen.getByRole("main");
  });
});
