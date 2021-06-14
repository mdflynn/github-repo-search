import React from "react";
import ErrorPage from ".";
// Testing Dependencies
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<ErrorPage />", () => {
  beforeEach(() => {
    render(<ErrorPage statusCode={404} />);
  });

  //unit test
  it("should render an error image", () => {
    const errorImg = screen.getByRole("img");
    expect(errorImg).toBeInTheDocument();
  });

  it("should render the error status code", () => {
    const errorCode = screen.getByText("Error: 404");
    expect(errorCode).toBeInTheDocument();
  });

  it("should render try again", () => {
    const tryAgain = screen.getByText("Please Try Again");
    expect(tryAgain).toBeInTheDocument();
  });
});
