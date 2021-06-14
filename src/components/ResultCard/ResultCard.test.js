import React from "react";
import ResultCard from ".";
// Testing Dependencies
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("<ResultCard />", () => {
  beforeEach(() => {
    const mockedResultData = {
      id: 123,
      name: "Sweet Repo",
      language: "JavaScript",
      stargazers_count: 42,
    };

    const mockedFunction = jest.mock();

    render(<ResultCard data={mockedResultData} viewRepo={mockedFunction} />);
  });

  //unit tests
  it("should have a name", () => {
    const repoName = screen.getByText("Sweet Repo");
    expect(repoName).toBeInTheDocument();
  });

  it("should have a language", () => {
    const repoLang = screen.getByText("Language: JavaScript");
    expect(repoLang).toBeInTheDocument();
  });

  it("should have a star count", () => {
    const repoStar = screen.getByText("Total ⭐'s: 42");
    expect(repoStar).toBeInTheDocument();
  });

  it("should have a view details button", () => {
    const detailButton = screen.getByText("View Details");
    expect(detailButton).toBeInTheDocument();
  });
});
