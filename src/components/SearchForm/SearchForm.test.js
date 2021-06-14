import React from "react";
import SearchForm from ".";
// Testing Dependencies
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("<SearchForm />", () => {
  beforeEach(() => {
    const mockedFunction = jest.mock();
    render(<SearchForm api={mockedFunction} clear={mockedFunction} />);
  });

  //unit tests
  it("should have a title information", () => {
    const titling = screen.getByText("Search for repos on GitHub!");
    expect(titling).toBeInTheDocument();
  });

  it("should have an input", () => {
    const inputText = screen.getByPlaceholderText("Enter Keywords");
    expect(inputText).toBeInTheDocument();
  });

  it("should have a submit button", () => {
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  it("should have subtext for search suggestions", () => {
    const subText = screen.getByText(
      "Try a topic idea, project title, or random keywords!"
    );
    expect(subText).toBeInTheDocument();
  });

  // integration tests
  it("should render a clear button on typing", () => {
    const inputField = screen.getByPlaceholderText("Enter Keywords");

    userEvent.type(inputField, "tetris");

    const clearButton = screen.getByText("Clear");
    expect(clearButton).toBeInTheDocument();
  });

  it("should have input field text as value", () => {
    const inputField = screen.getByPlaceholderText("Enter Keywords");

    userEvent.type(inputField, "tetris");

    expect(inputField.value).toBe("tetris");
  });
});
