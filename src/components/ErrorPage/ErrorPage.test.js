import React from "react";
import ErrorPage from ".";
// Testing Dependencies
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<ErrorPage />", () => {
  //unit test

  it("should render the ErrorPage component", () => {
      
    render(<ErrorPage statusCode={404} />);

    const errorImg = screen.getByRole("img");
    const errorCode = screen.getByText("Error: 404");
    const tryAgain = screen.getByText("Please Try Again");

    expect(errorImg).toBeInTheDocument();
    expect(errorCode).toBeInTheDocument();
    expect(tryAgain).toBeInTheDocument();
  });
});
