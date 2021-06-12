import React, { useState } from "react";
import "./App.css";
// Components
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import SingleRepo from "../SingleRepo";
import MainPage from "../MainPage";
// API
import { searchGitHubApi } from "../../apiCalls";

const App = () => {
  const [fetchedSearchResults, setFetchedSearchResults] = useState([]);
  // clean data on click
  const [repoInfo, setRepoInfo] = useState("");

  // func to filter by language
  // func to search by updated page
  // func to sort by stars, ascend, desc

  const searchRepos = (searchCriteria) => {
    // dynamic api call based on criteria type

    let baseUrl = searchCriteria.includes("/")
      ? "repos/"
      : "search/repositories?&sort=stars&order=desc&q=";

    searchGitHubApi(baseUrl, searchCriteria)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.items) {
          setFetchedSearchResults(data.items);
        } else {
          setRepoInfo(data);
        }
      });
  };

  return (
    <>
      <SearchForm api={searchRepos} />
      {fetchedSearchResults.length > 0 && !repoInfo && (
        <SearchResults
          api={searchRepos}
          data={fetchedSearchResults}
        />
      )}
      {repoInfo && <SingleRepo data={repoInfo} />}
    </>
  );
};

export default App;
