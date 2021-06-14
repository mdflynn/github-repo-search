import React from "react";
import SingleRepo from ".";
// Testing Dependencies
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<SingleRepo />", () => {
  beforeEach(() => {
    const mockedRepoData = {
      id: 123,
      name: "Sweet Repo",
      language: "JavaScript",
      stargazers_count: 42,
      description: "Awesome JavaScript Project",
      html_url: "https://github.com/Turing-Projects-MF/slapjack",
      owner: {
        login: "mdflynn",
        avatar_url: "https://avatars.githubusercontent.com/u/80067121?v=4",
      },
    };
    const mockedHomeFunc = jest.mock();
    render(<SingleRepo data={mockedRepoData} home={mockedHomeFunc} />);
  });

  //unit tests
  it("should have a repo avatar", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  it("should have a repo name", () => {
    const repoName = screen.getByText("Sweet Repo");
    expect(repoName).toBeInTheDocument();
  });

  it("should have a repo username", () => {
    const userName = screen.getByText("Created by: mdflynn");
    expect(userName).toBeInTheDocument();
  });

  it("should have a repo language", () => {
    const repoLang = screen.getByText("Language: JavaScript");
    expect(repoLang).toBeInTheDocument();
  });

  it("should have a repo star count", () => {
    const starCount = screen.getByText("Total ⭐'s: 42");
  });

  it("should have a back button", () => {
    const backButton = screen.getByText("Back to Results");
    expect(backButton).toBeInTheDocument();
  });

  it("should have a view repo button", () => {
    const viewButton = screen.getByText("View Repo");
    expect(viewButton).toBeInTheDocument();
  });
});
