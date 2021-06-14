import React from "react";
import SearchResults from ".";
import { mockedSearchResults } from "../../testData";
// Testing Dependencies
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { searchGitHubApi } from "../../apiCalls";

describe("<SearchResults />", () => {
  beforeEach(() => {
    render(
      <SearchResults
        data={mockedSearchResults}
        api={searchGitHubApi}
        url=""
        clear={jest.mock()}
      />
    );
  });

  it("should have three results displayed", () => {
    const repoOne = screen.getByText("Sweet Repo");
    const repoTwo = screen.getByText("Greatest Repo");
    const repoThree = screen.getByText("Hello World");

    expect(repoOne).toBeInTheDocument();
    expect(repoTwo).toBeInTheDocument();
    expect(repoThree).toBeInTheDocument();
  });
});
