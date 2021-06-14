import React from "react";
import ResultCard from ".";
// Testing Dependencies
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<ResultCard />", () => {
  //unit tests
  it("should render a ResultCard", () => {
    const mockedResultData = {
      id: 123,
      name: "Sweet Repo",
      language: "JavaScript",
      stargazers_count: 42,
    };

    const mockedFunction = jest.mock();

    render(<ResultCard data={mockedResultData} viewRepo={mockedFunction} />);

    const repoName = screen.getByText('Sweet Repo')
    const repoLang = screen.getByText('Language: JavaScript')
    const repoStar = screen.getByText('Total ⭐\'s: 42')

    expect(repoName).toBeInTheDocument();
    expect(repoLang).toBeInTheDocument();
    expect(repoStar).toBeInTheDocument();
  });
});
