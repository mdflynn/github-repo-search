import React, { useState } from "react";
import "./App.css";
// Components
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import SingleRepo from "../SingleRepo";
// API
import { searchGitHubApi } from "../../apiCalls";
// Utilities
import { createUrl } from "../../utilities";

const App = () => {
  const [fetchedSearchResults, setFetchedSearchResults] = useState([]);
  // clean data on click
  const [repoInfo, setRepoInfo] = useState("");

  const [userSearch, setUserSearch] = useState("");

  const searchRepos = (searchCriteria) => {
    // dynamic api call based on criteria type
    const url = createUrl(searchCriteria);

    if (!userSearch) {
      setUserSearch(url);
    }
    searchGitHubApi(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.items) {
          setFetchedSearchResults(data.items);
        } else {
          setRepoInfo(data);
        }
      });
  };

  const resetSearchCriteria = () => {
    setRepoInfo("")
    setFetchedSearchResults("")
    setUserSearch("")
  }

  return (
    <>
      <SearchForm api={searchRepos} clear={resetSearchCriteria} />
      {fetchedSearchResults.length > 0 && !repoInfo && (
        <SearchResults
          api={searchRepos}
          data={fetchedSearchResults}
          url={userSearch}
        />
      )}
      {repoInfo && <SingleRepo data={repoInfo} home={setRepoInfo} />}
    </>
  );
};

export default App;
