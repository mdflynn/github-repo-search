import React, { useState } from "react";
import "./App.css";
// Components
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import SingleRepo from "../SingleRepo";
import ErrorPage from "../ErrorPage";
// API
import { searchGitHubApi } from "../../apiCalls";
// Utilities
import { createUrl } from "../../utilities";

const App = () => {
  const [fetchedSearchResults, setFetchedSearchResults] = useState([]);
  // clean data on click
  const [repoInfo, setRepoInfo] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [searchAgain, setSearchAgain] = useState(false);
  const [error, setError] = useState(false);

  const searchRepos = (searchCriteria) => {
    // dynamic api call based on criteria type
    const url = createUrl(searchCriteria);

    if (!userSearch) {
      setUserSearch(url);
    }

    searchGitHubApi(url)
      .then((resp) => {
        if (resp.status > 299) {
          setError(resp.status);
        }
        return resp.json();
      })
      .then((data) => {
        if (data.items) {
          if (!data.items.length) {
            setSearchAgain(true);
          }
          setFetchedSearchResults(data.items);
        } else {
          setRepoInfo(data);
        }
      });
  };

  // clear all search and filtering values 
  const resetSearchCriteria = () => {
    setRepoInfo("");
    setFetchedSearchResults("");
    setUserSearch("");
    setSearchAgain(false);
    setError(false);
  };

  return (
    <div className="app-div">
      <div className="searchform-div">
        <SearchForm api={searchRepos} clear={resetSearchCriteria} />
      </div>
      {fetchedSearchResults.length > 0 && !repoInfo && (
        <SearchResults
          api={searchRepos}
          data={fetchedSearchResults}
          url={userSearch}
        />
      )}
      {searchAgain && (
        <h1 className="no-search-results">
          Nothing found.
          <br />
          Try another search!
        </h1>
      )}
      {repoInfo && (
        <div className="singlerepo-div">
          <SingleRepo data={repoInfo} home={setRepoInfo} />
        </div>
      )}
      {error && (
        <div className="singlerepo-div">
          <ErrorPage statusCode={error} />
        </div>
      )}
    </div>
  );
};

export default App;
